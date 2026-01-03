import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy load only non-critical components (client-side only)
const PerformanceMonitor = dynamic(() => import("@/components/PerformanceMonitor"), {
  loading: () => null,
});

const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), {
  loading: () => null,
});

// Optimized font loading with variable font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-inter",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.parslanmaz.com'),
  title: {
    default: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
    template: "%s | Pars Endüstriyel Mutfak",
  },
  description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
  keywords: [
    // Marka ve Genel
    "pars endüstriyel mutfak",
    "parslanmaz endüstriyel mutfak",
    "paslanmaz çelik ekipman",
    "paslanmaz çelik mutfak ekipmanları",
    "paslanmaz çelik ürünler",
    "endüstriyel mutfak",
    "endüstriyel mutfak ekipmanları",
    "endüstriyel mutfak malzemeleri",
    "profesyonel mutfak ekipmanları",
    "ticari mutfak ekipmanları",
    "sanayi tipi mutfak ekipmanları",
    
    // Mutfak Türleri
    "restoran mutfakları",
    "otel mutfakları",
    "kafe mutfakları",
    "fırın ekipmanları",
    "catering mutfakları",
    "hastane mutfakları",
    "okul mutfakları",
    "toplu mutfak",
    "endüstriyel mutfak firmaları",
    
    // Ürün Kategorileri
    "paslanmaz tezgah",
    "paslanmaz dolap",
    "mutfak rafları",
    "endüstriyel evye",
    "çalışma tezgahı",
    "bulaşık yıkama tezgahı",
    "duvar rafları",
    "endüstriyel buzdolabı",
    "endüstriyel fırın",
    "endüstriyel ocak",
    "davlumbaz sistemleri",
    "açık büfe ekipmanları",
    "servis üniteleri",
    "ısıtmalı vitrin",
    "soğutmalı vitrin",
    
    // Özel Dolaplar
    "pasta dolabı",
    "şarküteri dolabı",
    "ekmek dolabı",
    "unlu mamuller dolabı",
    "waffle dolabı",
    "kumpir dolabı",
    "çikolata dolabı",
    "lokum dolabı",
    "börek dolabı",
    "baklava dolabı",
    
    // Hizmetler
    "mutfak çözümleri",
    "mutfak tasarımı",
    "anahtar teslim mutfak",
    "özel üretim mutfak",
    "mutfak projelendirme",
    "mutfak danışmanlığı",
    "mutfak montajı",
    "mutfak bakımı",
    
    // Şehirler
    "istanbul mutfak firması",
    "istanbul endüstriyel mutfak",
    "ankara endüstriyel mutfak",
    "izmir mutfak ekipmanları",
    "bursa mutfak ekipmanları",
    "antalya mutfak firması",
    
    // Kalite ve Özellikler
    "304 kalite paslanmaz",
    "316 kalite paslanmaz",
    "hijyenik mutfak",
    "HACCP uyumlu",
    "CE belgeli mutfak",
    "kaliteli mutfak",
    "dayanıklı mutfak ekipmanı",
    
    // Diğer
    "türkiye mutfak üreticisi",
    "mutfak ekipmanı üreticisi",
    "paslanmaz çelik üretici",
    "endüstriyel mutfak fiyatları",
    "mutfak ekipmanı satış",
    "zeytinburnu mutfak",
  ],
  authors: [{ name: "Pars Endüstriyel Mutfak", url: "https://www.parslanmaz.com" }],
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
  other: {
    'google-site-verification': 'verification-code-placeholder',
    'yandex-verification': 'verification-code-placeholder',
    'facebook-domain-verification': 'verification-code-placeholder',
  },
  openGraph: {
    title: "Pars Endüstriyel Mutfak | Paslanmaz Çelik Mutfak Ekipmanları",
    description: "Pars Endüstriyel Mutfak, paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır. Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunuyoruz.",
    url: "https://www.parslanmaz.com",
    siteName: "Pars Endüstriyel Mutfak",
    images: [
      {
        url: "https://www.parslanmaz.com/og-image.jpg",
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
    images: ["https://www.parslanmaz.com/twitter-image.jpg"],
    creator: "@parslanmaz",
    site: "@parslanmaz",
  },
  alternates: {
    canonical: "https://www.parslanmaz.com",
    languages: {
      'tr-TR': 'https://www.parslanmaz.com',
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
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning translate="no">
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload Critical Images */}
        <link rel="preload" as="image" href="/parslanmaz-logo.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/anasayfa.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/endustriyel-mutfak-ekipmanlari.jpeg" fetchPriority="high" />
        
        {/* Disable auto-translation to avoid hydration mismatches */}
        <meta name="google" content="notranslate" />

        {/* Prefetch Important Pages */}
        <link rel="prefetch" href="/hakkimizda" />
        <link rel="prefetch" href="/projeler" />
        <link rel="prefetch" href="/iletisim" />
        
        {/* PWA and Mobile Optimization */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/parslanmaz-logo.jpeg" />
        
        {/* Theme and Mobile App Configuration */}
        <meta name="theme-color" content="#131C3C" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#131C3C" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pars Mutfak" />
        <meta name="msapplication-TileColor" content="#131C3C" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* SEO Enhancement */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="geo.position" content="41.015137;28.979530" />
        <meta name="ICBM" content="41.015137, 28.979530" />
        
        {/* Language and Content Type */}
        <meta httpEquiv="content-language" content="tr" />
        <meta name="language" content="Turkish" />
      </head>
      <body className={`${inter.className} antialiased text-optimized`} suppressHydrationWarning>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <PerformanceMonitor />
        
        {/* Minimal performance script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{})});}
              if('requestIdleCallback' in window){requestIdleCallback(()=>{['/hakkimizda','/projeler','/iletisim','/sss'].forEach(p=>{const l=document.createElement('link');l.rel='prefetch';l.href=p;document.head.appendChild(l);});});}
            `,
          }}
        />
      </body>
    </html>
  );
}
