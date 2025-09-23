import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

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
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Çikolata Vitrin Dolabı"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Lokum Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Premium Vitrin"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Çikolata Dolabı Detayı"
      }
    ]
  };

  return (
    <div className="min-h-screen">
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
          { label: "Garanti", value: "5 Yıl" },
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