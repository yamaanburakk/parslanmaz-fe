'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, memo } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setActiveMenuItem(null);
  }, [pathname]);


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Section - Logo Color Background */}
      <div className="bg-[#131C3C]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#66B2FF]/20 to-[#4A90E2]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-none"></div>
                <div className="relative bg-gradient-to-r from-[#131C3C]/0 to-[#1A2647]/0 group-hover:from-[#131C3C]/10 group-hover:to-[#1A2647]/10 rounded-xl p-2 transition-all duration-300 border border-transparent group-hover:border-[#66B2FF]/30 group-hover:shadow-lg group-hover:shadow-[#66B2FF]/20">
                  <Image 
                    src="/parslanmaz-logo.jpeg" 
                    alt="Parslanmaz Endüstriyel Mutfak" 
                    width={240}
                    height={64}
                    className="w-auto object-contain h-16 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                    priority
                  />
                </div>
                {/* Professional Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#66B2FF] to-[#4A90E2] rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-md group-hover:blur-lg"></div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-[#66B2FF] font-semibold relative text-base">
                Anasayfa
              </Link>
              <Link href="/hakkimizda" className="text-white hover:text-[#66B2FF] font-semibold relative text-base">
                Hakkımızda
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-[#66B2FF] font-semibold flex items-center relative text-base">
                  Ürünler
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white backdrop-blur-md shadow-2xl border border-[#66B2FF]/20 rounded-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Endüstriyel Mutfak Ekipmanları
                  </Link>
                  <Link href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Açık Büfe Ekipmanları & Servis Üniteleri
                  </Link>
                  <Link href="/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Ekmek & Unlu Mamuller Dolapları
                  </Link>
                  <Link href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Pasta & Şarküteri Dolapları
                  </Link>
                  <Link href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Waffle & Kumpir Dolapları
                  </Link>
                  <Link href="/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Çikolata & Lokum Dolapları
                  </Link>
                  <Link href="/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-[#131C3C] hover:bg-[#66B2FF]/10 hover:text-[#66B2FF] transition-colors font-semibold border-l-2 border-transparent hover:border-[#66B2FF] text-sm sm:text-base rounded-lg mx-2">
                    Börek & Baklava Dolapları
                  </Link>
                </div>
              </div>
              <Link href="/projeler" className="text-white hover:text-[#66B2FF] font-semibold relative text-base">
                Projeler
              </Link>
              <Link href="/blog" className="text-white hover:text-[#66B2FF] font-semibold relative text-base">
                Blog
              </Link>
              <Link href="/sss" className="text-white hover:text-[#66B2FF] font-semibold relative text-base">
                SSS
              </Link>
              <Link href="/iletisim" className="text-white hover:text-[#66B2FF] font-semibold relative text-base">
                İletişim
              </Link>
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <Link 
                href="/hemen-teklif-al" 
                className="hidden md:inline-block bg-gradient-to-r from-[#131C3C] to-[#1A2647] text-white px-6 py-3 rounded-lg font-bold hover:from-[#1A2647] hover:to-[#131C3C] border border-[#66B2FF]/30 text-base shadow-lg hover:shadow-[#66B2FF]/20 transition-all duration-300"
              >
                Hemen Teklif Al
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMenuToggle}
                className="lg:hidden text-white hover:text-[#66B2FF] p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#131C3C] shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1 pt-4 px-4">
              <Link 
                href="/" 
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'home' 
                    ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                    : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                }`}
                onClick={() => handleMenuItemClick('home')}
              >
                Anasayfa
              </Link>
              <Link 
                href="/hakkimizda" 
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'about' 
                    ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                    : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                }`}
                onClick={() => handleMenuItemClick('about')}
              >
                Hakkımızda
              </Link>
              <div>
                <button
                  onClick={() => {
                    handleProductsToggle();
                    handleMenuItemClick('products');
                  }}
                  className={`py-3 px-4 rounded-xl font-semibold flex items-center w-full text-left transition-all duration-200 text-sm sm:text-base ${
                    activeMenuItem === 'products' 
                      ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                      : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                  }`}
                >
                  Ürünler
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link 
                      href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'endustriyel' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('endustriyel')}
                    >
                      Endüstriyel Mutfak Ekipmanları
                    </Link>
                    <Link 
                      href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'acik-bufe' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('acik-bufe')}
                    >
                      Açık Büfe Ekipmanları & Servis Üniteleri
                    </Link>
                    <Link 
                      href="/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'ekmek' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('ekmek')}
                    >
                      Ekmek & Unlu Mamuller Dolapları
                    </Link>
                    <Link 
                      href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'pasta' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('pasta')}
                    >
                      Pasta & Şarküteri Dolapları
                    </Link>
                    <Link 
                      href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'waffle' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('waffle')}
                    >
                      Waffle & Kumpir Dolapları
                    </Link>
                    <Link 
                      href="/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'cikolata' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('cikolata')}
                    >
                      Çikolata & Lokum Dolapları
                    </Link>
                    <Link 
                      href="/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-xl font-semibold border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'borek' 
                          ? 'bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2] shadow-lg' 
                          : 'text-white hover:text-[#4A90E2] hover:bg-[#4A90E2]/10 border-transparent hover:border-[#4A90E2]'
                      }`}
                      onClick={() => handleMenuItemClick('borek')}
                    >
                      Börek & Baklava Dolapları
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/projeler" 
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'projects' 
                    ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                    : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                }`}
                onClick={() => handleMenuItemClick('projects')}
              >
                Projeler
              </Link>
              <Link 
                href="/blog" 
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'blog' 
                    ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                    : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                }`}
                onClick={() => handleMenuItemClick('blog')}
              >
                Blog
              </Link>
              <Link 
                href="/sss" 
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'faq' 
                    ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                    : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                }`}
                onClick={() => handleMenuItemClick('faq')}
              >
                SSS
              </Link>
              <Link 
                href="/iletisim" 
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'contact' 
                    ? 'bg-[#66B2FF]/20 text-[#66B2FF] border-l-4 border-[#66B2FF] shadow-lg' 
                    : 'text-white hover:text-[#66B2FF] hover:bg-[#66B2FF]/10'
                }`}
                onClick={() => handleMenuItemClick('contact')}
              >
                İletişim
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default memo(Header);