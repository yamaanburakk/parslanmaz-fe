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
    // Marka ve Genel - Ana Anahtar Kelimeler
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
    "paslanmaz mutfak ekipmanları",
    "inox mutfak ekipmanları",
    "paslanmaz çelik mutfak ürünleri",
    "endüstriyel mutfak sistemleri",
    
    // Mutfak Türleri - Detaylı
    "restoran mutfakları",
    "restoran mutfak ekipmanları",
    "otel mutfakları",
    "otel mutfak ekipmanları",
    "kafe mutfakları",
    "kafe mutfak ekipmanları",
    "fırın ekipmanları",
    "fırın mutfak ekipmanları",
    "catering mutfakları",
    "catering ekipmanları",
    "hastane mutfakları",
    "hastane mutfak ekipmanları",
    "okul mutfakları",
    "okul kantini ekipmanları",
    "toplu mutfak",
    "toplu yemek mutfağı",
    "endüstriyel mutfak firmaları",
    "fast food mutfak ekipmanları",
    "lokanta mutfak ekipmanları",
    "yemekhane mutfak ekipmanları",
    "kafeterya mutfak ekipmanları",
    
    // Ürün Kategorileri - Tezgahlar
    "paslanmaz tezgah",
    "paslanmaz çelik tezgah",
    "çalışma tezgahı",
    "mutfak çalışma tezgahı",
    "endüstriyel çalışma tezgahı",
    "bulaşık yıkama tezgahı",
    "evyeli çalışma tezgahı",
    "paslanmaz çalışma masası",
    "endüstriyel mutfak tezgahı",
    "paslanmaz mutfak tezgahı",
    "hazırlık tezgahı",
    "servis tezgahı",
    
    // Ürün Kategorileri - Dolaplar
    "paslanmaz dolap",
    "paslanmaz çelik dolap",
    "mutfak dolabı",
    "endüstriyel mutfak dolabı",
    "asma dolap",
    "duvar dolabı",
    "kapaklı dolap",
    "sürgülü kapılı dolap",
    "açık raf dolap",
    
    // Ürün Kategorileri - Raflar
    "mutfak rafları",
    "paslanmaz raf",
    "duvar rafları",
    "endüstriyel raf",
    "paslanmaz çelik raf",
    "mutfak duvar rafı",
    "açık raf sistemi",
    "kapalı raf sistemi",
    
    // Ürün Kategorileri - Evyeler
    "endüstriyel evye",
    "paslanmaz evye",
    "mutfak evyesi",
    "endüstriyel mutfak evyesi",
    "çift gözlü evye",
    "tek gözlü evye",
    "bulaşık yıkama evyesi",
    "el yıkama lavabosi",
    
    // Pişirme Ekipmanları
    "endüstriyel buzdolabı",
    "endüstriyel fırın",
    "endüstriyel ocak",
    "endüstriyel ızgara",
    "endüstriyel fritöz",
    "endüstriyel derin fritöz",
    "gazlı ocak",
    "elektrikli ocak",
    "endüstriyel ankastre",
    "pilot ocak",
    "endüstriyel izgara",
    
    // Havalandırma ve Davlumbaz
    "davlumbaz sistemleri",
    "endüstriyel davlumbaz",
    "mutfak davlumbazı",
    "aspiratör sistemi",
    "havalandırma sistemleri",
    "filtreli davlumbaz",
    
    // Servis ve Vitrin Ekipmanları
    "açık büfe ekipmanları",
    "servis üniteleri",
    "ısıtmalı vitrin",
    "soğutmalı vitrin",
    "sıcak servis ünitesi",
    "soğuk servis ünitesi",
    "salata barı",
    "self servis ünitesi",
    
    // Özel Dolaplar ve Vitrinler
    "pasta dolabı",
    "pasta vitrini",
    "şarküteri dolabı",
    "ekmek dolabı",
    "unlu mamuller dolabı",
    "waffle dolabı",
    "kumpir dolabı",
    "çikolata dolabı",
    "lokum dolabı",
    "börek dolabı",
    "baklava dolabı",
    "tatlı vitrini",
    "sandviç vitrini",
    
    // Hizmetler - Detaylı
    "mutfak çözümleri",
    "mutfak tasarımı",
    "mutfak projelendirme",
    "anahtar teslim mutfak",
    "özel üretim mutfak",
    "mutfak danışmanlığı",
    "mutfak montajı",
    "mutfak kurulumu",
    "mutfak bakımı",
    "mutfak tamiri",
    "mutfak modernizasyonu",
    "mutfak yenileme",
    "3d mutfak tasarımı",
    "mutfak planlama",
    
    // Şehirler - Genişletilmiş
    "istanbul mutfak firması",
    "istanbul endüstriyel mutfak",
    "zeytinburnu mutfak",
    "zeytinburnu endüstriyel mutfak",
    "ankara endüstriyel mutfak",
    "izmir mutfak ekipmanları",
    "bursa mutfak ekipmanları",
    "antalya mutfak firması",
    "kocaeli mutfak ekipmanları",
    "adana mutfak firması",
    "gaziantep mutfak ekipmanları",
    "konya mutfak firması",
    "mersin mutfak ekipmanları",
    
    // Kalite ve Özellikler
    "304 kalite paslanmaz",
    "316 kalite paslanmaz",
    "304 quality stainless steel",
    "316 quality stainless steel",
    "hijyenik mutfak",
    "hijyenik mutfak ekipmanları",
    "HACCP uyumlu",
    "HACCP sertifikalı",
    "CE belgeli mutfak",
    "TSE belgeli mutfak",
    "kaliteli mutfak",
    "dayanıklı mutfak ekipmanı",
    "uzun ömürlü mutfak",
    "kolay temizlenebilir mutfak",
    
    // Üretim ve Satış
    "türkiye mutfak üreticisi",
    "mutfak ekipmanı üreticisi",
    "paslanmaz çelik üretici",
    "endüstriyel mutfak üreticisi",
    "mutfak ekipmanı imalatı",
    "özel üretim mutfak ekipmanı",
    "endüstriyel mutfak fiyatları",
    "mutfak ekipmanı fiyatları",
    "mutfak ekipmanı satış",
    "uygun fiyatlı mutfak ekipmanı",
    "toptan mutfak ekipmanı",
    
    // Long-tail Keywords - Spesifik Aramalar
    "paslanmaz çelik mutfak tezgahı fiyatları",
    "endüstriyel mutfak ekipmanları istanbul",
    "restoran mutfak ekipmanları fiyatları",
    "otel mutfak ekipmanları üreticileri",
    "paslanmaz çelik evye fiyatları",
    "endüstriyel mutfak dolabı modelleri",
    "mutfak rafları fiyatları",
    "endüstriyel mutfak tasarımı istanbul",
    "anahtar teslim mutfak projeleri",
    "profesyonel mutfak ekipmanları satışı",
    "paslanmaz çelik mutfak ürünleri üreticisi",
    "endüstriyel mutfak ekipmanları toptan satış",
    
    // Sektörel Kelimeler
    "horeca ekipmanları",
    "gastronomi ekipmanları",
    "mutfak sektörü",
    "gıda sektörü ekipmanları",
    "endüstri tipi mutfak",
    "ticari mutfak çözümleri",
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
    'google-site-verification': 'm9UqDiRb0b8kOMpkLhMVBoRZj9cJeHS0996wTgk5RJA',
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
        url: "https://www.parslanmaz.com/parslanmaz-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Pars Endüstriyel Mutfak Logo - Paslanmaz Çelik Mutfak Ekipmanları",
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
    images: ["https://www.parslanmaz.com/parslanmaz-logo.jpeg"],
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
        
        {/* Favicon - Parslanmaz Logo */}
        <link rel="icon" type="image/jpeg" href="/parslanmaz-logo.jpeg" />
        <link rel="shortcut icon" type="image/jpeg" href="/parslanmaz-logo.jpeg" />
        
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
