const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Hızlı Linkler</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/hakkimizda" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Ürünler
                </a>
              </li>
              <li>
                <a href="/projeler" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Pars Endüstriyel Mutfak</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Paslanmaz çelik ekipman üretiminde uzmanız. Restoran, otel, kafe, fırın ve catering işletmeleri için yüksek kaliteli çözümler sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  YouTube
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  LinkedIn
                </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Ürün Kategorileri</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Endüstriyel Mutfak Ekipmanları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Pasta & Şarküteri Dolapları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Waffle & Kumpir Dolapları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  Açık Büfe Ekipmanları
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Bize Ulaşın</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 sm:mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-xs sm:text-sm">
                  Maltepe Mah. Gümüşsuyu Cad. Hacıoğlu Sanayi Sitesi No: 51, Zeytinburnu / İstanbul
                </span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905412288366" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  +90 541 228 83 66
                </a>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@parslanmaz.com" className="text-gray-300 hover:text-primary-300 transition-colors text-sm sm:text-base">
                  info@parslanmaz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © 2025 Pars Endüstriyel Mutfak. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                Çerez Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                Erişilebilirlik
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Support */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
        <a
          href="https://wa.me/905412288366"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-white p-4 sm:p-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl"
        >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden group-hover:block">
                <span className="text-xs sm:text-sm font-semibold text-[#25D366]">WhatsApp</span>
              </div>
            </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;