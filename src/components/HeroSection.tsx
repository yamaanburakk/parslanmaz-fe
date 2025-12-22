import Image from "next/image";
import { memo } from "react";

const HeroSection = memo(() => {
  return (
    <section 
      className="relative text-white pt-20 pb-24 overflow-hidden min-h-screen flex items-center hero-section" 
      style={{ 
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      {/* Professional Background Image - Crystal Clear Glass Effect */}
              <div className="absolute inset-0 z-0" style={{
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'transform',
                imageRendering: 'auto',
                filter: 'contrast(1.08) brightness(1.01)',
              } as React.CSSProperties}>
        <Image
          src="/paslanmaz-celik-endustriyel-mutfak.jpeg"
          alt="Pars Endüstriyel Mutfak - Paslanmaz Çelik Ekipmanlar"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover hero-background"
                  style={{
                    objectPosition: 'center 30%',
                    filter: 'contrast(1.15) brightness(1.03) saturate(1.05) hue-rotate(0deg)',
                    imageRendering: 'auto',
                    transform: 'scale(1.05)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform',
                  } as React.CSSProperties}
          placeholder="empty"
          unoptimized={false}
        />
        {/* Crystal clear overlay for professional text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" style={{
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        } as React.CSSProperties}></div>
        
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
          
          {/* Main Headline - Premium Professional Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 leading-tight text-white" style={{
            textShadow: '4px 4px 8px rgba(0,0,0,0.95), 2px 2px 6px rgba(0,0,0,0.8)',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.9))',
            letterSpacing: '-0.02em'
          }}>
            <span className="block tracking-tight" style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,0.95)',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.2)'
            }}>
              Paslanmaz Çelik Ekipman
            </span>
            <span className="block tracking-tight" style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,0.95)',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.2)'
            }}>
              Üretiminde
            </span>
            <span 
              className="block bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#CD853F] bg-clip-text text-transparent tracking-tight"
              style={{
                textShadow: '4px 4px 8px rgba(0,0,0,0.95), 2px 2px 6px rgba(184,134,11,0.8)',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                filter: 'drop-shadow(0 6px 12px rgba(184,134,11,0.8)) brightness(1.1)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease-in-out infinite'
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
              Restoran, otel, kafe, catering ve endüstriyel mutfak projeleri için 
              <span className="text-[#B8860B] font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}> paslanmaz çelik ekipman ve sistemleri</span> ihtiyaca özel tasarlıyor, üretiyor ve 
              <span className="text-[#B8860B] font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}> anahtar teslim çözümler</span> sunuyoruz.
            </p>
          </div>
          
          {/* Button - Ultra Premium Professional Design */}
          <div className="flex justify-center items-center">
            <a 
              href="/hemen-teklif-al" 
              className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#CD853F] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-[#CD853F] hover:via-[#B8860B] hover:to-[#D4AF37] transition-all duration-500 shadow-2xl hover:shadow-[#B8860B]/50 border border-[#B8860B]/80 inline-flex items-center justify-center gap-3 hover:scale-110 transform hover:brightness-115 relative overflow-hidden group backdrop-blur-sm"
              style={{
                boxShadow: '0 12px 30px rgba(184,134,11,0.4), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              {/* Premium Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#CD853F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Premium Plus Icon */}
              <svg className="w-6 h-6 relative z-10 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="relative z-10 drop-shadow-lg tracking-wide" style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}>
                Hemen Teklif Al
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;