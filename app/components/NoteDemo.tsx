"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useWhenSeen } from "./useWhenSeen";

const SCRIPT = [
  "## Four moves",
  "- [x] Burke: obscurity, power, vastness",
  "- [ ] Shelley: Montanvert as **consolation**, not terror",
  "> These sublime and magnificent scenes afforded me the greatest consolation.",
  "See [[Why the creature reads Milton]] #sublime",
].join("\n");

/** Markers stay on the page, quietly: what is saved is portable Markdown, not a hidden format. */
function inline(text: string, keyBase: string) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[\[[^\]]*\]?\]?|#[A-Za-z][\w-]*)/g);
  return tokens.filter(Boolean).map((token, index) => {
    const key = `${keyBase}-${index}`;
    if (token.startsWith("**")) {
      const body = token.slice(2, token.endsWith("**") ? -2 : undefined);
      return (
        <Fragment key={key}>
          <i className="md-syntax">**</i>
          <b>{body}</b>
          {token.endsWith("**") && token.length > 2 ? <i className="md-syntax">**</i> : null}
        </Fragment>
      );
    }
    if (token.startsWith("[[")) {
      const body = token.replace(/^\[\[/, "").replace(/\]\]?$/, "");
      return (
        <Fragment key={key}>
          <i className="md-syntax">[[</i>
          <span className="md-link">{body}</span>
          {token.endsWith("]]") ? <i className="md-syntax">]]</i> : null}
        </Fragment>
      );
    }
    if (token.startsWith("#")) {
      return (
        <span className="md-tag" key={key}>
          {token}
        </span>
      );
    }
    return <Fragment key={key}>{token}</Fragment>;
  });
}

function Line({ text, last, index }: { text: string; last: boolean; index: number }) {
  const caret = last ? <span className="md-caret" aria-hidden="true" /> : null;

  if (text.startsWith("##")) {
    return (
      <p className="md-h">
        <i className="md-syntax md-lead">##</i>
        {inline(text.slice(2), `h${index}`)}
        {caret}
      </p>
    );
  }
  if (text.startsWith("- [")) {
    const done = text.startsWith("- [x]");
    const body = text.slice(text.startsWith("- [x]") || text.startsWith("- [ ]") ? 5 : text.length);
    return (
      <p className="md-task" data-done={done || undefined}>
        <i className="md-syntax md-lead">- [{done ? "x" : text.length > 3 ? " " : ""}]</i>
        <span className="md-box" aria-hidden="true">
          {done ? "✓" : ""}
        </span>
        <span>{inline(body, `t${index}`)}</span>
        {caret}
      </p>
    );
  }
  if (text.startsWith(">")) {
    return (
      <p className="md-quote">
        <i className="md-syntax md-lead">&gt;</i>
        {inline(text.slice(1), `q${index}`)}
        {caret}
      </p>
    );
  }
  return (
    <p className="md-p">
      {inline(text, `p${index}`)}
      {caret}
    </p>
  );
}

/**
 * The note editor, typed out.
 *
 * The app styles Markdown in place as it is written — a heading becomes a heading with its
 * hashes still standing, quietly, beside it — so the text on screen is always the text on disk.
 */
export function NoteDemo() {
  const [typed, setTyped] = useState(0);
  const holder = useRef<HTMLDivElement>(null);
  const running = useWhenSeen(holder, 0.4);

  useEffect(() => {
    if (!running || typed >= SCRIPT.length) return;
    const character = SCRIPT[typed];
    // A hand, not a teleprinter: a beat at the end of a line, a shorter one after a space.
    const pace = character === "\n" ? 300 : character === " " ? 34 : 20 + Math.random() * 34;
    const timer = window.setTimeout(() => setTyped((value) => value + 1), pace);
    return () => window.clearTimeout(timer);
  }, [running, typed]);

  const lines = SCRIPT.slice(0, typed).split("\n");
  const done = typed >= SCRIPT.length;

  return (
    <div className="note-demo card" ref={holder}>
      <header className="note-head">
        <span className="note-saved">
          <i aria-hidden="true" /> Saved
        </span>
        <span className="note-meta">
          {done ? 34 : Math.max(0, Math.round(typed / 6))} words · 1 min read
        </span>
      </header>

      <h3 className="note-title">The sublime, in four moves</h3>
      <div className="note-tags">
        <span className="note-tag note-tag-source">Frankenstein</span>
        <span className="note-tag">#essay</span>
        <span className="note-tag">#sublime</span>
      </div>

      <div className="note-body" aria-live="off">
        {lines.map((line, index) => (
          <Line key={index} text={line} index={index} last={index === lines.length - 1 && !done} />
        ))}
      </div>

      <footer className="note-foot">
        <button
          type="button"
          className="replay"
          onClick={() => setTyped(0)}
        >
          Type it again
        </button>
        <span className="small">Saved as plain Markdown</span>
      </footer>
    </div>
  );
}
