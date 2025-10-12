'use client';

import Link from 'next/link';

const FAQSidebar = () => {
  const popularQuestions = [
    {
      id: 1,
      question: "Paslanmaz çelik ekipmanlar nasıl temizlenir?",
      category: "Bakım & Temizlik",
      views: 1250
    },
    {
      id: 2,
      question: "Enerji tasarrufu için ne yapabilirim?",
      category: "Enerji Tasarrufu",
      views: 980
    },
    {
      id: 3,
      question: "Hijyen standartları nelerdir?",
      category: "Hijyen",
      views: 1150
    },
    {
      id: 4,
      question: "Hangi ekipmanı seçmeliyim?",
      category: "Ekipman Seçimi",
      views: 850
    }
  ];

  const quickLinks = [
    { name: 'Bakım Rehberi', href: '/blog', icon: '🔧' },
    { name: 'Ürün Kataloğu', href: '/urunler', icon: '📋' },
    { name: 'Teknik Destek', href: '/destek', icon: '🛠️' },
    { name: 'İletişim', href: '/iletisim', icon: '📞' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Support */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Uzman Desteği</h3>
          <p className="text-primary-100 text-sm mb-4">
            Sorunuzu bulamadınız mı? Uzman ekibimiz size yardımcı olmaya hazır
          </p>
          <div className="space-y-3">
            <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              Canlı Destek
            </button>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              E-posta Gönder
            </button>
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Popüler Sorular
        </h3>
        <div className="space-y-4">
          {popularQuestions.map((question, index) => (
            <div key={question.id} className="group">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {question.question}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2">
                      {question.category}
                    </span>
                    <span>{question.views} görüntüleme</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Hızlı Linkler
        </h3>
        <div className="space-y-2">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-lg mr-3">{link.icon}</span>
              <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Stats */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          İstatistikler
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Toplam Soru</span>
            <span className="font-semibold text-primary-600">100+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Çözüm Oranı</span>
            <span className="font-semibold text-green-600">95%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Ortalama Yanıt Süresi</span>
            <span className="font-semibold text-blue-600">2 saat</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Memnuniyet Oranı</span>
            <span className="font-semibold text-purple-600">98%</span>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          İletişim Yöntemleri
        </h3>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">WhatsApp</div>
              <div className="text-sm text-gray-600">+90 555 123 45 67</div>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">E-posta</div>
              <div className="text-sm text-gray-600">destek@parsendustriyel.com</div>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Telefon</div>
              <div className="text-sm text-gray-600">+90 212 555 01 23</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQSidebar;