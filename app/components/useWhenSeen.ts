"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * True once the element has been on screen — and true on the next frame if it already is when
 * the script arrives, so a demo the reader is looking at never waits for an observer to agree.
 */
export function useWhenSeen(ref: RefObject<HTMLElement | null>, threshold = 0.3) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || seen) return;

    let observer: IntersectionObserver | undefined;

    // Measured after paint, so the answer is about the page the reader is actually looking at.
    const frame = window.requestAnimationFrame(() => {
      const box = element.getBoundingClientRect();
      const alreadyThere = box.top < window.innerHeight * 0.9 && box.bottom > 0;

      if (alreadyThere || !("IntersectionObserver" in window)) {
        setSeen(true);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setSeen(true);
            observer?.disconnect();
          }
        },
        { threshold },
      );
      observer.observe(element);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [ref, seen, threshold]);

  return seen;
}
