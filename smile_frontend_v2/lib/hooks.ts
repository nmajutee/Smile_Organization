'use client';

import { useState, useEffect, useRef, useCallback, RefCallback } from 'react';

/**
 * Counter hook for animated statistics
 * Uses callback ref pattern to avoid ESLint react-hooks/refs errors
 * Returns a tuple [count, setRef] similar to useState pattern
 */
export function useCounter(target: number, duration = 2000): [number, RefCallback<HTMLDivElement>] {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Callback ref that sets up the intersection observer
  const setRef = useCallback((node: HTMLDivElement | null) => {
    // Disconnect previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Set up new observer if node exists
    if (node) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observerRef.current.observe(node);
    }
  }, []);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Animation effect
  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return [count, setRef];
}

/**
 * Hook to detect if an element is in the viewport
 */
export function useInView(options?: IntersectionObserverInit): {
  inView: boolean;
  setRef: RefCallback<HTMLElement>;
} {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback((node: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (node) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setInView(entry.isIntersecting);
        },
        options
      );
      observerRef.current.observe(node);
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { inView, setRef };
}
