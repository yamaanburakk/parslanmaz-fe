'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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

  // URL değiştiğinde menüleri kapat
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setActiveMenuItem(null);
  }, [pathname]);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-primary-200 sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/pars-logo.jpeg" 
              alt="Pars Endüstriyel Mutfak" 
              className="h-24 w-auto object-contain bg-white rounded-lg shadow-sm border border-primary-100"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group text-sm sm:text-base">
              Anasayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/hakkimizda" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group text-sm sm:text-base">
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="text-primary-700 hover:text-primary-600 font-medium transition-colors flex items-center relative text-sm sm:text-base">
                Ürünler
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm shadow-xl border border-primary-200 rounded-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Endüstriyel Mutfak Ekipmanları
                </a>
                <a href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Açık Büfe Ekipmanları & Servis Üniteleri
                </a>
                <a href="/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Ekmek & Unlu Mamuller Dolapları
                </a>
                <a href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Pasta & Şarküteri Dolapları
                </a>
                <a href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Waffle & Kumpir Dolapları
                </a>
                <a href="/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Çikolata & Lokum Dolapları
                </a>
                <a href="/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500 text-sm sm:text-base">
                  Börek & Baklava Dolapları
                </a>
              </div>
            </div>
            <Link href="/projeler" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group text-sm sm:text-base">
              Projeler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group text-sm sm:text-base">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/sss" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group text-sm sm:text-base">
              SSS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/iletisim" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group text-sm sm:text-base">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <Link 
              href="/hemen-teklif-al" 
              className="hidden md:inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Hemen Teklif Al
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden text-primary-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-200 bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-lg">
            <nav className="flex flex-col space-y-1 pt-4 px-4">
              <Link 
                href="/" 
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'home' 
                    ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                    : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
                }`}
                onClick={() => handleMenuItemClick('home')}
              >
                Anasayfa
              </Link>
              <Link 
                href="/hakkimizda" 
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'about' 
                    ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                    : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
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
                  className={`py-3 px-4 rounded-lg font-medium flex items-center w-full text-left transition-all duration-200 text-sm sm:text-base ${
                    activeMenuItem === 'products' 
                      ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                      : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
                  }`}
                >
                  Ürünler
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <a 
                      href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'endustriyel' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('endustriyel')}
                    >
                      Endüstriyel Mutfak Ekipmanları
                    </a>
                    <a 
                      href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'acik-bufe' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('acik-bufe')}
                    >
                      Açık Büfe Ekipmanları & Servis Üniteleri
                    </a>
                    <a 
                      href="/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'ekmek' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('ekmek')}
                    >
                      Ekmek & Unlu Mamuller Dolapları
                    </a>
                    <a 
                      href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'pasta' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('pasta')}
                    >
                      Pasta & Şarküteri Dolapları
                    </a>
                    <a 
                      href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'waffle' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('waffle')}
                    >
                      Waffle & Kumpir Dolapları
                    </a>
                    <a 
                      href="/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'cikolata' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('cikolata')}
                    >
                      Çikolata & Lokum Dolapları
                    </a>
                    <a 
                      href="/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" 
                      className={`block py-2 px-4 rounded-lg font-medium border-l-2 transition-all duration-200 text-xs sm:text-sm ${
                        activeMenuItem === 'borek' 
                          ? 'bg-accent-100 text-accent-700 border-accent-500' 
                          : 'text-primary-600 hover:text-accent-700 hover:bg-white/70 border-transparent hover:border-accent-500'
                      }`}
                      onClick={() => handleMenuItemClick('borek')}
                    >
                      Börek & Baklava Dolapları
                    </a>
                  </div>
                )}
              </div>
              <Link 
                href="/projeler" 
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'projects' 
                    ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                    : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
                }`}
                onClick={() => handleMenuItemClick('projects')}
              >
                Projeler
              </Link>
              <Link 
                href="/blog" 
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'blog' 
                    ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                    : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
                }`}
                onClick={() => handleMenuItemClick('blog')}
              >
                Blog
              </Link>
              <Link 
                href="/sss" 
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'faq' 
                    ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                    : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
                }`}
                onClick={() => handleMenuItemClick('faq')}
              >
                SSS
              </Link>
              <Link 
                href="/iletisim" 
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeMenuItem === 'contact' 
                    ? 'bg-accent-100 text-accent-700 border-l-4 border-accent-500' 
                    : 'text-primary-700 hover:text-primary-600 hover:bg-white/70'
                }`}
                onClick={() => handleMenuItemClick('contact')}
              >
                İletişim
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;