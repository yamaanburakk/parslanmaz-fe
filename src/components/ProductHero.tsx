import Image from "next/image";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
}

const ProductHero = ({ title, subtitle, description, heroImage }: ProductHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#131C3C]/80 via-[#1A2647]/80 to-[#223052]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-[#66B2FF]/20 to-[#FF6B35]/20 backdrop-blur-md rounded-full border border-[#66B2FF]/40 shadow-xl" style={{ padding: '25px 50px !important', minHeight: '70px !important', display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', width: 'auto !important' }}>
                <span className="text-[#66B2FF] text-sm font-bold tracking-wide" style={{ padding: '0 !important', margin: '0 !important' }}>Ürün Kategorisi</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-[#66B2FF] to-[#FF6B35] bg-clip-text text-transparent mb-6 font-semibold">
                  {subtitle}
                </h2>
                <p className="text-base sm:text-lg text-[#F8FAFC] leading-relaxed font-medium">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/hemen-teklif-al" className="bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#4E9EFF] hover:to-[#66B2FF] transition-all duration-300 transform hover:scale-105 inline-block text-center shadow-lg">
                  Ücretsiz Teklif Al
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#66B2FF]/30">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-[#66B2FF]/30 shadow-lg">
                <div className="text-2xl font-bold text-[#66B2FF]">12+</div>
                <div className="text-sm text-[#F1F5F9]">Proje</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-[#FF6B35]/30 shadow-lg">
                <div className="text-2xl font-bold text-[#FF6B35]">5 Yıl</div>
                <div className="text-sm text-[#F1F5F9]">Garanti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#66B2FF]/10 to-[#FF6B35]/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#66B2FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-2xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#66B2FF]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FF6B35]/20 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default ProductHero;