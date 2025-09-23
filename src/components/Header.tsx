'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen);
  };

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
            <Link href="/" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group">
              Anasayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/hakkimizda" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group">
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="text-primary-700 hover:text-primary-600 font-medium transition-colors flex items-center relative">
                Ürünler
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm shadow-xl border border-primary-200 rounded-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Endüstriyel Mutfak Ekipmanları
                </a>
                <a href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Açık Büfe Ekipmanları & Servis Üniteleri
                </a>
                <a href="/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Ekmek & Unlu Mamuller Dolapları
                </a>
                <a href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Pasta & Şarküteri Dolapları
                </a>
                <a href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Waffle & Kumpir Dolapları
                </a>
                <a href="/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Çikolata & Lokum Dolapları
                </a>
                <a href="/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block px-4 py-3 text-primary-700 hover:bg-accent-50 hover:text-accent-700 transition-colors font-medium border-l-2 border-transparent hover:border-accent-500">
                  Börek & Baklava Dolapları
                </a>
              </div>
            </div>
            <Link href="/projeler" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group">
              Projeler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/sss" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group">
              SSS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/iletisim" className="text-primary-700 hover:text-primary-600 font-medium transition-colors relative group">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <Link 
              href="/hemen-teklif-al" 
              className="hidden md:inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
              <Link href="/" className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium">
                Anasayfa
              </Link>
              <Link href="/hakkimizda" className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium">
                Hakkımızda
              </Link>
              <div>
                <button
                  onClick={handleProductsToggle}
                  className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium flex items-center w-full text-left"
                >
                  Ürünler
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <a href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Endüstriyel Mutfak Ekipmanları
                    </a>
                    <a href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Açık Büfe Ekipmanları & Servis Üniteleri
                    </a>
                    <a href="/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Ekmek & Unlu Mamuller Dolapları
                    </a>
                    <a href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Pasta & Şarküteri Dolapları
                    </a>
                    <a href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Waffle & Kumpir Dolapları
                    </a>
                    <a href="/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Çikolata & Lokum Dolapları
                    </a>
                    <a href="/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="block text-primary-600 hover:text-accent-700 hover:bg-white/70 transition-colors py-2 px-4 rounded-lg font-medium border-l-2 border-transparent hover:border-accent-500">
                      Börek & Baklava Dolapları
                    </a>
                  </div>
                )}
              </div>
              <Link href="/projeler" className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium">
                Projeler
              </Link>
              <Link href="/blog" className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium">
                Blog
              </Link>
              <Link href="/sss" className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium">
                SSS
              </Link>
              <Link href="/iletisim" className="text-primary-700 hover:text-primary-600 hover:bg-white/70 transition-colors py-3 px-4 rounded-lg font-medium">
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