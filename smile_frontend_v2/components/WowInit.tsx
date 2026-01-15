'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function WowInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for the WOW script to load if it hasn't yet
    const initWow = () => {
      if (typeof window !== 'undefined' && (window as any).WOW) {
        new (window as any).WOW().init();
      }
    };

    // Try immediately
    initWow();

    // Also retry after a short delay to ensure DOM elements are rendered
    // and scripts heavily loaded
    const timer = setTimeout(initWow, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
