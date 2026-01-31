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
      {/* Professional Background Image - Maximum Sharpness & Ultra High Resolution */}
      <div 
        className="absolute inset-0 z-0 hero-image-container" 
        style={{
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          willChange: 'transform',
          WebkitTransform: 'translateZ(0)',
        } as React.CSSProperties}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/anasayfa-2.jpeg"
          alt="Pars Endüstriyel Mutfak - Paslanmaz Çelik Ekipmanlar"
          className="absolute inset-0 w-full h-full object-cover hero-background"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          style={{
            objectPosition: 'center center',
            objectFit: 'cover',
            filter: 'contrast(1.45) brightness(1.18) saturate(1.35)',
            imageRendering: 'crisp-edges',
            transform: 'scale(1) translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            msInterpolationMode: 'bicubic',
            WebkitTransform: 'translateZ(0)',
            minWidth: '100%',
            minHeight: '100%',
            width: '100%',
            height: '100%',
            WebkitImageRendering: '-webkit-optimize-contrast',
          } as React.CSSProperties}
        />
        {/* Modern gradient overlay for enhanced text visibility and professional look */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20" 
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            pointerEvents: 'none',
          } as React.CSSProperties}
        />
        {/* Additional subtle overlay for text contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/3 via-transparent to-black/3" 
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            pointerEvents: 'none',
          } as React.CSSProperties}
        />
      </div>
      
      {/* Professional Content - Optimized Positioning */}
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center transform translate-y-16">
          {/* Badge - Ultra Modern Professional Design */}
          <div className="inline-flex items-center bg-gradient-to-r from-[#131C3C]/30 to-[#1A2647]/30 backdrop-blur-md rounded-full px-6 py-3 mb-12 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-300" style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}>
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-[#66B2FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            {/* Professional Text */}
            <span className="text-white text-xs md:text-sm font-semibold tracking-wider drop-shadow-lg relative z-10 uppercase" style={{
              letterSpacing: '1.5px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'
            }}>
              Endüstriyel Mutfak Çözümleri
            </span>
            
            {/* Decorative Elements */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#D4AF37]/60 rounded-full shadow-lg"></div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#D4AF37]/60 rounded-full shadow-lg"></div>
          </div>
          
          {/* Main Headline - Ultra Modern Premium Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 leading-tight text-white" style={{
            textShadow: '5px 5px 10px rgba(0,0,0,0.95), 3px 3px 8px rgba(0,0,0,0.85), 0 0 20px rgba(0,0,0,0.5)',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.9))',
            letterSpacing: '-0.02em'
          }}>
            <span className="block tracking-tight" style={{ 
              textShadow: '5px 5px 10px rgba(0,0,0,0.95), 2px 2px 4px rgba(0,0,0,0.8)',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.25)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.9))'
            }}>
              Paslanmaz Çelik Ekipman
            </span>
            <span className="block tracking-tight" style={{ 
              textShadow: '5px 5px 10px rgba(0,0,0,0.95), 2px 2px 4px rgba(0,0,0,0.8)',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.25)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.9))'
            }}>
              Üretiminde
            </span>
            <span 
              className="block bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent tracking-tight"
              style={{
                textShadow: '5px 5px 10px rgba(0,0,0,0.95), 3px 3px 8px rgba(212,175,55,0.9), 0 0 20px rgba(212,175,55,0.4)',
                WebkitTextStroke: '1px rgba(255,255,255,0.35)',
                filter: 'drop-shadow(0 8px 16px rgba(212,175,55,0.9)) brightness(1.15)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              Uzmanız
            </span>
          </h1>
          
          {/* Description Text - Ultra Modern & Enhanced Readability */}
          <div className="bg-gradient-to-r from-black/70 via-black/65 to-black/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-10 mx-4 border border-white/30 shadow-2xl" style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-semibold" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.95), 1px 1px 2px rgba(0,0,0,0.8)',
              letterSpacing: '0.01em'
            }}>
              Restoran, otel, kafe, catering ve endüstriyel mutfak projeleri için 
              <span className="text-[#D4AF37] font-bold" style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(212,175,55,0.3)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
              }}> paslanmaz çelik ekipman ve sistemleri</span> ihtiyaca özel tasarlıyor, üretiyor ve 
              <span className="text-[#D4AF37] font-bold" style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(212,175,55,0.3)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
              }}> anahtar teslim çözümler</span> sunuyoruz.
            </p>
          </div>
          
          {/* Button - Professional & Perfectly Sized Design with Advanced Animations */}
          <div className="flex justify-center items-center">
            <a 
              href="/hemen-teklif-al" 
              className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-4.5 rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:from-[#F4D03F] hover:via-[#D4AF37] hover:to-[#F4D03F] active:scale-95 transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/60 active:shadow-[#D4AF37]/40 border-2 border-[#D4AF37]/90 inline-flex items-center justify-center gap-2 sm:gap-2.5 hover:scale-105 transform hover:brightness-110 relative overflow-hidden group backdrop-blur-sm"
              style={{
                boxShadow: '0 10px 30px rgba(212,175,55,0.4), 0 4px 12px rgba(212,175,55,0.25), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease-in-out infinite, button-pulse 2s ease-in-out infinite',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* Premium Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#F4D03F]/30 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"></div>
              
              {/* Ripple Effect on Click/Touch */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-300 ease-out"></div>
              
              {/* Premium Plus Icon with Animation */}
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg group-hover:rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="relative z-10 drop-shadow-lg tracking-wide group-hover:tracking-wider transition-all duration-300" style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.5), 0 0 6px rgba(0,0,0,0.2)',
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