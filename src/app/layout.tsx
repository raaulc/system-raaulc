import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Rahul Rathod | Lead Backend Engineer — Python | FastAPI | AWS",
    template: `%s | Rahul Rathod`,
  },
  description: "Lead Backend Engineer with 14+ years experience building scalable microservices using Python/FastAPI, AWS, Kafka, Redis, and PostgreSQL. Expert in distributed systems, observability, and production-ready architectures.",
  keywords: ["Rahul Rathod", "Lead Backend Engineer", "Python Developer", "FastAPI Developer", "AWS Developer", "Microservices", "Distributed Systems", "Kafka", "Redis", "PostgreSQL", "Kubernetes", "Prometheus", "Grafana"],
  authors: [{ name: "Rahul Rathod" }],
  creator: "Rahul Rathod",
  publisher: "Rahul Rathod",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: "Rahul Rathod | Lead Backend Engineer — Python | FastAPI | AWS",
    description: "Lead Backend Engineer specializing in Python/FastAPI, AWS, and cloud-native microservices. Expert in distributed systems, observability, and scalable architectures.",
    url: DATA.url,
    siteName: "Rahul Rathod - Lead Backend Engineer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/me.png`,
        width: 1200,
        height: 630,
        alt: "Rahul Rathod - Lead Backend Engineer"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Rathod | Lead Backend Engineer — Python | FastAPI | AWS',
    description: 'Lead Backend Engineer specializing in Python/FastAPI, AWS, and cloud-native microservices',
    images: [`${DATA.url}/me.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/profile-pic.jpeg", sizes: "16x16", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "96x96", type: "image/jpeg" },
    ],
    apple: [
      { url: "/favicons/profile-pic.jpeg", sizes: "57x57", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "60x60", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "72x72", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "76x76", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "114x114", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "120x120", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "144x144", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "152x152", type: "image/jpeg" },
      { url: "/favicons/profile-pic.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/jpeg",
        sizes: "192x192",
        url: "/favicons/profile-pic.jpeg",
      },
      {
        rel: "manifest",
        url: "/favicons/manifest.json",
      },
    ],
  },
  manifest: "/favicons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rahul Rathod",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, "font-sans antialiased")}>
        {/* Background container */}
        <div className="fixed inset-0 z-[-1]">
          <PageBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
          <GoogleAnalytics gaId="G-XVF0SFD4GW" />
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
          >
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "p73rco1nfp");
            `}
          </Script>
          <JsonLd />
          <ScrollProgress />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              {children}
              <Analytics />
              <SpeedInsights />
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}