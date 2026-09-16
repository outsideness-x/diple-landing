"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { appStoreLink, site } from "../site";
import { Mark } from "./Mark";
import { GitHubGlyph } from "./glyphs";

/**
 * The bar takes its ground only once the page has moved under it: at the top the hero is the
 * page, and a plate across it would be the first thing a reader met.
 */
export function Masthead() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="masthead" data-stuck={stuck}>
      <div className="wrap masthead-inner">
        <Link className="wordmark" href="/" aria-label="diple, home">
          <Mark id="masthead-mark" />
          <span aria-hidden="true">diple.</span>
        </Link>

        <nav className="masthead-nav" aria-label="Sections">
          <Link href="/#rooms">Two rooms</Link>
          <Link href="/#read">Read</Link>
          <Link href="/#write">Write</Link>
          <Link href="/#mac">Mac</Link>
          <Link href="/#private">Private</Link>
        </nav>

        <div className="masthead-actions">
          <a
            className="icon-link"
            href={site.sourceUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="diple on GitHub"
          >
            <GitHubGlyph />
          </a>
          <a className="btn btn-primary" {...appStoreLink}>
            Get diple
          </a>
        </div>
      </div>
    </header>
  );
}
