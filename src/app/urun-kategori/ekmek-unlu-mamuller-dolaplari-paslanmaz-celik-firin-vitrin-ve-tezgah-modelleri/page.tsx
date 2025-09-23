import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

export const metadata = {
  title: "Ekmek & Unlu Mamuller Dolapları - Paslanmaz Çelik Fırın Vitrin ve Tezgah Modelleri | Pars Endüstriyel Mutfak",
  description: "Fırın ve pastaneler için özel ekmek ve unlu mamul dolapları. Paslanmaz çelik fırın vitrin ve tezgah modelleri. Taze ürünler için ideal.",
  keywords: "ekmek dolabı, unlu mamul, fırın vitrin, paslanmaz çelik, fırın tezgah, pastane ekipmanları"
};

export default function EkmekUnluMamullerPage() {
  const productData = {
    title: "Ekmek & Unlu Mamuller Dolapları",
    subtitle: "Paslanmaz Çelik Fırın Vitrin ve Tezgah Modelleri",
    description: "Fırın ve pastaneler için özel olarak tasarlanmış, taze ekmek ve unlu mamullerin korunması için ideal dolaplar. Hijyen ve tazelik garantisi.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      {
        title: "Tazelik Koruma",
        description: "Ekmek ve unlu mamullerin tazeliğini koruyan özel havalandırma sistemi",
        icon: "🥖"
      },
      {
        title: "Geniş Depolama",
        description: "Büyük kapasiteli depolama alanları ile verimli kullanım",
        icon: "📦"
      },
      {
        title: "Hijyenik Yüzey",
        description: "Kolay temizlenebilir, bakterisiz yüzeyler",
        icon: "🧼"
      },
      {
        title: "Şeffaf Kapaklar",
        description: "Ürünleri görünür kılan şeffaf cam kapaklar",
        icon: "👁️"
      }
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Ekmek Dolabı Vitrin"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Fırın Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Unlu Mamul Vitrini"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Pastane Dolabı"
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
          { label: "Kapasite", value: "100-500 Ekmek" },
          { label: "Havalandırma", value: "Otomatik" },
          { label: "Kapak", value: "Şeffaf Cam" },
          { label: "Garanti", value: "5 Yıl" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Ekmek & Unlu Mamul Dolapları İçin Teklif Alın"
        description="Fırın ve pastaneniz için özel tasarım ekmek dolapları keşfedin."
      />
    </div>
  );
}