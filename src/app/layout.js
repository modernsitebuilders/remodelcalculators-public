import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SiteSchema from '@/components/SiteSchema';
import { SITE_CONFIG } from '@/data/siteConfig';
import TrackingInitializer from '@/components/TrackingInitializer';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Free Construction Calculators | Concrete, Drywall, Roofing & More",
  description: "Professional construction material calculators for contractors and DIY builders. Calculate concrete, drywall, roofing, paint, flooring, and more using industry-standard formulas.",
  keywords: "construction calculator, concrete calculator, drywall calculator, roofing calculator, material calculator, building calculator",
  openGraph: {
    title: "Free Construction Calculators | Concrete, Drywall, Roofing & More",
    description: "Professional construction material calculators for contractors and DIY builders. Calculate concrete, drywall, roofing, paint, flooring, and more.",
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: [{
      url: `${SITE_CONFIG.baseUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Remodel Calculators - Construction Material Calculators'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Construction Calculators | Concrete, Drywall, Roofing & More",
    description: "Professional construction material calculators for contractors and DIY builders.",
    images: [`${SITE_CONFIG.baseUrl}/og-image.jpg`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SiteSchema />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQVB3MX9');`
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQVB3MX9"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        <TrackingInitializer />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}