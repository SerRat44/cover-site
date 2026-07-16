"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseStickyBoundsOptions {
  scrollContainerId: string;
  boundarySelector: string;
  gap?: number;
}

export function useStickyBounds<T extends HTMLElement>({
  scrollContainerId,
  boundarySelector,
  gap = 10,
}: UseStickyBoundsOptions) {
  const nodeRef = useRef<T | null>(null);
  const tickingRef = useRef(false);
  const [ready, setReady] = useState(false);

  const getScrollEl = useCallback(
    () =>
      document
        .getElementById(scrollContainerId)
        ?.querySelector(".mantine-ScrollArea-viewport") as HTMLElement | null,
    [scrollContainerId],
  );

  const recalc = useCallback(() => {
    const el = nodeRef.current;
    const scrollEl = getScrollEl();
    if (!el || !scrollEl) return false;

    const containerRect = scrollEl.getBoundingClientRect();
    const boundary = document.querySelector(boundarySelector);
    const boundaryTop =
      boundary?.getBoundingClientRect().top ?? containerRect.bottom;

    const available =
      Math.min(containerRect.height, boundaryTop - containerRect.top) - gap * 2;
    el.style.height = `${Math.max(available, 100)}px`;
    return true;
  }, [getScrollEl, boundarySelector, gap]);

  const onScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      recalc();
      tickingRef.current = false;
    });
  }, [recalc]);

  useEffect(() => {
    const scrollEl = getScrollEl();
    const boundaryEl = document.querySelector(boundarySelector);
    if (!scrollEl) return;

    const ro = new ResizeObserver(recalc);
    ro.observe(scrollEl);
    if (boundaryEl) ro.observe(boundaryEl);

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      ro.disconnect();
      scrollEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [getScrollEl, boundarySelector, recalc, onScroll]);

  const setNodeRef = useCallback(
    (node: T | null) => {
      nodeRef.current = node;
      if (node) {
        recalc();
        requestAnimationFrame(() => {
          const ok = recalc();
          if (ok) setReady(true);
        });
      } else {
        setReady(false);
      }
    },
    [recalc],
  );

  return { ref: setNodeRef, ready };
}
