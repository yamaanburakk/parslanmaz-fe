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
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      { title: "Modern Tasarım", description: "Çağdaş mutfak estetiğine uygun, şık ve modern tasarım", icon: "✨" },
      { title: "Geniş Servis Alanı", description: "Büyük servis alanları ile verimli kullanım imkanı", icon: "📏" },
      { title: "Isı Kontrolü", description: "Sıcak ve soğuk ürünler için özel ısı kontrol sistemleri", icon: "🌡️" },
      { title: "Kolay Temizlik", description: "Hijyenik yüzeyler ve kolay temizlenebilir yapı", icon: "🧽" }
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Açık Büfe Servis Ünitesi" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Paslanmaz Çelik Büfe Tezgahı" },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Modern Vitrin Modelleri" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Servis Ünitesi Detayı" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304" },
      { label: "Kapasite", value: "50-200 Kişi" },
      { label: "Isı Kontrolü", value: "Sıcak/Soğuk" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Garanti", value: "5 Yıl" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  },
  'endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri': {
    title: "Endüstriyel Mutfak Ekipmanları",
    subtitle: "Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri",
    description: "Profesyonel mutfaklar için tasarlanmış, dayanıklı ve hijyenik endüstriyel mutfak ekipmanları.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      { title: "Dayanıklı Yapı", description: "Ağır kullanıma dayanıklı paslanmaz çelik yapı", icon: "🔧" },
      { title: "Hijyenik", description: "Kolay temizlenebilir ve hijyenik yüzeyler", icon: "🧼" },
      { title: "Fonksiyonel", description: "Pratik kullanım için optimize edilmiş tasarım", icon: "⚙️" },
      { title: "Modüler", description: "İhtiyaca göre özelleştirilebilir modüler sistem", icon: "🔗" }
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Endüstriyel Mutfak Tezgahı" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Paslanmaz Çelik Dolap" },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Mutfak Raf Sistemleri" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Endüstriyel Evye" }
    ],
    specs: [
      { label: "Malzeme", value: "Paslanmaz Çelik 304" },
      { label: "Kalınlık", value: "1.2-2.0 mm" },
      { label: "Yüzey", value: "Fırçalı/Matt" },
      { label: "Boyut", value: "Özelleştirilebilir" },
      { label: "Garanti", value: "5 Yıl" },
      { label: "Üretim", value: "Yerli Üretim" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(productDataMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const productData = productDataMap[params.slug];
  
  if (!productData) {
    return {
      title: "Ürün Bulunamadı",
      description: "Aradığınız ürün bulunamadı.",
    };
  }

  return {
    title: `${productData.title} - ${productData.subtitle} | Pars Endüstriyel Mutfak`,
    description: productData.description,
    keywords: `${productData.title.toLowerCase()}, paslanmaz çelik, endüstriyel mutfak, ${params.slug.replace(/-/g, ' ')}`,
  };
}

export default function ProductCategoryPage({ params }: { params: { slug: string } }) {
  const productData = productDataMap[params.slug];

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
