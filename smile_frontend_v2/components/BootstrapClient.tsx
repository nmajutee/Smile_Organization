'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Import Bootstrap JS on client side only
    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    loadBootstrap();
  }, []);

  return null;
}
