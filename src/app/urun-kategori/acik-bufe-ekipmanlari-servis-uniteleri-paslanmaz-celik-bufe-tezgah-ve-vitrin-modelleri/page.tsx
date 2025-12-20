import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load components with proper error boundaries
const ProductHero = dynamic(() => import("@/components/ProductHero"), {
  ssr: true,
});

const ProductFeatures = dynamic(() => import("@/components/ProductFeatures"), {
  ssr: true,
});

const ProductGallery = dynamic(() => import("@/components/ProductGallery"), {
  ssr: true,
});

const ProductSpecs = dynamic(() => import("@/components/ProductSpecs"), {
  ssr: true,
});

const ProductCTA = dynamic(() => import("@/components/ProductCTA"), {
  ssr: true,
});

export const metadata = {
  title: "Açık Büfe Ekipmanları & Servis Üniteleri - Paslanmaz Çelik Büfe Tezgah ve Vitrin Modelleri | Pars Endüstriyel Mutfak",
  description: "Profesyonel açık büfe ekipmanları ve servis üniteleri. Paslanmaz çelik büfe tezgah ve vitrin modelleri. Modern tasarım ve yüksek kalite.",
  keywords: "açık büfe, servis üniteleri, paslanmaz çelik, büfe tezgah, vitrin, endüstriyel mutfak"
};

export default function AcikBufePage() {
  const productData = {
    title: "Açık Büfe Ekipmanları",
    subtitle: "Servis Üniteleri - Paslanmaz Çelik Büfe Tezgah ve Vitrin Modelleri",
    description: "Modern açık büfe tasarımları için özel olarak geliştirilmiş, paslanmaz çelik servis üniteleri. Estetik ve fonksiyonellik bir arada.",
    heroImage: "/acik-bufe-ürün-kategori/acik-bufe-1.jpeg",
    features: [
      {
        title: "Modern Tasarım",
        description: "Çağdaş mutfak estetiğine uygun, şık ve modern tasarım",
        icon: "✨"
      },
      {
        title: "Geniş Servis Alanı",
        description: "Büyük servis alanları ile verimli kullanım imkanı",
        icon: "📏"
      },
      {
        title: "Isı Kontrolü",
        description: "Sıcak ve soğuk ürünler için özel ısı kontrol sistemleri",
        icon: "🌡️"
      },
      {
        title: "Kolay Temizlik",
        description: "Hijyenik yüzeyler ve kolay temizlenebilir yapı",
        icon: "🧽"
      }
    ],
    gallery: [
      {
        src: "/acik-bufe-ürün-kategori/acik-bufe-2.jpeg",
        alt: "Açık Büfe Servis Ünitesi"
      },
      {
        src: "/acik-bufe-ürün-kategori/acik-bufe-3.jpeg",
        alt: "Paslanmaz Çelik Büfe Tezgahı"
      },
      {
        src: "/acik-bufe-ürün-kategori/acik-bufe-4.jpeg",
        alt: "Modern Vitrin Modelleri"
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] animate-pulse" />}>
        <ProductHero 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
          heroImage={productData.heroImage}
        />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gray-50 animate-pulse">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="skeleton h-12 w-12 mb-4" />
                <div className="skeleton h-5 w-3/4 mb-2" />
                <div className="skeleton h-4 w-full mb-2" />
                <div className="skeleton h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>}>
        <ProductFeatures features={productData.features} />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-white animate-pulse">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square">
                <div className="skeleton h-full w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>}>
        <ProductGallery gallery={productData.gallery} />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gray-50 animate-pulse">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="skeleton h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="skeleton h-4 w-24" />
                  <div className="skeleton h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>}>
        <ProductSpecs 
          title="Teknik Özellikler"
          specs={[
            { label: "Malzeme", value: "Paslanmaz Çelik 304-430 Kalite" },
            { label: "Servis Kapasitesi", value: "50-200 Kişi (Modüler Sistem)" },
            { label: "Isı Kontrol Sistemi", value: "Sıcak/Soğuk Bölmeli (0-80°C)" },
            { label: "Tezgah Kalınlığı", value: "1.5mm Paslanmaz Çelik" },
            { label: "Aydınlatma", value: "LED Strip Aydınlatma" },
            { label: "Boyut Seçenekleri", value: "Özelleştirilebilir (120-300cm)" },
            { label: "Tekerlek Sistemi", value: "4 Adet Frenli Tekerlek (Opsiyonel)" },
            { label: "Üretim Standardı", value: "ISO 9001:2015 Sertifikalı" }
          ]}
        />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gradient-to-br from-[#131C3C] to-[#1A2647] text-white animate-pulse">
        <div className="container mx-auto px-6 text-center">
          <div className="skeleton h-8 w-64 mx-auto mb-4" />
          <div className="skeleton h-4 w-96 mx-auto mb-8" />
          <div className="skeleton h-12 w-40 mx-auto" />
        </div>
      </div>}>
        <ProductCTA 
          title="Açık Büfe Ekipmanları İçin Teklif Alın"
          description="Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel açık büfe çözümleri keşfedin."
        />
      </Suspense>
    </div>
  );
}