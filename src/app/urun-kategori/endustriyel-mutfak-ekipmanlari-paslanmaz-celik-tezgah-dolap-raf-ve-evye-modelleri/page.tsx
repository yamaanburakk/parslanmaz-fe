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
  title: "Endüstriyel Mutfak Ekipmanları - Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri | Pars Endüstriyel Mutfak",
  description: "Profesyonel endüstriyel mutfak ekipmanları. Paslanmaz çelik tezgah, dolap, raf ve evye modelleri. Yüksek kalite, dayanıklılık ve hijyen garantisi.",
  keywords: "endüstriyel mutfak, paslanmaz çelik, tezgah, dolap, raf, evye, profesyonel mutfak ekipmanları"
};

export default function EndustriyelMutfakPage() {
  const productData = {
    title: "Endüstriyel Mutfak Ekipmanları",
    subtitle: "Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri",
    description: "Profesyonel mutfaklar için tasarlanmış, yüksek kaliteli paslanmaz çelik ekipmanlar. Dayanıklılık, hijyen ve fonksiyonellik bir arada.",
    heroImage: "/endustriyel-mutfak-ürün-kategori/endustiyel-1.jpeg",
    features: [
      {
        title: "Paslanmaz Çelik 304-430 Kalite",
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
        src: "/endustriyel-mutfak-ürün-kategori/endustriyel-2.jpeg",
        alt: "Endüstriyel Mutfak Ekipmanı"
      },
      {
        src: "/endustriyel-mutfak-ürün-kategori/endustriyel-3.jpeg",
        alt: "Paslanmaz Çelik Endüstriyel Mutfak Ürünü"
      },
      {
        src: "/endustriyel-mutfak-ürün-kategori/endustriyel-4.jpeg",
        alt: "Profesyonel Endüstriyel Mutfak Ekipmanı"
      },
      {
        src: "/endustriyel-mutfak-ürün-kategori/endustriyel-5.jpeg",
        alt: "Endüstriyel Mutfak Tezgah ve Dolap"
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
          { label: "Malzeme Kalınlığı", value: "1.2mm - 2.0mm (Kullanım Alanına Göre)" },
          { label: "Yüzey İşlemi", value: "Fırçalı / Parlak / Mat Finish" },
          { label: "Renk Seçenekleri", value: "Gümüş Gri / Özel Renk (Opsiyonel)" },
          { label: "Kaynak Tekniği", value: "Argon Kaynağı (Paslanmaz)" },
          { label: "Yüzey Kaplama", value: "Paslanmaz Çelik (Korozif Önleyici)" },
          { label: "Boyut Seçenekleri", value: "Özelleştirilebilir (Standart + Özel)" },
          { label: "Üretim Standardı", value: "ISO 9001:2015 Sertifikalı" }
        ]}
      />
      <ProductCTA 
        title="Endüstriyel Mutfak Ekipmanları İçin Teklif Alın"
        description="Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözümler keşfedin."
      />
    </div>
  );
}