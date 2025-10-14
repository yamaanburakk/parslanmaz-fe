import Link from 'next/link';
import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-[#131C3C] to-[#1A2647] text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Pars Endüstriyel Mutfak</h3>
            <p className="text-[#F1F5F9] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Paslanmaz çelik ekipman üretiminde uzmanız. Restoran, otel, kafe, fırın ve catering işletmeleri için yüksek kaliteli çözümler sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
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

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Hızlı Linkler</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <a href="#products" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Ürünler
                </a>
              </li>
              <li>
                <Link href="/projeler" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">İletişim Bilgileri</h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Maltepe%20Mah.%20G%C3%BCm%C3%BC%C5%9Fsuyu%20Cad.%20Hac%C4%B1o%C4%9Flu%20Sanayi%20Sitesi%20No%3A%2051%2C%20Zeytinburnu%2C%20%C4%B0stanbul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Haritada adresi aç"
                className="flex items-start justify-center sm:justify-start space-x-3 hover:text-[#66B2FF] transition-colors"
              >
                <svg className="w-5 h-5 text-[#66B2FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-[#F1F5F9] text-sm sm:text-base leading-relaxed">
                    Maltepe Mah. Gümüşsuyu Cad.<br />
                    Hacıoğlu Sanayi Sitesi No: 51<br />
                    Zeytinburnu / İstanbul
                  </p>
                </div>
              </a>
              
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <svg className="w-5 h-5 text-[#66B2FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="pt-0.5">
                  <a href="tel:+905412288366" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                    +90 541 228 83 66
                  </a>
                </div>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <svg className="w-5 h-5 text-[#66B2FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="pt-0.5">
                  <a href="mailto:info@parslanmaz.com" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                    info@parslanmaz.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Ürün Kategorileri</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Endüstriyel Mutfak Ekipmanları
                </Link>
              </li>
              <li>
                <Link href="/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Pasta & Şarküteri Dolapları
                </Link>
              </li>
              <li>
                <Link href="/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Waffle & Kumpir Dolapları
                </Link>
              </li>
              <li>
                <Link href="/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri" className="text-[#F1F5F9] hover:text-[#66B2FF] transition-colors text-sm sm:text-base">
                  Açık Büfe Ekipmanları
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#324468]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#CBD5E1] text-xs sm:text-sm text-center sm:text-left">
              © 2025 Parslanmaz Endüstriyel Mutfak. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-6 text-[10px] sm:text-xs lg:text-sm justify-center sm:justify-end">
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
});

Footer.displayName = 'Footer';

export default Footer;