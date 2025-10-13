const HeroSection = () => {
  return (
    <section 
      className="relative text-white pt-20 pb-24 overflow-hidden min-h-screen flex items-center hero-section" 
      style={{ 
        imageRendering: 'auto',
        imageOrientation: 'from-image',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform, opacity',
        textRendering: 'geometricPrecision'
      }}
    >
      {/* Professional Background Image - Photo First */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-background"
          style={{
            backgroundImage: 'url(/paslanmaz-celik-endustriyel-mutfak.jpeg)',
            backgroundPosition: 'center -20%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'auto',
            imageOrientation: 'from-image',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            filter: 'contrast(1.2) brightness(0.95) saturate(1.15)',
            perspective: '1000px',
            textRendering: 'geometricPrecision'
          }}
        />
        {/* Minimal overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        
      </div>
      
      {/* Professional Content - Optimized Positioning */}
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center transform translate-y-16">
          {/* Badge - Ultra Professional Compact Design */}
          <div className="inline-flex items-center bg-gradient-to-r from-[#131C3C]/20 to-[#1A2647]/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-12 border border-[#B8860B]/25 shadow-lg relative overflow-hidden group hover:border-[#B8860B]/40 transition-all duration-300">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/3 to-[#66B2FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            {/* Professional Text */}
            <span className="text-white text-xs font-medium tracking-wider drop-shadow-sm relative z-10 uppercase" style={{
              letterSpacing: '1px',
              textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.7)',
              filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.5))'
            }}>
              Endüstriyel Mutfak Çözümleri
            </span>
            
            {/* Decorative Elements */}
            <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-[#B8860B]/50 rounded-full"></div>
            <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-[#B8860B]/50 rounded-full"></div>
          </div>
          
          {/* Main Headline - Ultra Professional Typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight text-white" style={{
            textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.7)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))'
          }}>
            Paslanmaz Çelik Ekipman
            <span className="block" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>Üretiminde</span>
            <span 
              className="block bg-gradient-to-r from-[#B8860B] to-[#CD853F] bg-clip-text text-transparent"
              style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
                WebkitTextStroke: '0.8px rgba(255,255,255,0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(184,134,11,0.6))'
              }}
            >
              Uzmanız
            </span>
          </h1>
          
          {/* Description Text - Enhanced Readability */}
          <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-lg rounded-2xl p-8 mb-10 mx-4 border border-white/20">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
            }}>
              Restoran, otel, kafe, fırın ve catering işletmeleri için 
              <span className="text-[#B8860B] font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}> pasta dolabı</span>,
              <span className="text-[#B8860B] font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}> kumpir-waffle dolabı</span>,
              <span className="text-[#B8860B] font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}> teşhir dolapları</span> ve
              <span className="text-[#B8860B] font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}> özel üretim çelik tezgahlar</span>.
            </p>
          </div>
          
          {/* Button - Professional Compact Design */}
          <div className="flex justify-center items-center">
            <a 
              href="/hemen-teklif-al" 
              className="bg-gradient-to-r from-[#B8860B] to-[#CD853F] text-white px-8 py-4 rounded-xl font-semibold text-base hover:from-[#CD853F] hover:to-[#B8860B] transition-all duration-300 shadow-lg hover:shadow-[#B8860B]/40 border border-[#B8860B]/60 inline-flex items-center justify-center gap-2.5 hover:scale-105 transform hover:brightness-110 relative overflow-hidden group"
              style={{
                boxShadow: '0 8px 20px rgba(184,134,11,0.3), inset 0 1px 0 rgba(255,255,255,0.15)'
              }}
            >
              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="relative z-10">Hemen Teklif Al</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;