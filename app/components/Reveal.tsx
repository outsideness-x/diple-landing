"use client";

import { useEffect } from "react";

/**
 * Marks anything carrying `data-reveal` as seen, once, when it comes up the page.
 *
 * One observer for the document rather than one per section: the sections are plain server
 * components, and the only thing they need from the client is the moment they arrive.
 */
export function Reveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    // Whatever is already on screen when the script arrives is shown at once — a section the
    // reader is looking at must never wait for an observer to agree that it is visible.
    const onScreen = (element: HTMLElement) => {
      const box = element.getBoundingClientRect();
      return box.top < window.innerHeight * 0.95 && box.bottom > 0;
    };

    const waiting = targets.filter((element) => {
      if (!onScreen(element)) return true;
      element.setAttribute("data-in", "");
      return false;
    });

    if (waiting.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      waiting.forEach((element) => element.setAttribute("data-in", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          observer.unobserve(entry.target);
        }
      },
      // A little before the element is fully in view, and never waiting for a tall one to fit.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    waiting.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
