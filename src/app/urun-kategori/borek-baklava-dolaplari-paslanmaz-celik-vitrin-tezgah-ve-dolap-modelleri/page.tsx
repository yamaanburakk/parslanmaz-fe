import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

export const metadata = {
  title: "Börek & Baklava Dolapları - Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri | Pars Endüstriyel Mutfak",
  description: "Börek ve baklava satışı için özel dolaplar. Paslanmaz çelik vitrin, tezgah ve dolap modelleri. Geleneksel lezzetler için modern sunum çözümleri.",
  keywords: "börek dolabı, baklava dolabı, vitrin, paslanmaz çelik, tezgah, geleneksel lezzetler"
};

export default function BorekBaklavaPage() {
  const productData = {
    title: "Börek & Baklava Dolapları",
    subtitle: "Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri",
    description: "Börek ve baklava gibi geleneksel lezzetler için özel olarak tasarlanmış, taze ürünlerin korunması ve sunumu için ideal dolaplar.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      {
        title: "Geleneksel Tasarım",
        description: "Geleneksel lezzetler için özel tasarlanmış modern dolaplar",
        icon: "🏺"
      },
      {
        title: "Sıcak Koruma",
        description: "Börek ve baklava için özel sıcak koruma sistemi",
        icon: "🔥"
      },
      {
        title: "Geniş Raf Sistemi",
        description: "Çeşitli ürünler için geniş raf sistemi",
        icon: "📚"
      },
      {
        title: "Kolay Erişim",
        description: "Müşteriler için kolay erişim ve görünürlük",
        icon: "👥"
      }
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Börek Dolabı Vitrin"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Baklava Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Geleneksel Vitrin"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Raf Sistemi"
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
          { label: "Sıcaklık", value: "60-80°C" },
          { label: "Raf Sayısı", value: "3-5 Adet" },
          { label: "Kapak", value: "Şeffaf Cam" },
          { label: "Garanti", value: "5 Yıl" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Börek & Baklava Dolapları İçin Teklif Alın"
        description="Geleneksel lezzetlerinizi sunmak için özel tasarım dolaplar keşfedin."
      />
    </div>
  );
}