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
  title: "Ekmek & Unlu Mamuller Dolapları - Paslanmaz Çelik Fırın Vitrin ve Tezgah Modelleri | Pars Endüstriyel Mutfak",
  description: "Fırın ve pastaneler için özel ekmek ve unlu mamul dolapları. Paslanmaz çelik fırın vitrin ve tezgah modelleri. Taze ürünler için ideal.",
  keywords: "ekmek dolabı, unlu mamul, fırın vitrin, paslanmaz çelik, fırın tezgah, pastane ekipmanları"
};

export default function EkmekUnluMamullerPage() {
  const productData = {
    title: "Ekmek & Unlu Mamuller Dolapları",
    subtitle: "Paslanmaz Çelik Fırın Vitrin ve Tezgah Modelleri",
    description: "Fırın ve pastaneler için özel olarak tasarlanmış, taze ekmek ve unlu mamullerin korunması için ideal dolaplar. Hijyen ve tazelik garantisi.",
    heroImage: "/unlu-mamul-ürün-kategori/unlu-1.jpeg",
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
        src: "/unlu-mamul-ürün-kategori/unlu-2.jpeg",
        alt: "Ekmek Dolabı Vitrin"
      },
      {
        src: "/unlu-mamul-ürün-kategori/unlu-3.jpeg",
        alt: "Fırın Tezgahı"
      },
      {
        src: "/unlu-mamul-ürün-kategori/unlu-4.jpeg",
        alt: "Unlu Mamul Vitrini"
      },
      {
        src: "/unlu-mamul-ürün-kategori/unlu-5.jpeg",
        alt: "Pastane Dolabı"
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
          { label: "Depolama Kapasitesi", value: "100-500 Ekmek (Modellere Göre)" },
          { label: "Havalandırma Sistemi", value: "Otomatik Hava Sirkülasyonu" },
          { label: "Cam Kalınlığı", value: "5mm Temperli Şeffaf Cam" },
          { label: "Raf Sistemi", value: "Ayarlanabilir Paslanmaz Raf (4-6 Adet)" },
          { label: "Kapı Tipi", value: "Açılır veya Kayar Kapı Sistemi" },
          { label: "Boyut Seçenekleri", value: "Özelleştirilebilir (120-250cm)" },
          { label: "Üretim Standardı", value: "ISO 9001:2015 Sertifikalı" }
        ]}
      />
      <ProductCTA 
        title="Ekmek & Unlu Mamul Dolapları İçin Teklif Alın"
        description="Fırın ve pastaneniz için özel tasarım ekmek dolapları keşfedin."
      />
    </div>
  );
}