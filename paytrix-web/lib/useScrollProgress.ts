"use client";

import { useEffect, useRef } from "react";

/**
 * Tracks how far the page has scrolled through a given element, as 0 -> 1.
 * 0  = element's top has just reached the bottom of the viewport
 * 1  = element's bottom has reached the top of the viewport
 *
 * Returns a ref (not state) so consumers (e.g. useFrame in R3F) can read
 * the latest value every animation frame without triggering React re-renders.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const el = elementRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      progressRef.current = Math.min(Math.max(traveled / total, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { elementRef, progressRef };
}

/** Simple global 0->1 progress across the whole document (used by the hero). */
export function useDocumentScrollProgress(overFirstNPx = 1400) {
  const progressRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      progressRef.current = Math.min(Math.max(window.scrollY / overFirstNPx, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overFirstNPx]);

  return progressRef;
}
