import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

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
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Pasta Vitrin Dolabı"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Şarküteri Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Pasta Dolabı Detayı"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
          { label: "Malzeme", value: "Paslanmaz Çelik 304" },
          { label: "Sıcaklık", value: "0-4°C" },
          { label: "Aydınlatma", value: "LED" },
          { label: "Kapak", value: "Şeffaf Cam" },
          { label: "Garanti", value: "5 Yıl" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Pasta & Şarküteri Dolapları İçin Teklif Alın"
        description="Pastane ve şarküteri işletmeniz için özel tasarım dolaplar keşfedin."
      />
    </div>
  );
}