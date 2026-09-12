import React, { useMemo } from "react";

export default function Petals({ count = 18, className = "" }) {
  const petalItems = useMemo(() => {
    const types = ["marigold", "rose", "gold"];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 5) % 94}%`,
      delay: `${(i * 0.42) % 4.5}s`,
      duration: `${6.5 + ((i * 1.2) % 4)}s`,
      size: 20 + (i % 4) * 8,
      type: types[i % types.length],
      drift: `${(i % 2 === 0 ? 1 : -1) * (25 + (i % 5) * 15)}px`,
      rotateStart: (i * 47) % 360,
      scaleStart: 0.8 + (i % 3) * 0.2
    }));
  }, [count]);

  return (
    <div className={`petals-container ${className}`} aria-hidden="true">
      {petalItems.map((p) => (
        <div
          key={p.id}
          className="petal-element"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            "--drift": p.drift,
            "--rotate-start": `${p.rotateStart}deg`
          }}
        >
          <svg viewBox="0 0 30 40" className="petal-svg" width="100%" height="100%">
            <defs>
              <linearGradient id={`grad-marigold-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="35%" stopColor="#ffb300" />
                <stop offset="75%" stopColor="#fb8c00" />
                <stop offset="100%" stopColor="#e65100" />
              </linearGradient>
              <linearGradient id={`grad-rose-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff80ab" />
                <stop offset="40%" stopColor="#f06292" />
                <stop offset="80%" stopColor="#d81b60" />
                <stop offset="100%" stopColor="#880e4f" />
              </linearGradient>
              <linearGradient id={`grad-gold-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff9c4" />
                <stop offset="50%" stopColor="#ffd54f" />
                <stop offset="100%" stopColor="#ffb300" />
              </linearGradient>
            </defs>
            <path
              d="M15 2 C22 8, 28 20, 15 38 C2 20, 8 8, 15 2 Z"
              fill={
                p.type === "rose"
                  ? `url(#grad-rose-${p.id})`
                  : p.type === "gold"
                  ? `url(#grad-gold-${p.id})`
                  : `url(#grad-marigold-${p.id})`
              }
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

