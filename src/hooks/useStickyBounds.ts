"use client";

import { useEffect, useRef, useCallback } from "react";

interface UseStickyBoundsOptions {
  topBoundarySelector?: string;
  bottomBoundarySelector?: string;
}

export function useStickyBounds<T extends HTMLElement = HTMLDivElement>({
  topBoundarySelector,
  bottomBoundarySelector,
}: UseStickyBoundsOptions = {}) {
  const targetRef = useRef<T | null>(null);
  const rafId = useRef<number | null>(null);

  const updateBounds = useCallback(() => {
    if (rafId.current !== null) return;

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const target = targetRef.current;
      if (!target) return;

      const scrollParent = getScrollParent(target);
      const parentRect = scrollParent
        ? scrollParent.getBoundingClientRect()
        : { top: 0, bottom: window.innerHeight, height: window.innerHeight };

      const targetRect = target.getBoundingClientRect();

      let topOffset = 0;
      if (topBoundarySelector) {
        const topEl = document.querySelector(topBoundarySelector);
        if (topEl) {
          const topRect = topEl.getBoundingClientRect();
          const headerBottom = topRect.bottom - parentRect.top;
          topOffset = Math.max(0, headerBottom);
        }
      }

      const viewportHeight = scrollParent
        ? scrollParent.clientHeight
        : window.innerHeight;

      let maxAvailableHeight = viewportHeight - topOffset;

      if (bottomBoundarySelector) {
        const bottomEl = document.querySelector(bottomBoundarySelector);
        if (bottomEl) {
          const bottomRect = bottomEl.getBoundingClientRect();
          const spaceToFooter = bottomRect.top - targetRect.top;
          maxAvailableHeight = Math.min(maxAvailableHeight, spaceToFooter);
        }
      }

      const safeHeight = Math.max(0, maxAvailableHeight);

      target.style.setProperty("--sticky-top", `${topOffset}px`);
      target.style.setProperty("--sticky-height", `${safeHeight}px`);
    });
  }, [topBoundarySelector, bottomBoundarySelector]);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const scrollParent = getScrollParent(target) || window;

    updateBounds();
    const timer = setTimeout(updateBounds, 50);

    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(target);
    resizeObserver.observe(document.body);

    scrollParent.addEventListener("scroll", updateBounds, { passive: true });
    window.addEventListener("resize", updateBounds);

    return () => {
      clearTimeout(timer);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      resizeObserver.disconnect();
      scrollParent.removeEventListener("scroll", updateBounds);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  return { targetRef };
}

function getScrollParent(node: HTMLElement | null): HTMLElement | null {
  if (!node || node === document.body) return null;

  if (node.classList.contains("mantine-ScrollArea-viewport")) {
    return node;
  }

  const computedStyle = window.getComputedStyle(node);
  const overflowY = computedStyle.overflowY;
  const isScrollable =
    overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay";

  if (isScrollable && node.scrollHeight > node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentElement);
}
