import React, { useEffect, useState } from "react";
import { invitation } from "../data/invitation";

function getRemaining() {
  const diff = Math.max(0, new Date(invitation.date).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [left, setLeft] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setLeft(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "రోజులు", value: left.days, sub: "DAYS", max: 365 },
    { label: "గంటలు", value: left.hours, sub: "HOURS", max: 24 },
    { label: "నిమిషాలు", value: left.mins, sub: "MINS", max: 60 },
    { label: "సెకన్లు", value: left.secs, sub: "SECS", max: 60 },
  ];

  return (
    <div className="countdown-container-fx" aria-label="Wedding Countdown">
      {/* Decorative ambient lighting */}
      <div className="countdown-glow-aura" />

      {/* Floating Sparkle Embers */}
      <div className="countdown-sparks" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`spark-dot spark-${i}`} />
        ))}
      </div>

      <div className="countdown-grid-fx">
        {items.map(({ label, value, sub, max }) => {
          const progress = Math.min(100, Math.max(5, (value / max) * 100));
          return (
            <div className="count-card-fx" key={sub}>
              {/* Circular SVG Glow Progress Ring */}
              <div className="radial-ring-wrapper">
                <svg className="radial-svg" viewBox="0 0 100 100">
                  <circle
                    className="radial-track"
                    cx="50"
                    cy="50"
                    r="44"
                  />
                  <circle
                    className="radial-progress"
                    cx="50"
                    cy="50"
                    r="44"
                    strokeDasharray="276"
                    strokeDashoffset={276 - (276 * progress) / 100}
                  />
                </svg>

                <div className="radial-inner-content">
                  <div className="count-val-fx">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="count-label-te">{label}</div>
                  <div className="count-sub-en">{sub}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
