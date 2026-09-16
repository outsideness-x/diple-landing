"use client";

import { useEffect, useState } from "react";

/**
 * True when the reader has asked for less motion.
 *
 * CSS handles the animations; this is for the ones JavaScript runs — a demo that types itself,
 * a tour that advances on its own — which have to arrive finished instead of moving.
 */
export function useStillness() {
  const [still, setStill] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return still;
}
