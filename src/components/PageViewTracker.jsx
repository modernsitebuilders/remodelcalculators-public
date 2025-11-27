'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const TRACKING_URL = 'https://script.google.com/macros/s/AKfycbxYGxHPw4K_3HqdkhWWSM4dluNjSDi5z1o8saJItfXUESSSSWgMQy8VVzOy4pWijwBB9/exec';

export default function PageViewTracker() {
  const pathname = usePathname()
  
  useEffect(() => {
    fetch(TRACKING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        siteId: 'construction-calcs',
        type: 'view',
        pageUrl: window.location.href,
        pagePath: pathname
      })
    }).catch(err => console.error('Tracking error:', err))
  }, [pathname])
  
  return null
}