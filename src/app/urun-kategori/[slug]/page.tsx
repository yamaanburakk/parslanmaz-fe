import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// Lazy load components with proper error boundaries
const ProductHero = dynamic(() => import("@/components/ProductHero"), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] animate-pulse" />,
  ssr: true,
});

const ProductFeatures = dynamic(() => import("@/components/ProductFeatures"), {
  loading: () => (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="skeleton h-12 w-12 mb-4" />
              <div className="skeleton h-5 w-3/4 mb-2" />
              <div className="skeleton h-4 w-full mb-2" />
              <div className="skeleton h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

const ProductGallery = dynamic(() => import("@/components/ProductGallery"), {
  loading: () => (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square">
              <div className="skeleton h-full w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

const ProductSpecs = dynamic(() => import("@/components/ProductSpecs"), {
  loading: () => (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="skeleton h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="skeleton h-4 w-24" />
                <div className="skeleton h-4 w-32" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

const ProductCTA = dynamic(() => import("@/components/ProductCTA"), {
  loading: () => (
    <div className="py-16 bg-gradient-to-br from-[#131C3C] to-[#1A2647] text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="skeleton h-8 w-64 mx-auto mb-4" />
        <div className="skeleton h-4 w-96 mx-auto mb-8" />
        <div className="skeleton h-12 w-40 mx-auto" />
      </div>
    </div>
  ),
  ssr: true,
});

// Product data interface
interface ProductData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
  specs: Array<{
    label: string;
    value: string;
  }>;
}

// Product data mapping
const productDataMap: Record<string, ProductData> = {
  'acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri': {
    title: "Açık Büfe Ekipmanları",
    subtitle: "Servis Üniteleri - Paslanmaz Çelik Büfe Tezgah ve Vitrin Modelleri",
    description: "Modern açık büfe tasarımları için özel olarak geliştirilmiş, paslanmaz çelik servis üniteleri. Estetik ve fonksiyonellik bir arada.",
    heroImage: "/acik-bufe-urun-kategori/acik-bufe-1.jpeg",
    features: [
      { title: "Modern Tasarım", description: "Çağdaş mutfak estetiğine uygun, şık ve modern tasarım", icon: "✨" },
      { title: "Geniş Servis Alanı", description: "Büyük servis alanları ile verimli kullanım imkanı", icon: "📏" },
      { title: "Isı Kontrolü", description: "Sıcak ve soğuk ürünler için özel ısı kontrol sistemleri", icon: "🌡️" },
      { title: "Kolay Temizlik", description: "Hijyenik yüzeyler ve kolay temizlenebilir yapı", icon: "🧽" }
    ],
    gallery: [
      { src: "/acik-bufe-urun-kategori/acik-bufe-2.jpeg", alt: "Paslanmaz Çelik Büfe Tezgahı" },
      { src: "/acik-bufe-urun-kategori/acik-bufe-3.jpeg", alt: "Modern Vitrin Modelleri" },
      { src: "/acik-bufe-urun-kategori/acik-bufe-4.jpeg", alt: "Servis Ünitesi Detayı" },
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304-430 Kalite" },
      { label: "Kapasite", value: "50-200 Kişi" },
      { label: "Isı Kontrolü", value: "Sıcak/Soğuk" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri': {
    title: "Endüstriyel Mutfak Ekipmanları",
    subtitle: "Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri",
    description: "Profesyonel mutfaklar için tasarlanmış, dayanıklı ve hijyenik endüstriyel mutfak ekipmanları.",
    heroImage: "/endustriyel-mutfak-urun-kategori/endustriyel-1.jpeg",
    features: [
      { title: "Dayanıklı Yapı", description: "Ağır kullanıma dayanıklı paslanmaz çelik yapı", icon: "🔧" },
      { title: "Hijyenik", description: "Kolay temizlenebilir ve hijyenik yüzeyler", icon: "🧼" },
      { title: "Fonksiyonel", description: "Pratik kullanım için optimize edilmiş tasarım", icon: "⚙️" },
      { title: "Modüler", description: "İhtiyaca göre özelleştirilebilir modüler sistem", icon: "🔗" }
    ],
    gallery: [
      { src: "/endustriyel-mutfak-urun-kategori/endustriyel-2.jpeg", alt: "Paslanmaz Çelik Dolap" },
      { src: "/endustriyel-mutfak-urun-kategori/endustriyel-3.jpeg", alt: "Mutfak Raf Sistemleri" },
      { src: "/endustriyel-mutfak-urun-kategori/endustriyel-4.jpeg", alt: "Endüstriyel Evye" },
      { src: "/endustriyel-mutfak-urun-kategori/endustriyel-5.jpeg", alt: "Endüstriyel Evye" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304-430 Kalite" },
      { label: "Kalınlık", value: "1.2-2.0 mm" },
      { label: "Yüzey", value: "Fırçalı/Matt" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri': {
    title: "Ekmek & Unlu Mamuller Dolapları",
    subtitle: "Paslanmaz Çelik Fırın Vitrin ve Tezgah Modelleri",
    description: "Fırın ve pastaneler için özel tasarlanmış, hijyenik ve fonksiyonel ekmek ve unlu mamul dolapları.",
    heroImage: "/unlu-mamul-urun-kategori/unlu-1.jpeg",
    features: [
      { title: "Hijyenik Yapı", description: "Gıda güvenliği standartlarına uygun üretim", icon: "🧼" },
      { title: "Havalandırma", description: "Özel havalandırma sistemi ile tazelik koruması", icon: "🌬️" },
      { title: "Görsel Sunum", description: "Cam vitrinli, estetik görünüm", icon: "✨" },
      { title: "Geniş Kapasite", description: "Büyük depolama alanı", icon: "📦" }
    ],
    gallery: [
      { src: "/unlu-mamul-urun-kategori/unlu-2.jpeg", alt: "Unlu Mamul Vitrini" },
      { src: "/unlu-mamul-urun-kategori/unlu-3.jpeg", alt: "Fırın Tezgahı" },
      { src: "/unlu-mamul-urun-kategori/unlu-4.jpeg", alt: "Ekmek Raf Sistemi" },
      { src: "/unlu-mamul-urun-kategori/unlu-5.jpeg", alt: "Ekmek Raf Sistemi" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304 Kalite" },
      { label: "Cam", value: "Temperli Cam" },
      { label: "Havalandırma", value: "Aktif Sistem" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri': {
    title: "Pasta & Şarküteri Dolapları",
    subtitle: "Paslanmaz Çelik Vitrin Tezgah ve Dolap Modelleri",
    description: "Pasta ve şarküteri ürünleri için soğutmalı vitrin dolapları ve modern servis çözümleri.",
    heroImage: "/pasta-urun-kategori/pasta-1.jpeg",
    features: [
      { title: "Soğutma Sistemi", description: "Profesyonel soğutma ile ürün tazeliği", icon: "❄️" },
      { title: "LED Aydınlatma", description: "Ürünleri ön plana çıkaran aydınlatma", icon: "💡" },
      { title: "Cam Vitrin", description: "Şık ve hijyenik cam vitrin tasarımı", icon: "🪟" },
      { title: "Kolay Erişim", description: "Pratik kullanım için ergonomik tasarım", icon: "👐" }
    ],
    gallery: [
      { src: "/pasta-urun-kategori/pasta-2.jpeg", alt: "Şarküteri Vitrini" },
      { src: "/pasta-urun-kategori/pasta-3.jpeg", alt: "Soğutmalı Vitrin" },
      { src: "/pasta-urun-kategori/pasta-4.jpeg", alt: "Pasta Tezgahı" },
      { src: "/pasta-urun-kategori/pasta-5.jpeg", alt: "Pasta Tezgahı" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304 Kalite" },
      { label: "Soğutma", value: "+2°C / +8°C" },
      { label: "Cam", value: "Çift Camlı, Anti-Sis" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri': {
    title: "Waffle & Kumpir Dolapları",
    subtitle: "Paslanmaz Çelik Tezgah Vitrin ve Dolap Modelleri",
    description: "Waffle ve kumpir satış noktaları için özel tasarlanmış, fonksiyonel servis dolapları.",
    heroImage: "/waffle-urun-kategori/waffle-1.jpeg",
    features: [
      { title: "Sıcak Muhafaza", description: "Ürünleri sıcak tutan özel sistem", icon: "🔥" },
      { title: "Kompakt Tasarım", description: "Küçük alanlara uygun tasarım", icon: "📐" },
      { title: "Hızlı Servis", description: "Pratik kullanım için optimize edilmiş", icon: "⚡" },
      { title: "Modern Görünüm", description: "Çağdaş ve estetik tasarım", icon: "✨" }
    ],
    gallery: [
      { src: "/waffle-urun-kategori/waffle-2.jpeg", alt: "Kumpir Tezgahı" },
      { src: "/waffle-urun-kategori/waffle-3.jpeg", alt: "Servis Ünitesi" },
      { src: "/waffle-urun-kategori/waffle-4.jpeg", alt: "Waffle Vitrini" },
      { src: "/waffle-urun-kategori/waffle-5.jpg", alt: "Waffle Vitrinii" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304 Kalite" },
      { label: "Isı Kontrolü", value: "Ayarlanabilir" },
      { label: "Yüzey", value: "Kolay Temizlenebilir" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri': {
    title: "Çikolata & Lokum Dolapları",
    subtitle: "Paslanmaz Çelik Vitrin Tezgah ve Dolap Modelleri",
    description: "Çikolata ve lokum satışı için özel tasarlanmış, iklim kontrollü vitrin dolapları.",
    heroImage: "/lokum-urun-kategori/lokum-1.jpeg",
    features: [
      { title: "İklim Kontrolü", description: "Hassas sıcaklık ve nem kontrolü", icon: "🌡️" },
      { title: "Koruyucu Vitrin", description: "Ürünleri koruyan özel cam vitrin", icon: "🛡️" },
      { title: "Lüks Görünüm", description: "Premium ve şık tasarım", icon: "💎" },
      { title: "LED Işıklandırma", description: "Ürünleri ön plana çıkaran aydınlatma", icon: "✨" }
    ],
    gallery: [
      { src: "/lokum-urun-kategori/lokum-2.jpeg", alt: "Lokum Vitrini" },
      { src: "/lokum-urun-kategori/lokum-3.jpeg", alt: "Şekerleme Tezgahı" },
      { src: "/lokum-urun-kategori/lokum-4.jpeg", alt: "Çikolata Vitrini" },
      { src: "/lokum-urun-kategori/lokum-5.jpeg", alt: "Çikolata Vitrini" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304 Kalite" },
      { label: "Sıcaklık", value: "+16°C / +18°C" },
      { label: "Nem Kontrolü", value: "Aktif Sistem" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri': {
    title: "Börek & Baklava Dolapları",
    subtitle: "Paslanmaz Çelik Vitrin Tezgah ve Dolap Modelleri",
    description: "Börek ve baklava satışı için özel tasarlanmış, sıcak muhafaza özellikli vitrin dolapları.",
    heroImage: "/borek-urun-kategori/borek-1.jpeg",
    features: [
      { title: "Sıcak Tutma", description: "Ürünleri taze ve sıcak tutan sistem", icon: "🔥" },
      { title: "Buhar Kontrolü", description: "Nem dengesi için buhar sistemi", icon: "💨" },
      { title: "Geniş Vitrin", description: "Ürünleri sergileyen geniş cam vitrin", icon: "🪟" },
      { title: "Hijyenik", description: "Kolay temizlenebilir yüzeyler", icon: "🧽" }
    ],
    gallery: [
      { src: "/borek-urun-kategori/borek-2.jpeg", alt: "Baklava Vitrini" },
      { src: "/borek-urun-kategori/borek-3.jpeg", alt: "Hamur İşi Tezgahı" },
      { src: "/borek-urun-kategori/borek-4.jpeg", alt: "Börek Vitrini" },
      { src: "/borek-urun-kategori/borek-5.jpeg", alt: "Börek Vitrini" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304 Kalite" },
      { label: "Isı Kontrolü", value: "Ayarlanabilir Sıcak" },
      { label: "Cam", value: "Temperli Cam" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(productDataMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productData = productDataMap[slug];
  
  if (!productData) {
    return {
      title: "Ürün Bulunamadı",
      description: "Aradığınız ürün bulunamadı.",
    };
  }

  return {
    title: `${productData.title} - ${productData.subtitle} | Pars Endüstriyel Mutfak`,
    description: productData.description,
    keywords: `${productData.title.toLowerCase()}, paslanmaz çelik, endüstriyel mutfak, ${slug.replace(/-/g, ' ')}`,
  };
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log(productDataMap)
  const productData = productDataMap[slug];

  if (!productData) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] animate-pulse" />}>
        <ProductHero 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
          heroImage={productData.heroImage}
        />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gray-50 animate-pulse">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="skeleton h-12 w-12 mb-4" />
                <div className="skeleton h-5 w-3/4 mb-2" />
                <div className="skeleton h-4 w-full mb-2" />
                <div className="skeleton h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>}>
        <ProductFeatures features={productData.features} />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-white animate-pulse">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square">
                <div className="skeleton h-full w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>}>
        <ProductGallery gallery={productData.gallery} />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gray-50 animate-pulse">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="skeleton h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="skeleton h-4 w-24" />
                  <div className="skeleton h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>}>
        <ProductSpecs 
          title="Teknik Özellikler"
          specs={productData.specs}
        />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gradient-to-br from-[#131C3C] to-[#1A2647] text-white animate-pulse">
        <div className="container mx-auto px-6 text-center">
          <div className="skeleton h-8 w-64 mx-auto mb-4" />
          <div className="skeleton h-4 w-96 mx-auto mb-8" />
          <div className="skeleton h-12 w-40 mx-auto" />
        </div>
      </div>}>
        <ProductCTA 
          title={`${productData.title} İçin Teklif Alın`}
          description="Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözümler keşfedin."
        />
      </Suspense>
    </div>
  );
}
