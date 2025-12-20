import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const ProductHero = dynamic(() => import("@/components/ProductHero"), { ssr: true });
const ProductFeatures = dynamic(() => import("@/components/ProductFeatures"), { ssr: true });
const ProductGallery = dynamic(() => import("@/components/ProductGallery"), { ssr: true });
const ProductSpecs = dynamic(() => import("@/components/ProductSpecs"), { ssr: true });
const ProductCTA = dynamic(() => import("@/components/ProductCTA"), { ssr: true });

export const metadata = {
  title: "Çikolata & Lokum Dolapları - Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri | Pars Endüstriyel Mutfak",
  description: "Çikolata ve lokum satışı için özel dolaplar. Paslanmaz çelik vitrin, tezgah ve dolap modelleri. Premium ürünler için şık sunum çözümleri.",
  keywords: "çikolata dolabı, lokum dolabı, vitrin, paslanmaz çelik, tezgah, premium sunum"
};

export default function CikolataLokumPage() {
  const productData = {
    title: "Çikolata & Lokum Dolapları",
    subtitle: "Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri",
    description: "Çikolata ve lokum gibi premium ürünler için özel olarak tasarlanmış, şık sunum ve koruma çözümleri. Estetik ve fonksiyonellik bir arada.",
    heroImage: "/lokum-ürün-kategori/lokum-1.jpeg",
    features: [
      {
        title: "Premium Tasarım",
        description: "Çikolata ve lokum için özel tasarlanmış premium vitrin",
        icon: "💎"
      },
      {
        title: "Sıcaklık Kontrolü",
        description: "Çikolata için özel sıcaklık kontrol sistemi",
        icon: "🌡️"
      },
      {
        title: "LED Aydınlatma",
        description: "Ürünleri öne çıkaran özel LED aydınlatma",
        icon: "✨"
      },
      {
        title: "Şeffaf Görünüm",
        description: "Ürünleri tam görünür kılan şeffaf cam yapı",
        icon: "👁️"
      }
    ],
    gallery: [
      {
        src: "/lokum-ürün-kategori/lokum-2.jpeg",
        alt: "Çikolata Vitrin Dolabı"
      },
      {
        src: "/lokum-ürün-kategori/lokum-3.jpeg",
        alt: "Lokum Tezgahı"
      },
      {
        src: "/lokum-ürün-kategori/lokum-4.jpeg",
        alt: "Premium Vitrin"
      },
      {
        src: "/lokum-ürün-kategori/lokum-5.jpeg",
        alt: "Çikolata Dolabı Detayı"
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
          { label: "Sıcaklık", value: "18-22°C" },
          { label: "Aydınlatma", value: "LED" },
          { label: "Kapak", value: "Şeffaf Cam" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Çikolata & Lokum Dolapları İçin Teklif Alın"
        description="Premium çikolata ve lokum işletmeniz için özel tasarım dolaplar keşfedin."
      />
    </div>
  );
}