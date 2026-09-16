"use client";

import { useState } from "react";
import { Mark } from "./Mark";

/** The five accents in Settings. Vellum is the default, and the one the icon ships in. */
const ACCENTS = [
  { id: "vellum", name: "Vellum", hex: "#E6D4B5" },
  { id: "ink", name: "Ink", hex: "#86A8FF" },
  { id: "lilac", name: "Lilac", hex: "#DF9BE1" },
  { id: "mint", name: "Mint", hex: "#6FD6B4" },
  { id: "clay", name: "Clay", hex: "#D97757" },
] as const;

/**
 * Pick an accent and the page takes it, icon included — which is what the app does too: the
 * thing that changes colour is the thing the reader chose, and each accent has a Home Screen
 * icon of its own.
 */
export function AccentPicker() {
  const [accent, setAccent] = useState<(typeof ACCENTS)[number]>(ACCENTS[0]);

  const choose = (next: (typeof ACCENTS)[number]) => {
    setAccent(next);
    document.documentElement.style.setProperty("--accent", next.hex);
  };

  return (
    <div className="accents">
      <div className="app-icon" aria-label={`The diple icon in ${accent.name}`}>
        <Mark id="icon-mark" />
      </div>

      <div className="accents-choice">
        <div className="accents-row" role="radiogroup" aria-label="Accent">
          {ACCENTS.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={option.id === accent.id}
              className="accent-swatch"
              style={{ "--swatch": option.hex } as React.CSSProperties}
              data-active={option.id === accent.id}
              onClick={() => choose(option)}
            >
              <span className="sr-only">{option.name}</span>
            </button>
          ))}
        </div>
        <p className="accents-name">
          <b>{accent.name}</b>
          <span>{accent.hex}</span>
        </p>
      </div>
    </div>
  );
}
