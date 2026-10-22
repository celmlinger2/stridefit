/**
 * MVP client-side parsing of GPX and TCX activity files (Strava, Garmin, etc.).
 * Best-effort: extracts total distance and duration so an imported file can
 * pre-fill a cardio log entry. Users confirm before anything is saved.
 */

export interface ParsedActivity {
  distanceKm: number | null;
  durationMin: number | null;
  source: "gpx" | "tcx";
}

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return 2 * R * Math.asin(Math.sqrt(a));
}

function parseXml(text: string): Document {
  const doc = new DOMParser().parseFromString(text, "application/xml");
  if (doc.querySelector("parsererror")) {
    throw new Error("Could not parse file as XML.");
  }
  return doc;
}

/** Parse a GPX file: sum haversine distance between track points, duration from timestamps. */
export function parseGPX(text: string): ParsedActivity {
  const doc = parseXml(text);
  const points = Array.from(doc.getElementsByTagName("trkpt"));

  let distanceKm = 0;
  let start: number | null = null;
  let end: number | null = null;
  let prev: { lat: number; lon: number } | null = null;

  for (const pt of points) {
    const lat = parseFloat(pt.getAttribute("lat") ?? "");
    const lon = parseFloat(pt.getAttribute("lon") ?? "");
    if (Number.isNaN(lat) || Number.isNaN(lon)) continue;

    if (prev) distanceKm += haversineKm(prev.lat, prev.lon, lat, lon);
    prev = { lat, lon };

    const timeEl = pt.getElementsByTagName("time")[0];
    if (timeEl?.textContent) {
      const t = Date.parse(timeEl.textContent);
      if (!Number.isNaN(t)) {
        if (start === null || t < start) start = t;
        if (end === null || t > end) end = t;
      }
    }
  }

  if (points.length === 0) {
    throw new Error("No track points found in GPX file.");
  }

  return {
    distanceKm: Math.round(distanceKm * 100) / 100,
    durationMin:
      start !== null && end !== null && end > start
        ? Math.round(((end - start) / 60000) * 10) / 10
        : null,
    source: "gpx",
  };
}

/** Parse a TCX file: sum lap DistanceMeters and TotalTimeSeconds. */
export function parseTCX(text: string): ParsedActivity {
  const doc = parseXml(text);
  const laps = Array.from(doc.getElementsByTagName("Lap"));

  if (laps.length === 0) {
    throw new Error("No laps found in TCX file.");
  }

  let distanceM = 0;
  let seconds = 0;
  for (const lap of laps) {
    const d = lap.getElementsByTagName("DistanceMeters")[0]?.textContent;
    const t = lap.getElementsByTagName("TotalTimeSeconds")[0]?.textContent;
    if (d) distanceM += parseFloat(d) || 0;
    if (t) seconds += parseFloat(t) || 0;
  }

  return {
    distanceKm: Math.round((distanceM / 1000) * 100) / 100,
    durationMin: seconds > 0 ? Math.round((seconds / 60) * 10) / 10 : null,
    source: "tcx",
  };
}

/** Dispatch based on file extension. Throws on unsupported types. */
export function parseActivityFile(fileName: string, text: string): ParsedActivity {
  const lower = fileName.toLowerCase();
  if (lower.endsWith(".gpx")) return parseGPX(text);
  if (lower.endsWith(".tcx")) return parseTCX(text);
  throw new Error("Unsupported file type. Please upload a .gpx or .tcx file.");
}
