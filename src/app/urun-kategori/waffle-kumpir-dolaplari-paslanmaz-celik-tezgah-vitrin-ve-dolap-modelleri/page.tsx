import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const ProductHero = dynamic(() => import("@/components/ProductHero"), { ssr: true });
const ProductFeatures = dynamic(() => import("@/components/ProductFeatures"), { ssr: true });
const ProductGallery = dynamic(() => import("@/components/ProductGallery"), { ssr: true });
const ProductSpecs = dynamic(() => import("@/components/ProductSpecs"), { ssr: true });
const ProductCTA = dynamic(() => import("@/components/ProductCTA"), { ssr: true });

export const metadata = {
  title: "Waffle & Kumpir Dolapları - Paslanmaz Çelik Tezgah, Vitrin ve Dolap Modelleri | Pars Endüstriyel Mutfak",
  description: "Waffle ve kumpir satış noktaları için özel dolaplar. Paslanmaz çelik tezgah, vitrin ve dolap modelleri. Mobil ve sabit çözümler.",
  keywords: "waffle dolabı, kumpir dolabı, paslanmaz çelik, tezgah, vitrin, mobil satış"
};

export default function WaffleKumpirPage() {
  const productData = {
    title: "Waffle & Kumpir Dolapları",
    subtitle: "Paslanmaz Çelik Tezgah, Vitrin ve Dolap Modelleri",
    description: "Waffle ve kumpir satış noktaları için özel olarak tasarlanmış, mobil ve sabit kullanım için ideal dolaplar. Pratik ve fonksiyonel tasarım.",
    heroImage: "/waffle-ürün-kategori/waffle-1.jpeg",
    features: [
      {
        title: "Mobil Tasarım",
        description: "Kolay taşınabilir, tekerlekli mobil tasarım",
        icon: "🚚"
      },
      {
        title: "Isıtma Sistemi",
        description: "Waffle ve kumpir için özel ısıtma sistemi",
        icon: "🔥"
      },
      {
        title: "Geniş Çalışma Alanı",
        description: "Rahat çalışma için geniş tezgah alanı",
        icon: "📐"
      },
      {
        title: "Kolay Temizlik",
        description: "Hijyenik yüzeyler ve kolay temizlenebilir yapı",
        icon: "🧽"
      }
    ],
    gallery: [
      {
        src: "/waffle-ürün-kategori/waffle-2.jpeg",
        alt: "Waffle Dolabı"
      },
      {
        src: "/waffle-ürün-kategori/waffle-3.jpeg",
        alt: "Kumpir Tezgahı"
      },
      {
        src: "/waffle-ürün-kategori/waffle-4.jpeg",
        alt: "Mobil Vitrin"
      },
      {
        src: "/waffle-ürün-kategori/waffle-5.jpg",
        alt: "Satış Ünitesi"
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
          { label: "Kullanım Tipi", value: "Mobil veya Sabit (Seçilebilir)" },
          { label: "Isıtma Sistemi", value: "Elektrikli Rezistans (220V/380V)" },
          { label: "Tekerlek Sistemi", value: "4 Adet Frenli Tekerlek (Mobil Modeller)" },
          { label: "Tezgah Kalınlığı", value: "1.5mm Paslanmaz Çelik" },
          { label: "Isı Kontrolü", value: "Dijital Termostat (0-200°C)" },
          { label: "Boyut Seçenekleri", value: "Özelleştirilebilir (80-150cm)" },
          { label: "Üretim Standardı", value: "ISO 9001:2015 Sertifikalı" }
        ]}
      />
      <ProductCTA 
        title="Waffle & Kumpir Dolapları İçin Teklif Alın"
        description="Mobil satış noktanız için özel tasarım waffle ve kumpir dolapları keşfedin."
      />
    </div>
  );
}