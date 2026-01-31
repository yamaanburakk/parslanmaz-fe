import { memo, useMemo, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type ProductBase = {
  title: string;
  description: string;
};

type ProductWithImage = ProductBase & {
  image: { src: string; alt: string };
  href: string;
};

type ProductWithIcon = ProductBase & {
  icon: ReactNode;
};

type ProductCategory = ProductWithImage | ProductWithIcon;

const ProductsSection = memo(() => {
  const productCategories: ProductCategory[] = useMemo(() => [
    {
      title: "Endüstriyel Mutfak Ekipmanları",
      description: "Profesyonel mutfaklar için özel tasarım ekipmanlar",
      // Local optimized hero for the card
      image: {
        src: "/endustriyel-mutfak-ekipmanlari.jpeg",
        alt: "Endüstriyel Mutfak Ekipmanları görseli"
      },
      href: "/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri"
    },
    {
      title: "Açık Büfe Ekipmanları & Servis Üniteleri",
      description: "Büfe ve servis alanları için modern çözümler",
      image: {
        src: "/acik-bufe.jpeg",
        alt: "Açık Büfe Ekipmanları ve Servis Üniteleri"
      },
      href: "/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri"
    },
    {
      title: "Ekmek & Unlu Mamuller Dolapları",
      description: "Fırın ve pastaneler için özel dolaplar",
      image: {
        src: "/ekmek-unlu-mamul.jpeg",
        alt: "Ekmek ve Unlu Mamuller Dolapları"
      },
      href: "/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri"
    },
    {
      title: "Pasta & Şarküteri Dolapları",
      description: "Pasta ve şarküteri ürünleri için vitrin dolapları",
      image: {
        src: "/pasta.jpeg",
        alt: "Pasta ve Şarküteri Dolapları"
      },
      href: "/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri"
    },
    {
      title: "Waffle & Kumpir Dolapları",
      description: "Waffle ve kumpir satış noktaları için özel dolaplar",
      image: {
        src: "/waffle.jpeg",
        alt: "Waffle ve Kumpir Dolapları"
      },
      href: "/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri"
    },
    {
      title: "Çikolata & Lokum Dolapları",
      description: "Çikolata ve lokum satışı için vitrin dolapları",
      image: {
        src: "/cikolata.jpeg",
        alt: "Çikolata ve Lokum Dolapları"
      },
      href: "/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri"
    },
    {
      title: "Börek & Baklava Dolapları",
      description: "Börek ve baklava satışı için özel dolaplar",
      image: {
        src: "/borek.jpeg",
        alt: "Börek ve Baklava Dolapları"
      },
      href: "/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri"
    }
  ], []);

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#66B2FF]/10 to-[#FFD700]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-full px-6 py-3 mb-8 sm:mb-12 border border-[#66B2FF]/30 shadow-2xl">
            <div className="w-2 h-2 bg-[#66B2FF] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#66B2FF] text-sm font-bold tracking-wider uppercase">Ürün Kategorilerimiz</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
            <span className="block">Endüstriyel Mutfak</span>
            <span className="block bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] bg-clip-text text-transparent animate-gradient">
              Çözümlerimiz
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#CBD5E1] max-w-4xl mx-auto leading-relaxed font-medium">
            Endüstriyel mutfak ihtiyaçlarınız için 
            <span className="text-[#66B2FF] font-bold"> geniş ürün yelpazemiz</span> ve
            <span className="text-[#FFD700] font-bold"> özel tasarım çözümlerimiz</span> ile 
            <span className="text-white font-bold"> profesyonel çözümler</span> sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#0F172A] p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-700 cursor-pointer border border-[#334155]/50 hover:border-[#66B2FF]/50 shadow-2xl hover:shadow-[#66B2FF]/30 backdrop-blur-sm overflow-hidden hover:scale-[1.02]"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#66B2FF]/5 to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Media: Prefer photo when available, else show icon */}
              {"image" in product ? (
                <Link href={product.href} className="block relative mb-6 sm:mb-8 w-full overflow-hidden rounded-xl aspect-[16/9] border border-white/10 shadow-2xl hover:shadow-[#66B2FF]/20 focus:outline-none focus:ring-2 focus:ring-[#66B2FF]/60 transition-all duration-500 group-hover:border-[#66B2FF]/30">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center will-change-transform transition-transform duration-700 group-hover:scale-[1.02]"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Crect width='10' height='6' fill='%23222'/%3E%3C/svg%3E"
                    quality={90}
                    aria-label={product.title}
                    decoding="async"
                    unoptimized={false}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                  {/* Enhanced gradient overlay for better contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />
                  
                  {/* Premium accent badge */}
                  <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-[#66B2FF]/20 to-[#FFD700]/20 text-white backdrop-blur-lg border border-white/30 shadow-lg group-hover:scale-110 transition-all duration-300">
                      <div className="w-1.5 h-1.5 bg-[#66B2FF] rounded-full animate-pulse"></div>
                      Öne Çıkan
                    </span>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>
              ) : (
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-[#66B2FF]/20 to-[#FFD700]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-[#66B2FF]/30 group-hover:border-[#66B2FF]/60 shadow-lg group-hover:shadow-[#66B2FF]/30">
                    {"icon" in product && (
                      <div className="text-[#66B2FF] group-hover:text-[#FFD700] transition-colors duration-500">
                        {product.icon}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="relative z-10">
                {!("image" in product) && (
                  <>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 group-hover:text-[#66B2FF] transition-colors duration-500 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#CBD5E1] mb-6 sm:mb-8 leading-relaxed group-hover:text-[#F1F5F9] transition-colors duration-500">
                      {product.description}
                    </p>
                  </>
                )}

                {/* Ultra Professional Action Button */}
                <div className="flex items-center justify-between mt-4">
                  <Link 
                    href={"image" in product ? product.href : "#"} 
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#1E293B] hover:from-[#66B2FF] hover:via-[#FFD700] hover:to-[#66B2FF] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl border border-[#334155]/50 hover:border-[#66B2FF]/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#66B2FF]/25 backdrop-blur-sm"
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Button Content */}
                    <div className="relative z-10 flex items-center gap-2 group-hover/btn:gap-3">
                      <span className="relative">
                        Detayları Gör
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover/btn:w-full transition-all duration-500"></div>
                      </span>
                      
                      {/* Enhanced Arrow Icon */}
                      <div className="relative">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        {/* Arrow Glow Effect */}
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    {/* Button Border Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#66B2FF]/20 via-[#FFD700]/20 to-[#66B2FF]/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </Link>
                  
                  {/* Enhanced Status Indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#66B2FF] rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-[#FFD700] transition-all duration-500 group-hover:scale-125"></div>
                    <div className="w-1 h-1 bg-[#66B2FF]/40 rounded-full opacity-40 group-hover:opacity-80 group-hover:bg-[#FFD700]/60 transition-all duration-500 group-hover:scale-110"></div>
                  </div>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className="mt-4 sm:mt-5 h-1.5 bg-[#334155] rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-0 bg-gradient-to-r from-[#66B2FF] via-[#FFD700] to-[#66B2FF] rounded-full group-hover:w-full transition-all duration-700 shadow-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection;