"use client";

import { useState } from "react";

type Passage = {
  text: string;
  book: "Frankenstein" | "Dracula" | "Wuthering Heights";
  author: string;
  colour: "yellow" | "pink" | "lilac" | "green";
  comment?: string;
  tag?: string;
};

/** Three public-domain novels, as the app's own screenshots are seeded. */
const PASSAGES: Passage[] = [
  {
    text: "These sublime and magnificent scenes afforded me the greatest consolation that I was capable of receiving.",
    book: "Frankenstein",
    author: "Mary Shelley",
    colour: "yellow",
    comment: "Consolation, not terror. Burke would not have expected this.",
    tag: "#sublime",
  },
  {
    text: "Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.",
    book: "Frankenstein",
    author: "Mary Shelley",
    colour: "pink",
    comment: "The creature argues like a philosopher before he acts like a monster.",
    tag: "#objection",
  },
  {
    text: "I was benevolent and good; misery made me a fiend.",
    book: "Frankenstein",
    author: "Mary Shelley",
    colour: "yellow",
    tag: "#threshold",
  },
  {
    text: "We learn from failure, not from success!",
    book: "Dracula",
    author: "Bram Stoker",
    colour: "green",
    tag: "#method",
  },
  {
    text: "The sight of the awful and majestic in nature had indeed always the effect of solemnising my mind.",
    book: "Frankenstein",
    author: "Mary Shelley",
    colour: "lilac",
    tag: "#sublime",
  },
  {
    text: "Whatever our souls are made of, his and mine are the same.",
    book: "Wuthering Heights",
    author: "Emily Brontë",
    colour: "green",
    tag: "#definition",
  },
];

const COLOURS = ["lilac", "yellow", "green", "pink"] as const;
const BOOKS = ["Frankenstein", "Dracula", "Wuthering Heights"] as const;

/** The Highlights place: everything you kept, narrowed by book, colour and tag. */
export function HighlightsDemo() {
  const [book, setBook] = useState<(typeof BOOKS)[number] | null>(null);
  const [colour, setColour] = useState<(typeof COLOURS)[number] | null>(null);

  const shown = PASSAGES.filter(
    (passage) => (!book || passage.book === book) && (!colour || passage.colour === colour),
  );

  return (
    <div className="passages">
      <div className="passages-filters">
        <button
          type="button"
          className="chip"
          data-active={!book && !colour}
          onClick={() => {
            setBook(null);
            setColour(null);
          }}
        >
          All <b>{PASSAGES.length}</b>
        </button>

        <span className="chip-dots" role="group" aria-label="Filter by colour">
          {COLOURS.map((value) => (
            <button
              key={value}
              type="button"
              className="dot"
              data-colour={value}
              data-active={colour === value}
              aria-label={`Passages marked ${value}`}
              aria-pressed={colour === value}
              onClick={() => setColour((current) => (current === value ? null : value))}
            />
          ))}
        </span>

        {BOOKS.map((value) => (
          <button
            key={value}
            type="button"
            className="chip"
            data-active={book === value}
            onClick={() => setBook((current) => (current === value ? null : value))}
          >
            {value} <b>{PASSAGES.filter((passage) => passage.book === value).length}</b>
          </button>
        ))}
      </div>

      <p className="passages-count small" aria-live="polite">
        {shown.length} {shown.length === 1 ? "passage" : "passages"}
      </p>

      <div className="passages-grid">
        {PASSAGES.map((passage) => {
          const visible = shown.includes(passage);
          return (
            <figure
              key={passage.text}
              className="passage"
              data-colour={passage.colour}
              data-hidden={!visible || undefined}
              aria-hidden={!visible}
            >
              <blockquote>{passage.text}</blockquote>
              {passage.comment ? <p className="passage-comment">{passage.comment}</p> : null}
              <figcaption>
                <span>
                  {passage.book} · {passage.author}
                </span>
                {passage.tag ? <span className="passage-tag">{passage.tag}</span> : null}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
