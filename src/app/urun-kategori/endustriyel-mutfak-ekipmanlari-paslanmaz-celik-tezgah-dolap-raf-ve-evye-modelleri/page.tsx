import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductCTA from "@/components/ProductCTA";

export const metadata = {
  title: "Endüstriyel Mutfak Ekipmanları - Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri | Pars Endüstriyel Mutfak",
  description: "Profesyonel endüstriyel mutfak ekipmanları. Paslanmaz çelik tezgah, dolap, raf ve evye modelleri. Yüksek kalite, dayanıklılık ve hijyen garantisi.",
  keywords: "endüstriyel mutfak, paslanmaz çelik, tezgah, dolap, raf, evye, profesyonel mutfak ekipmanları"
};

export default function EndustriyelMutfakPage() {
  const productData = {
    title: "Endüstriyel Mutfak Ekipmanları",
    subtitle: "Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri",
    description: "Profesyonel mutfaklar için tasarlanmış, yüksek kaliteli paslanmaz çelik ekipmanlar. Dayanıklılık, hijyen ve fonksiyonellik bir arada.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      {
        title: "Paslanmaz Çelik 304 Kalite",
        description: "En yüksek kalite standartlarında paslanmaz çelik malzeme kullanımı",
        icon: "🔧"
      },
      {
        title: "Hijyenik Yüzey",
        description: "Bakteri ve mikrop barındırmayan, kolay temizlenebilir yüzeyler",
        icon: "🧼"
      },
      {
        title: "Dayanıklı Yapı",
        description: "Yoğun kullanım koşullarına dayanıklı, uzun ömürlü yapı",
        icon: "💪"
      },
      {
        title: "Modüler Tasarım",
        description: "İhtiyaca göre özelleştirilebilir, esnek kullanım imkanı",
        icon: "🔩"
      }
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Endüstriyel Mutfak Tezgahı"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Paslanmaz Çelik Dolap"
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Profesyonel Mutfak Rafı"
      },
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Endüstriyel Evye"
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
          { label: "Kalınlık", value: "1.2mm - 2.0mm" },
          { label: "Yüzey İşlemi", value: "Fırçalı / Parlak" },
          { label: "Renk", value: "Gümüş Gri" },
          { label: "Garanti", value: "5 Yıl" },
          { label: "Üretim", value: "Yerli Üretim" }
        ]}
      />
      <ProductCTA 
        title="Endüstriyel Mutfak Ekipmanları İçin Teklif Alın"
        description="Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözümler keşfedin."
      />
    </div>
  );
}