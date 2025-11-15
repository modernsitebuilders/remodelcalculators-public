'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

// Separate component that uses the hooks
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: pathname + searchParams.toString(),
        page_title: document.title,
      });
      console.log('📊 GA4 Page View:', pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics({ measurementId }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('✅ GA4 script loaded');
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
            console.log('✅ GA4 initialized with ID: ${measurementId}');
          `,
        }}
      />
      
      {/* Wrap the hook usage in Suspense */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}