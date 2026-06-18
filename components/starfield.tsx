"use client";

import React, { useMemo } from "react";

export function Starfield({ count = 80 }: { count?: number }) {
  const stars = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: Math.random() * 4,
      s: 0.5 + Math.random() * 2
    }))
  ), [count]);

  return (
    <div className="starfield">
      {stars.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.s}px`,
            height: `${s.s}px`,
            animationDelay: `${s.d}s`
          }}
        />
      ))}
    </div>
  );
}
