import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Contact Hero Section */}
      <ContactHero />
      
      {/* Professional Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#374151]/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#374151]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16 md:space-y-20">
              {/* Professional Header */}
              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 border border-[#60A5FA]/30">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-2 md:mr-3 animate-pulse"></div>
                  <span className="text-white font-semibold text-xs md:text-sm tracking-wider uppercase">İletişim Merkezi</span>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-2 md:ml-3 animate-pulse"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
                    Uzman
                  </span>
                  <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
                    İletişim Sistemi
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                  Endüstriyel mutfak ekipmanları konusunda 
                  <span className="text-[#60A5FA] font-bold"> 7/24 uzman desteğimiz</span> ve 
                  <span className="text-[#60A5FA] font-bold"> profesyonel çözümlerimiz</span> ile hizmetinizdeyiz.
                </p>
              </div>

              {/* Contact Form */}
              <div className="max-w-4xl mx-auto">
                <ContactForm />
              </div>

              {/* Working Hours */}
              <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl border border-[#334155]/20">
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/20"></div>
                    <div className="absolute top-4 right-4 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#8B5CF6]/10 rounded-full blur-xl"></div>
                  </div>
                  
                  <div className="relative z-10 p-6 md:p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-6 md:mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30 shadow-lg">
                          <svg className="w-6 h-6 md:w-7 md:h-7 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-white">Çalışma Saatleri</h3>
                          <p className="text-white/70 text-sm md:text-base">Profesyonel hizmet saatlerimiz</p>
                        </div>
                      </div>
                      <div className={`px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-base font-bold ${
                        (() => {
                          const now = new Date();
                          const day = now.getDay();
                          const hour = now.getHours();
                          const isOpen = day === 0 ? false : day === 6 ? hour >= 10 && hour < 16 : hour >= 9 && hour < 18;
                          return isOpen 
                            ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-lg' 
                            : 'bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white shadow-lg';
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
                    
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00', status: 'open' },
                        { day: 'Cumartesi', hours: '10:00 - 16:00', status: 'open' },
                        { day: 'Pazar', hours: 'Kapalı', status: 'closed' }
                      ].map((schedule, index) => (
                        <div key={index} className="flex items-center justify-between p-4 md:p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300">
                          <div className="font-bold text-white text-base md:text-lg">{schedule.day}</div>
                          <div className={`font-bold text-base md:text-lg ${
                            schedule.status === 'open' ? 'text-[#10B981]' : 'text-[#EF4444]'
                          }`}>
                            {schedule.hours}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm border border-[#60A5FA]/30 rounded-xl md:rounded-2xl">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#60A5FA] to-[#9CA3AF] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-white text-base md:text-lg">Acil Durum Desteği</div>
                          <div className="text-white/80 text-sm md:text-base">7/24 teknik destek hattımız</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"></div>
                </div>
              </div>

              {/* Map */}
              <div className="max-w-4xl mx-auto">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-r from-[#0F172A]/3 via-[#059669]/3 to-[#7C3AED]/3 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -z-10 top-0 right-0 w-48 md:w-80 lg:w-96 h-48 md:h-80 lg:h-96 bg-gradient-to-br from-[#3B82F6]/8 to-[#8B5CF6]/8 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-64 md:w-96 lg:w-[800px] h-64 md:h-96 lg:h-[800px] bg-gradient-to-tr from-[#10B981]/6 to-[#EF4444]/6 rounded-full blur-2xl md:blur-3xl"></div>
      </section>
    </div>
  );
}