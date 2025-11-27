'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const TRACKING_URL = 'https://script.google.com/macros/s/AKfycbxYGxHPw4K_3HqdkhWWSM4dluNjSDi5z1o8saJItfXUESSSSWgMQy8VVzOy4pWijwBB9/exec';

export default function PageViewTracker() {
  const pathname = usePathname()
  
  useEffect(() => {
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
  }, [pathname])
  
  return null
}