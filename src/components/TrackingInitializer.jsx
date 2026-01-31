// src/components/TrackingInitializer.jsx
'use client';

import { useEffect } from 'react';

export default function TrackingInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@/utils/enhanced-tracking').then(module => {
        module.initializeTracking();
      });
    }
  }, []);
  
  return null;
}