/**
 * Parsers for voice-logged entries. The browser's speech recognition
 * turns speech into text; these functions pull structured values out
 * of natural phrases like:
 *   "grilled chicken breast, 320 calories, 35 grams of protein"
 *   "ran 3 miles in 28 minutes" / "walked 5k in 45 minutes"
 */

export interface ParsedFoodVoice {
  name: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

export function parseFoodVoice(raw: string): ParsedFoodVoice {
  let text = ` ${raw.toLowerCase()} `;
  const out: ParsedFoodVoice = { name: "" };

  const grab = (re: RegExp): number | undefined => {
    const m = text.match(re);
    if (!m) return undefined;
    text = text.replace(m[0], " ");
    return parseFloat(m[1]);
  };
  const grabReverse = (re: RegExp): number | undefined => {
    const m = text.match(re);
    if (!m) return undefined;
    text = text.replace(m[0], " ");
    return parseFloat(m[2]);
  };

  out.calories = grab(/([\d.]+)\s*(kcal|calories|calorie|cals|cal)\b/);
  out.protein =
    grab(/([\d.]+)\s*(g|grams|gram)?\s*(of\s*)?protein\b/) ??
    grabReverse(/protein\s*(of|is|:)?\s*([\d.]+)/);
  out.carbs =
    grab(/([\d.]+)\s*(g|grams|gram)?\s*(of\s*)?carbs?\b/) ??
    grabReverse(/carbs?\s*(of|is|:)?\s*([\d.]+)/);
  out.fat =
    grab(/([\d.]+)\s*(g|grams|gram)?\s*(of\s*)?fat\b/) ??
    grabReverse(/fat\s*(of|is|:)?\s*([\d.]+)/);

  const name = text
    .replace(/^(please\s*)?(log|add|record|i ate|i had|ate|had)\b/, " ")
    .replace(/[.,;]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  out.name = name ? name[0].toUpperCase() + name.slice(1) : "";
  return out;
}

export interface ParsedCardioVoice {
  activity?: string;
  distanceKm?: number;
  durationMin?: number;
}

const ACTIVITY_WORDS: [RegExp, string][] = [
  [/\b(ran|run|running|jog|jogging)\b/, "run"],
  [/\b(walk|walked|walking|hike|hiked)\b/, "walk"],
  [/\b(cycle|cycled|cycling|bike|biked|biking|ride|rode)\b/, "cycle"],
  [/\b(swim|swam|swimming)\b/, "swim"],
  [/\b(row|rowed|rowing)\b/, "row"],
  [/\belliptical\b/, "elliptical"],
];

export function parseCardioVoice(raw: string): ParsedCardioVoice {
  const text = raw.toLowerCase();
  const out: ParsedCardioVoice = {};

  for (const [re, val] of ACTIVITY_WORDS) {
    if (re.test(text)) {
      out.activity = val;
      break;
    }
  }

  const dist = text.match(/([\d.]+)\s*(miles?|mi|km|kilometers?|kilometres?|k)\b/);
  if (dist) {
    const v = parseFloat(dist[1]);
    const unit = dist[2];
    out.distanceKm = unit.startsWith("mi") ? Math.round(v * 1.60934 * 100) / 100 : v;
  }

  const hm = text.match(/([\d.]+)\s*(hours?|hrs?|h)\b(?:\s*(?:and\s*)?([\d.]+)\s*(minutes?|mins?|m)\b)?/);
  const mins = text.match(/([\d.]+)\s*(minutes?|mins)\b/);
  if (hm) {
    out.durationMin = parseFloat(hm[1]) * 60 + (hm[2] ? parseFloat(hm[2]) : 0);
  } else if (mins) {
    out.durationMin = parseFloat(mins[1]);
  } else if (/\bhalf (an )?hour\b/.test(text)) {
    out.durationMin = 30;
  } else if (/\b(an|one) hour\b/.test(text)) {
    out.durationMin = 60;
  }

  return out;
}
