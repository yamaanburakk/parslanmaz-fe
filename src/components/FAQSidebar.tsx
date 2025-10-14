'use client';

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


  return (
    <div className="space-y-8">
      {/* Contact Support */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl border border-[#334155]/20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/20"></div>
          <div className="absolute top-4 right-4 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#8B5CF6]/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 p-6 md:p-8 text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-2xl md:rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30 shadow-xl mx-auto mb-4 md:mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4">
            Uzman Desteği
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            Sorularınızın cevabını bulamadınız mı? Uzman ekibimiz size yardımcı olmaya hazır.
          </p>
          
          <button className="bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] hover:from-[#4E9EFF] hover:to-[#8B5CF6] text-white px-6 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Destek Al
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"></div>
      </div>

      {/* Popular Questions */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl border border-[#334155]/20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#10B981]/20 via-transparent to-[#059669]/20"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#10B981]/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#10B981]/30 shadow-lg mr-4">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black text-white">Popüler Sorular</h3>
              <p className="text-white/70 text-sm md:text-base">En çok aranan sorular</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {popularQuestions.map((question) => (
              <div key={question.id} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <h4 className="text-white font-bold text-sm md:text-base mb-2 group-hover:text-[#10B981] transition-colors duration-300 leading-tight">
                    {question.question}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs md:text-sm font-semibold">
                      {question.category}
                    </span>
                    <span className="text-white/60 text-xs md:text-sm font-semibold">
                      {question.views} görüntüleme
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857]"></div>
      </div>


      {/* Statistics */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl border border-[#334155]/20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F59E0B]/20 via-transparent to-[#D97706]/20"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#F59E0B]/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#F59E0B]/30 shadow-lg mr-4">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black text-white">İstatistikler</h3>
              <p className="text-white/70 text-sm md:text-base">Başarı rakamlarımız</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm md:text-base font-semibold">Çözüm Oranı</span>
                <span className="text-2xl md:text-3xl font-black text-[#F59E0B]">98%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] h-2 rounded-full" style={{width: '98%'}}></div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm md:text-base font-semibold">Müşteri Memnuniyeti</span>
                <span className="text-2xl md:text-3xl font-black text-[#10B981]">4.9/5</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#10B981] to-[#059669] h-2 rounded-full" style={{width: '98%'}}></div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm md:text-base font-semibold">Ortalama Yanıt Süresi</span>
                <span className="text-2xl md:text-3xl font-black text-[#3B82F6]">2h</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309]"></div>
      </div>
    </div>
  );
};

export default FAQSidebar;