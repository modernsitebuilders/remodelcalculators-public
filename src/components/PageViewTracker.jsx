'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const TRACKING_URL = 'https://script.google.com/macros/s/AKfycbzPrWZStk68IH2GAUyAawa97mN7OCPdo9Ly5ZSM-B6Y4qpJpqusDmyAZ1npR1VUXxs3/exec';

export default function PageViewTracker() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Track to Google Sheets
    const data = {
      siteId: 'construction-calcs',
      type: 'view',
      pageUrl: window.location.href,
      pagePath: pathname
    };
    
    const params = new URLSearchParams({
      data: JSON.stringify(data)
    });
    
    fetch(`${TRACKING_URL}?${params}`, {
      method: 'GET',
      mode: 'no-cors'
    }).catch(err => console.error('Tracking error:', err));

    // Track to Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      });
      console.log('📊 GA4 Page View:', pathname);
    }
  }, [pathname])
  
  return null
}