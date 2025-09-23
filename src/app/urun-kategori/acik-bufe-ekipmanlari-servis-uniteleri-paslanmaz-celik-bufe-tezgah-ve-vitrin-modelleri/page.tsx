import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

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
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Açık Büfe Servis Ünitesi"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Paslanmaz Çelik Büfe Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Modern Vitrin Modelleri"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Servis Ünitesi Detayı"
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
          { label: "Kapasite", value: "50-200 Kişi" },
          { label: "Isı Kontrolü", value: "Sıcak/Soğuk" },
          { label: "Boyut", value: "Özelleştirilebilir" },
          { label: "Garanti", value: "5 Yıl" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Açık Büfe Ekipmanları İçin Teklif Alın"
        description="Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel açık büfe çözümleri keşfedin."
      />
    </div>
  );
}