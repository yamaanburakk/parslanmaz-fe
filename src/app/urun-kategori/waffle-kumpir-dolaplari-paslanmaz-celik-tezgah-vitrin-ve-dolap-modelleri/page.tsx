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
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Waffle Dolabı"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Kumpir Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Mobil Vitrin"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
          { label: "Malzeme", value: "Paslanmaz Çelik 304" },
          { label: "Tip", value: "Mobil/Sabit" },
          { label: "Isıtma", value: "Elektrikli" },
          { label: "Tekerlek", value: "4 Adet" },
          { label: "Garanti", value: "5 Yıl" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Waffle & Kumpir Dolapları İçin Teklif Alın"
        description="Mobil satış noktanız için özel tasarım waffle ve kumpir dolapları keşfedin."
      />
    </div>
  );
}