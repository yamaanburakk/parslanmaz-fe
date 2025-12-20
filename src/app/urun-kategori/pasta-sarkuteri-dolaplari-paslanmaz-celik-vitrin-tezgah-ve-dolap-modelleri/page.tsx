import dynamic from 'next/dynamic';

// Dynamic imports for better performance
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
  title: "Pasta & Şarküteri Dolapları - Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri | Pars Endüstriyel Mutfak",
  description: "Pasta ve şarküteri ürünleri için özel dolaplar. Paslanmaz çelik vitrin, tezgah ve dolap modelleri. Taze ürünler için ideal saklama çözümleri.",
  keywords: "pasta dolabı, şarküteri dolabı, vitrin, paslanmaz çelik, tezgah, pastane ekipmanları"
};

export default function PastaSarkuteriPage() {
  const productData = {
    title: "Pasta & Şarküteri Dolapları",
    subtitle: "Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri",
    description: "Pasta ve şarküteri ürünleri için özel olarak tasarlanmış, taze ürünlerin korunması ve sunumu için ideal dolaplar. Estetik ve fonksiyonellik.",
    heroImage: "/pasta-ürün-kategori/pasta-1.jpeg",
    features: [
      {
        title: "Soğuk Hava Sistemi",
        description: "Pasta ve şarküteri ürünleri için özel soğuk hava koruma sistemi",
        icon: "❄️"
      },
      {
        title: "Vitrin Tasarımı",
        description: "Ürünleri öne çıkaran şık vitrin tasarımı",
        icon: "🪟"
      },
      {
        title: "Hijyenik Yüzey",
        description: "Kolay temizlenebilir, bakterisiz yüzeyler",
        icon: "🧽"
      },
      {
        title: "LED Aydınlatma",
        description: "Ürünleri öne çıkaran enerji tasarruflu LED aydınlatma",
        icon: "💡"
      }
    ],
    gallery: [
      {
        src: "/pasta-ürün-kategori/pasta-2.jpeg",
        alt: "Pasta Vitrin Dolabı"
      },
      {
        src: "/pasta-ürün-kategori/pasta-3.jpeg",
        alt: "Şarküteri Tezgahı"
      },
      {
        src: "/pasta-ürün-kategori/pasta-4.jpeg",
        alt: "Pasta Dolabı Detayı"
      },
      {
        src: "/pasta-ürün-kategori/pasta-5.jpeg",
        alt: "Vitrin Aydınlatması"
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <ProductHero 
        title={productData.title}
        subtitle={productData.subtitle}
        description={productData.description}
        heroImage={productData.heroImage}
      />
      <ProductFeatures features={productData.features} />
      <ProductGallery gallery={productData.gallery} />
      <ProductSpecs 
        title="Teknik Özellikler"
        specs={[
          { label: "Malzeme", value: "Paslanmaz Çelik 304-430 Kalite" },
          { label: "Soğutma Sistemi", value: "0-4°C (Dijital Termostat Kontrollü)" },
          { label: "Aydınlatma Sistemi", value: "LED 12V Enerji Tasarruflu" },
          { label: "Cam Kalınlığı", value: "5mm Temperli Şeffaf Cam" },
          { label: "Soğutma Teknolojisi", value: "Kompresörlü veya Termoelektrik" },
          { label: "Raf Sistemi", value: "Ayarlanabilir Paslanmaz Raf (3-4 Adet)" },
          { label: "Boyut Seçenekleri", value: "Özelleştirilebilir (100-200cm)" },
          { label: "Üretim Standardı", value: "ISO 9001:2015 Sertifikalı" }
        ]}
      />
      <ProductCTA 
        title="Pasta & Şarküteri Dolapları İçin Teklif Alın"
        description="Pastane ve şarküteri işletmeniz için özel tasarım dolaplar keşfedin."
      />
    </div>
  );
}