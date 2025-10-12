import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import StructuredData from "@/components/StructuredData";

// Lazy load components for better performance
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <div className="h-16 bg-[#131C3C] animate-pulse" />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-gray-900 animate-pulse" />,
  ssr: true,
});

const PerformanceMonitor = dynamic(() => import("@/components/PerformanceMonitor"), {
  loading: () => null,
});

// Optimized font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
    template: "%s | Pars Endüstriyel Mutfak",
  },
  description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
  keywords: [
    "pars endüstriyel mutfak",
    "paslanmaz çelik ekipman",
    "endüstriyel mutfak",
    "restoran mutfakları",
    "otel mutfakları",
    "kafe mutfakları",
    "fırın ekipmanları",
    "catering mutfakları",
    "mutfak çözümleri",
    "paslanmaz tezgah",
    "endüstriyel buzdolabı",
    "endüstriyel fırın",
    "mutfak tasarımı",
    "anahtar teslim mutfak",
    "özel üretim mutfak",
    "mutfak projelendirme",
    "istanbul mutfak firması",
    "ankara endüstriyel mutfak",
    "izmir mutfak ekipmanları",
    "türkiye mutfak üreticisi",
  ],
  authors: [{ name: "Pars Endüstriyel Mutfak", url: "https://parslanmaz-fe.vercel.app" }],
  creator: "Pars Endüstriyel Mutfak",
  publisher: "Pars Endüstriyel Mutfak",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  openGraph: {
    title: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
    description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
    url: "https://parslanmaz-fe.vercel.app",
    siteName: "Pars Endüstriyel Mutfak",
    images: [
      {
        url: "https://parslanmaz-fe.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pars Endüstriyel Mutfak - Paslanmaz Çelik Mutfak Ekipmanları",
      },
    ],
    locale: "tr_TR",
    type: "website",
    countryName: "Turkey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
    description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
    images: ["https://parslanmaz-fe.vercel.app/twitter-image.jpg"],
    creator: "@parslanmaz",
    site: "@parslanmaz",
  },
  alternates: {
    canonical: "https://parslanmaz-fe.vercel.app",
    languages: {
      'tr-TR': 'https://parslanmaz-fe.vercel.app',
    },
  },
  category: "Endüstriyel Mutfak Ekipmanları",
  classification: "Mutfak Ekipmanları, Paslanmaz Çelik, Endüstriyel",
  applicationName: "Pars Endüstriyel Mutfak",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#131C3C" },
    { media: "(prefers-color-scheme: dark)", color: "#131C3C" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/parslanmaz-logo.jpeg" />
        <meta name="theme-color" content="#131C3C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pars Mutfak" />
        <meta name="msapplication-TileColor" content="#131C3C" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased text-optimized`} suppressHydrationWarning>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        <PerformanceMonitor />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        
        {/* Performance hints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload critical resources
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  // Preload next page resources
                  const pagesToPrefetch = ['/hakkimizda', '/projeler', '/iletisim', '/sss'];
                  pagesToPrefetch.forEach(page => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = page;
                    document.head.appendChild(link);
                  });
                });
              }
              
              // Service Worker registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
              
              // Performance monitoring
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                  }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
              }
              
              // Critical resource hints
              const criticalResources = [
                { href: '/parslanmaz-logo.jpeg', as: 'image' },
                { href: 'https://fonts.googleapis.com', as: 'font', crossorigin: 'anonymous' }
              ];
              
              criticalResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = resource.href;
                link.as = resource.as;
                if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
                document.head.appendChild(link);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
