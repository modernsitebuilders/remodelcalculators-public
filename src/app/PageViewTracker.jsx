'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const TRACKING_URL = 'https://script.google.com/macros/s/AKfycbxYGxHPw4K_3HqdkhWWSM4dluNjSDi5z1o8saJItfXUESSSSWgMQy8VVzOy4pWjjwBB9/exec';

export default function PageViewTracker() {
  const pathname = usePathname()
  
  useEffect(() => {
    fetch(TRACKING_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        siteId: 'construction-calcs',
        type: 'view',
        pageUrl: window.location.href,
        pagePath: pathname
      })
    })
  }, [pathname])
  
  return null
}