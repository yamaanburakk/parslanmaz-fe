const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#131C3C] to-[#1A2647] text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Hızlı Linkler</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/hakkimizda" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#products" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Ürünler
                </a>
              </li>
              <li>
                <a href="/projeler" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Pars Endüstriyel Mutfak</h3>
            <p className="text-[#F1F5F9] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Paslanmaz çelik ekipman üretiminde uzmanız. Restoran, otel, kafe, fırın ve catering işletmeleri için yüksek kaliteli çözümler sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Facebook
                </a>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Instagram
                </a>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  YouTube
                </a>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  LinkedIn
                </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Ürün Kategorileri</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Endüstriyel Mutfak Ekipmanları
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Pasta & Şarküteri Dolapları
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Waffle & Kumpir Dolapları
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Açık Büfe Ekipmanları
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#324468]">
        <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#CBD5E1] text-xs sm:text-sm mb-4 md:mb-0">
              © 2025 Parslanmaz Endüstriyel Mutfak. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-nowrap gap-1 sm:gap-2 md:gap-4 lg:gap-8 text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <a href="#" className="text-[#CBD5E1] hover:text-[#66B2FF] transition-colors whitespace-nowrap flex-shrink-0">
                Gizlilik Politikası
              </a>
              <span className="text-[#CBD5E1] mx-1">|</span>
              <a href="#" className="text-[#CBD5E1] hover:text-[#66B2FF] transition-colors whitespace-nowrap flex-shrink-0">
                Çerez Politikası
              </a>
              <span className="text-[#CBD5E1] mx-1">|</span>
              <a href="#" className="text-[#CBD5E1] hover:text-[#66B2FF] transition-colors whitespace-nowrap flex-shrink-0">
                Kullanım Şartları
              </a>
              <span className="text-[#CBD5E1] mx-1">|</span>
              <a href="#" className="text-[#CBD5E1] hover:text-[#66B2FF] transition-colors whitespace-nowrap flex-shrink-0">
                Erişilebilirlik
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;