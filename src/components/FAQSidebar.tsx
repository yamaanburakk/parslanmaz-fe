'use client';

const FAQSidebar = () => {
  const popularQuestions = [
    {
      id: 1,
      question: "Paslanmaz çelik ekipmanlar nasıl temizlenir?",
      category: "Bakım & Temizlik",
      views: 1250,
      faqId: 1 // Corresponding FAQ item ID
    },
    {
      id: 2,
      question: "Enerji tasarrufu için ne yapabilirim?",
      category: "Enerji Tasarrufu",
      views: 980,
      faqId: 2 // Corresponding FAQ item ID
    },
    {
      id: 3,
      question: "Hijyen standartları nelerdir?",
      category: "Hijyen",
      views: 1150,
      faqId: 3 // Corresponding FAQ item ID
    },
    {
      id: 4,
      question: "Hangi ekipmanı seçmeliyim?",
      category: "Ekipman Seçimi",
      views: 850,
      faqId: 4 // Corresponding FAQ item ID
    }
  ];

  const handleQuestionClick = (faqId: number) => {
    // Scroll to the FAQ item
    const faqElement = document.getElementById(`faq-item-${faqId}`);
    if (faqElement) {
      faqElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Open the FAQ item
      setTimeout(() => {
        const faqButton = faqElement.querySelector('button');
        if (faqButton) {
          faqButton.click();
        }
      }, 500);
    }
  };


  return (
    <div className="space-y-8">

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
                <div 
                  onClick={() => handleQuestionClick(question.faqId)}
                  className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 hover:bg-white/10 hover:border-[#10B981]/30 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#10B981]/20"
                >
                  <h4 className="text-white font-bold text-sm md:text-base mb-2 group-hover:text-[#10B981] transition-colors duration-300 leading-tight">
                    {question.question}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs md:text-sm font-semibold group-hover:text-[#10B981]/80 transition-colors duration-300">
                      {question.category}
                    </span>
                    <span className="text-white/60 text-xs md:text-sm font-semibold group-hover:text-[#10B981]/80 transition-colors duration-300">
                      {question.views} görüntüleme
                    </span>
                  </div>
                  
                  {/* Click indicator */}
                  <div className="mt-2 flex items-center text-[#10B981] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Tıklayarak görüntüle
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