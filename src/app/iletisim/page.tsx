import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Contact Hero Section */}
      <ContactHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* First Row - Contact Form & Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Yöntemleri</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Telefon',
                    description: 'Hızlı destek için bizi arayın',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    primary: '+90 541 228 83 66',
                    secondary: 'Ana telefon hattı',
                    color: 'bg-blue-500',
                    action: 'tel:+905412288366'
                  },
                  {
                    title: 'E-posta',
                    description: 'Detaylı sorularınız için e-posta gönderin',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    primary: 'info@parslanmaz.com',
                    secondary: 'Ana iletişim adresi',
                    color: 'bg-green-500',
                    action: 'mailto:info@parslanmaz.com'
                  },
                  {
                    title: 'WhatsApp',
                    description: 'Anında mesajlaşma için WhatsApp',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ),
                    primary: '+90 541 228 83 66',
                    secondary: '7/24 Destek',
                    color: 'bg-green-600',
                    action: 'https://wa.me/905412288366'
                  },
                  {
                    title: 'Adres',
                    description: 'Merkez ofisimizi ziyaret edin',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    primary: 'Zeytinburnu, İstanbul',
                    secondary: 'Maltepe Mah. Gümüşsuyu Cad.',
                    color: 'bg-red-500',
                    action: 'https://maps.google.com/?q=Maltepe+Mah.+Gümüşsuyu+Cad.+Hacıoğlu+Sanayi+Sitesi+No:+51,+Zeytinburnu,+İstanbul'
                  }
                ].map((method, index) => (
                  <div key={index} className="group">
                    <a
                      href={method.action}
                      className="block p-6 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all duration-200 h-full"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                          <div className="space-y-1">
                            <div className="font-medium text-primary-600 text-base">{method.primary}</div>
                            <div className="text-sm text-gray-500">{method.secondary}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Working Hours & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Working Hours */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Çalışma Saatleri</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  (() => {
                    const now = new Date();
                    const day = now.getDay();
                    const hour = now.getHours();
                    const isOpen = day === 0 ? false : day === 6 ? hour >= 10 && hour < 16 : hour >= 9 && hour < 18;
                    return isOpen 
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                      : 'bg-rose-100 text-rose-700 border border-rose-200';
                  })()
                }`}>
                  {(() => {
                    const now = new Date();
                    const day = now.getDay();
                    const hour = now.getHours();
                    const isOpen = day === 0 ? false : day === 6 ? hour >= 10 && hour < 16 : hour >= 9 && hour < 18;
                    return isOpen ? '🟢 Açık' : '🔴 Kapalı';
                  })()}
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00', status: 'open' },
                  { day: 'Cumartesi', hours: '10:00 - 16:00', status: 'open' },
                  { day: 'Pazar', hours: 'Kapalı', status: 'closed' }
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-lg">
                    <div className="font-medium text-slate-700">{schedule.day}</div>
                    <div className={`font-medium ${
                      schedule.status === 'open' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      {schedule.hours}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50/80 border border-blue-200/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Acil Durum Desteği</div>
                    <div className="text-sm text-blue-700">7/24 teknik destek hattımız</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white">Hızlı İletişim</h3>
              <p className="text-slate-300 mb-6">
                Acil durumlar için hızlı iletişim seçeneklerimiz
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+905412288366"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center transition-all duration-200 hover:scale-105"
                >
                  <div className="text-3xl mb-3">📞</div>
                  <div className="font-semibold text-lg text-white">Hemen Ara</div>
                  <div className="text-sm text-slate-300 mt-1">+90 541 228 83 66</div>
                </a>
                
                <a
                  href="https://wa.me/905412288366"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center transition-all duration-200 hover:scale-105"
                >
                  <div className="text-3xl mb-3">💬</div>
                  <div className="font-semibold text-lg text-white">WhatsApp</div>
                  <div className="text-sm text-slate-300 mt-1">Anında Mesaj</div>
                </a>
                
                <a
                  href="mailto:info@parslanmaz.com"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center transition-all duration-200 hover:scale-105 col-span-2"
                >
                  <div className="text-3xl mb-3">📧</div>
                  <div className="font-semibold text-lg text-white">E-posta</div>
                  <div className="text-sm text-slate-300 mt-1">Detaylı Bilgi</div>
                </a>
              </div>
            </div>
          </div>

          {/* Third Row - Map */}
          <div>
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
}