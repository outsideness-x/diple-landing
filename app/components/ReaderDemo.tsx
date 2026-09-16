"use client";

import { useEffect, useRef, useState } from "react";
import { useWhenSeen } from "./useWhenSeen";

const THEMES = [
  { id: "paper", name: "Paper" },
  { id: "sepia", name: "Sepia" },
  { id: "carbon", name: "Carbon" },
  { id: "ink", name: "Ink" },
] as const;

type Theme = (typeof THEMES)[number]["id"];

const SIZES = [17, 19, 21] as const;

/**
 * The page, live rather than photographed.
 *
 * Two things here are the app's own and not an impression of it: the four papers are the exact
 * bytes `DipleColor.Page` hands the reader's navigator, and the mark is drawn the way the app
 * draws it — a gradient stroke crossing each line at a hand's pace, with a soft leading edge
 * where the ink is still spreading, one line starting a little behind the last. A highlight in
 * diple is *made*, not switched on.
 */
export function ReaderDemo() {
  const [theme, setTheme] = useState<Theme>("paper");
  const [size, setSize] = useState(1);
  const [run, setRun] = useState(0);
  const [replaying, setReplaying] = useState(false);
  const holder = useRef<HTMLDivElement>(null);
  const seen = useWhenSeen(holder, 0.35);
  const marked = seen && !replaying;

  // A replay has to take the attribute off for a frame; the animation is keyed to it.
  useEffect(() => {
    if (!replaying) return;
    const frame = window.requestAnimationFrame(() => setReplaying(false));
    return () => window.cancelAnimationFrame(frame);
  }, [replaying]);

  return (
    <div className="reader-demo" ref={holder}>
      <div className="reader" data-theme={theme} style={{ "--reader-size": `${SIZES[size]}px` }as React.CSSProperties}>
        <article className="reader-sheet" key={run} data-marked={marked || undefined}>
          <p className="reader-chapter">Chapter X</p>
          <p className="reader-prose">
            I spent the following day roaming through the valley. I stood beside the sources of the
            Arveiron, which take their rise in a glacier, that with slow pace is advancing down from
            the summit of the hills, to barricade the valley. The abrupt sides of vast mountains were
            before me; the icy wall of the glacier overhung me; a few shattered pines were scattered
            around; and the solemn silence of this glorious presence-chamber of imperial Nature was
            broken only by the brawling waves, or the fall of some vast fragment, the thunder sound of
            the avalanche.{" "}
            <span className="reader-marked">
              <mark style={{ "--ink-delay": "0ms" } as React.CSSProperties}>
                These sublime and magnificent scenes{" "}
              </mark>
              <mark style={{ "--ink-delay": "70ms" } as React.CSSProperties}>
                afforded me the greatest consolation{" "}
              </mark>
              <mark style={{ "--ink-delay": "140ms" } as React.CSSProperties}>
                that I was capable of receiving.
              </mark>
            </span>{" "}
            They elevated me from all littleness of feeling; and although they did not remove my grief,
            they subdued and tranquillised it.
          </p>

          <p className="reader-prose reader-prose-quiet">
            In some degree, also, they diverted my mind from the thoughts over which it had brooded for
            the last month.
          </p>

          <span className="reader-wedge" aria-hidden="true">
            &gt;
          </span>

          <aside className="reader-note" aria-label="Margin note">
            <span className="reader-note-line">Consolation, not terror.</span>
            <span className="reader-note-line">Burke would not have expected this.</span>
          </aside>
        </article>

        <div className="reader-bar" aria-hidden="true">
          <span className="reader-bar-track">
            <span className="reader-bar-fill" />
          </span>
          <span className="reader-bar-row">
            <b>44%</b>
            <span>4 h 3 min left</span>
            <span>Chapter X</span>
          </span>
        </div>
      </div>

      <div className="reader-controls">
        <div className="swatches" role="radiogroup" aria-label="Page theme">
          {THEMES.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={theme === option.id}
              className="swatch"
              data-theme={option.id}
              onClick={() => setTheme(option.id)}
            >
              <span aria-hidden="true">Aa</span>
              <em>{option.name}</em>
            </button>
          ))}
        </div>

        <div className="reader-tools">
          <div className="stepper" role="group" aria-label="Type size">
            <button type="button" onClick={() => setSize((s) => Math.max(0, s - 1))} aria-label="Smaller type">
              A<sub>–</sub>
            </button>
            <span aria-hidden="true" />
            <button type="button" onClick={() => setSize((s) => Math.min(SIZES.length - 1, s + 1))} aria-label="Larger type">
              A<sup>+</sup>
            </button>
          </div>
          <button
            type="button"
            className="replay"
            onClick={() => {
              setReplaying(true);
              setRun((value) => value + 1);
            }}
          >
            Mark it again
          </button>
        </div>
      </div>
    </div>
  );
}
