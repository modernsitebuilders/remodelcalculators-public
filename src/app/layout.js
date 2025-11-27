import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SiteSchema from '@/components/SiteSchema';
import { SITE_CONFIG } from '@/data/siteConfig';
import PageViewTracker from '@/components/PageViewTracker'

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
      alt: 'Job Calculators - Construction Material Calculators'
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <GoogleAnalytics measurementId={SITE_CONFIG.analytics.measurementId} />
        <PageViewTracker />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
