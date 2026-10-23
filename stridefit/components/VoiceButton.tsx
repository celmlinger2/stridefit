"use client";

import { useEffect, useRef, useState } from "react";

/* Minimal typings for the Web Speech API (not in the standard TS lib). */
interface SpeechRecognitionResultLike {
  0: { transcript: string };
}
interface SpeechRecognitionEventLike {
  results: { 0: SpeechRecognitionResultLike };
}
interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as Record<string, unknown>;
  return (w.SpeechRecognition as SpeechRecognitionCtor) ?? (w.webkitSpeechRecognition as SpeechRecognitionCtor) ?? null;
}

/**
 * A microphone button that captures one spoken phrase and hands the
 * transcript back. Renders nothing on browsers without speech
 * recognition, so forms work everywhere regardless.
 */
export default function VoiceButton({
  onTranscript,
  hint,
}: {
  onTranscript: (text: string) => void;
  hint: string;
}) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setSupported(getCtor() !== null);
  }, []);

  if (!supported) return null;

  function start() {
    const Ctor = getCtor();
    if (!Ctor) return;
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setHeard(text);
      onTranscript(text);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recRef.current = rec;
    setHeard(null);
    setListening(true);
    rec.start();
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={start}
        disabled={listening}
        className={listening ? "btn-primary" : "btn-secondary"}
        aria-label="Log by voice"
      >
        🎤 {listening ? "Listening…" : "Log by voice"}
      </button>
      <p className="text-xs text-muted">
        {heard ? `Heard: “${heard}” — check the fields, then save.` : hint}
      </p>
    </div>
  );
}
