"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWhenSeen } from "./useWhenSeen";
import { useStillness } from "./useStillness";

const VIEWS = [
  {
    id: "notes",
    name: "Notes",
    shot: "/shots/mac-notes.webp",
    alt: "diple on macOS: spaces on the left, the note list in the middle, the page on the right",
    line: "Spaces, the list and the page — three columns, one desk.",
    key: "⌘N",
  },
  {
    id: "today",
    name: "Today",
    shot: "/shots/mac-today.webp",
    alt: "Today's page in diple on macOS, above the days before it",
    line: "A page for today, kept in a journal with the days before it.",
    key: "⌘8",
  },
  {
    id: "tasks",
    name: "Tasks",
    shot: "/shots/mac-tasks.webp",
    alt: "The Tasks list in diple on macOS, gathered from every note",
    line: "Every open box from every note, one click from where it was written.",
    key: "⌘7",
  },
  {
    id: "highlights",
    name: "Highlights",
    shot: "/shots/mac-highlights.webp",
    alt: "The Highlights place in diple on macOS with a saved passage open in the inspector",
    line: "Filter passages by book, colour and tag; collect a few into one note.",
    key: "⌥⌘I",
  },
  {
    id: "library",
    name: "Library",
    shot: "/shots/mac-library.webp",
    alt: "The library in diple on macOS with Frankenstein, Dracula and Wuthering Heights",
    line: "Your library. Not a storefront.",
    key: "⌘O",
  },
] as const;

const DWELL = 6000;

/** The Mac, toured. It advances on its own until a reader picks a view. */
export function MacTour() {
  const [index, setIndex] = useState(0);
  const [taken, setTaken] = useState(false);
  const holder = useRef<HTMLDivElement>(null);
  const seen = useWhenSeen(holder, 0.25);
  const still = useStillness();
  const running = seen && !still;

  useEffect(() => {
    if (taken || !running) return;
    const timer = window.setTimeout(() => setIndex((value) => (value + 1) % VIEWS.length), DWELL);
    return () => window.clearTimeout(timer);
  }, [index, taken, running]);

  const view = VIEWS[index];

  return (
    <div className="tour" ref={holder}>
      <div className="tour-tabs" role="tablist" aria-label="macOS views">
        {VIEWS.map((option, position) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={position === index}
            className="tour-tab"
            data-active={position === index}
            onClick={() => {
              setTaken(true);
              setIndex(position);
            }}
          >
            {option.name}
            <span className="tour-tab-line" data-run={position === index && !taken && running} />
          </button>
        ))}
      </div>

      <div className="mac tour-window">
        <span className="mac-lights" aria-hidden="true">
          <i style={{ background: "#FF5F57" }} />
          <i style={{ background: "#FEBC2E" }} />
          <i style={{ background: "#28C840" }} />
        </span>
        {VIEWS.map((option, position) => (
          <Image
            key={option.id}
            src={option.shot}
            alt={option.alt}
            width={2400}
            height={1500}
            quality={90}
            sizes="(max-width: 1100px) 94vw, 1080px"
            className="tour-plate"
            data-shown={position === index}
          />
        ))}
      </div>

      <p className="tour-line" aria-live="polite">
        <span>{view.line}</span>
        <kbd>{view.key}</kbd>
      </p>
    </div>
  );
}
