"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
  durationMs?: number;
};

function parseValue(raw: string) {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: raw, digits: 0 };
  const numStr = match[1] ?? "";
  return { number: Number(numStr), suffix: match[2] ?? "", digits: numStr.length };
}

export default function StatCounter({ value, durationMs = 1200 }: StatCounterProps) {
  const { number, suffix, digits } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);
  const hostRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || startedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / durationMs, 1);
          const next = Math.round(progress * number);
          setDisplay(next);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [number, durationMs]);

  return (
    <span ref={hostRef}>
      {digits > 0 ? String(display).padStart(digits, "0") : display}
      {suffix}
    </span>
  );
}
