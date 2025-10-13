'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: string;
  helpful: number;
  notHelpful: number;
  tags: string[];
  lastUpdated: string;
}

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [helpfulVotes, setHelpfulVotes] = useState<{[key: number]: 'helpful' | 'not-helpful' | null}>({});

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Paslanmaz çelik mutfak ekipmanlarını nasıl temizlemeliyim?",
      answer: "Paslanmaz çelik ekipmanlarınızı temizlerken şu adımları izleyin:\n\n1. **Günlük Temizlik**: Kullanım sonrası soğuk su ile durulayın\n2. **Özel Temizleyiciler**: Paslanmaz çelik için özel temizleyiciler kullanın\n3. **Yumuşak Fırça**: Çelik yünü yerine yumuşak fırça tercih edin\n4. **Kurutma**: Temizlik sonrası iyice kurulayın\n\n**Kaçınılması Gerekenler**:\n- Klor içeren temizleyiciler\n- Çelik yünü veya sert fırçalar\n- Asitli temizleyiciler\n- Yüksek sıcaklıkta ani soğutma",
      category: "Bakım & Temizlik",
      icon: "🧽",
      helpful: 45,
      notHelpful: 2,
      tags: ["paslanmaz çelik", "temizlik", "bakım"],
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      question: "Enerji tasarrufu için hangi yöntemleri uygulayabilirim?",
      answer: "Endüstriyel mutfaklarda enerji tasarrufu için:\n\n**Ekipman Seçimi**:\n- A+ enerji sınıfı ekipmanları tercih edin\n- İhtiyacınıza uygun boyutlarda ekipman seçin\n\n**Günlük Uygulamalar**:\n- Fırınları önceden ısıtmayın\n- Büyük tencerelerde yemek pişirirken kapakları kapatın\n- Soğutma dolaplarının kapılarını gereksiz yere açık bırakmayın\n- Kullanılmayan ekipmanları kapatın\n\n**Bakım**:\n- Düzenli bakım yaptırın\n- Filtreleri temiz tutun\n- Ekipmanların verimli çalışmasını sağlayın",
      category: "Enerji Tasarrufu",
      icon: "⚡",
      helpful: 38,
      notHelpful: 1,
      tags: ["enerji", "tasarruf", "verimlilik"],
      lastUpdated: "2024-01-12"
    },
    {
      id: 3,
      question: "HACCP standartlarına uygun hijyen nasıl sağlanır?",
      answer: "HACCP standartlarına uygun hijyen için:\n\n**Günlük Kontroller**:\n- Çalışma yüzeylerinin temizliği\n- Ekipman sterilizasyonu\n- Personel hijyeni kontrolü\n- Gıda saklama koşulları\n\n**Haftalık Kontroller**:\n- Derinlemesine temizlik\n- Ekipman bakımı\n- Hijyen eğitimi\n\n**Aylık Kontroller**:\n- Genel hijyen denetimi\n- Ekipman kalibrasyonu\n- Personel sağlık kontrolleri\n\n**Kritik Kontrol Noktaları**:\n- Sıcaklık kontrolü\n- Zaman kontrolü\n- pH kontrolü\n- Temizlik ve sanitasyon",
      category: "Hijyen",
      icon: "🧼",
      helpful: 52,
      notHelpful: 0,
      tags: ["hijyen", "HACCP", "gıda güvenliği"],
      lastUpdated: "2024-01-10"
    },
    {
      id: 4,
      question: "İşletmem için hangi mutfak ekipmanını seçmeliyim?",
      answer: "Doğru ekipman seçimi için:\n\n**İşletme Analizi**:\n- Günlük yemek sayısı\n- Menü çeşitliliği\n- Çalışma saatleri\n- Bütçe\n\n**Ekipman Türleri**:\n- **Pişirme Ekipmanları**: Fırın, ocak, ızgara\n- **Soğutma Ekipmanları**: Buzdolabı, dondurucu\n- **Hazırlık Ekipmanları**: Doğrama, karıştırma\n- **Servis Ekipmanları**: Teşhir dolapları\n\n**Seçim Kriterleri**:\n- Enerji verimliliği\n- Dayanıklılık\n- Kolay temizlik\n- Garanti süresi\n- Servis ağı",
      category: "Ekipman Seçimi",
      icon: "🛠️",
      helpful: 41,
      notHelpful: 3,
      tags: ["ekipman", "seçim", "rehber"],
      lastUpdated: "2024-01-08"
    },
    {
      id: 5,
      question: "Garanti süresi ve servis hizmetleri nasıl çalışır?",
      answer: "Garanti ve servis hizmetlerimiz:\n\n**Garanti Süreleri**:\n- Paslanmaz çelik ekipmanlar: 2 yıl\n- Elektronik parçalar: 1 yıl\n- Aşınan parçalar: 6 ay\n\n**Garanti Kapsamı**:\n- Üretim hataları\n- Malzeme kusurları\n- Montaj hataları\n\n**Garanti Dışı**:\n- Normal aşınma\n- Yanlış kullanım\n- Doğal afetler\n- Yetkisiz müdahale\n\n**Servis Hizmetleri**:\n- 24/7 teknik destek\n- Hızlı servis\n- Yedek parça temini\n- Bakım hizmetleri",
      category: "Garanti & Servis",
      icon: "🛡️",
      helpful: 29,
      notHelpful: 1,
      tags: ["garanti", "servis", "destek"],
      lastUpdated: "2024-01-05"
    },
    {
      id: 6,
      question: "Ekipman kurulumu nasıl yapılır?",
      answer: "Ekipman kurulum süreci:\n\n**Ön Hazırlık**:\n- Kurulum alanının hazırlanması\n- Gerekli bağlantıların kontrolü\n- Ekipmanın teslim alınması\n\n**Kurulum Adımları**:\n1. Ekipmanın yerleştirilmesi\n2. Bağlantıların yapılması\n3. Test işlemleri\n4. Eğitim verilmesi\n\n**Gerekli Bağlantılar**:\n- Elektrik bağlantısı\n- Su bağlantısı\n- Gaz bağlantısı (gerekirse)\n- Havalandırma\n\n**Kurulum Sonrası**:\n- Test çalıştırması\n- Kullanım eğitimi\n- Bakım planı\n- Garanti belgesi",
      category: "Kurulum",
      icon: "🔧",
      helpful: 33,
      notHelpful: 2,
      tags: ["kurulum", "montaj", "eğitim"],
      lastUpdated: "2024-01-03"
    },
    {
      id: 7,
      question: "Fiyatlandırma nasıl yapılır?",
      answer: "Fiyatlandırma sürecimiz:\n\n**Fiyat Faktörleri**:\n- Ekipman türü ve modeli\n- Miktar\n- Özel özellikler\n- Kurulum gereksinimleri\n\n**Fiyatlandırma Süreci**:\n1. İhtiyaç analizi\n2. Teklif hazırlama\n3. Fiyat sunumu\n4. Müzakere\n5. Sözleşme\n\n**Ödeme Seçenekleri**:\n- Peşin ödeme indirimi\n- Taksitli ödeme\n- Leasing seçenekleri\n- Kredi kartı\n\n**Ek Hizmetler**:\n- Kurulum\n- Eğitim\n- Bakım paketleri\n- Garanti uzatma",
      category: "Fiyatlandırma",
      icon: "💰",
      helpful: 27,
      notHelpful: 4,
      tags: ["fiyat", "ödeme", "teklif"],
      lastUpdated: "2024-01-01"
    },
    {
      id: 8,
      question: "Teslimat süresi ne kadar?",
      answer: "Teslimat sürelerimiz:\n\n**Standart Teslimat**:\n- Stokta bulunan ürünler: 3-5 iş günü\n- Özel üretim: 15-30 iş günü\n- Kurulum dahil: +2-3 iş günü\n\n**Hızlı Teslimat**:\n- Acil durumlar: 24-48 saat\n- Ek ücret uygulanır\n\n**Teslimat Sürecini Etkileyen Faktörler**:\n- Ürün stok durumu\n- Üretim süreci\n- Lojistik koşulları\n- Kurulum gereksinimleri\n\n**Teslimat Öncesi**:\n- Sipariş onayı\n- Ödeme kontrolü\n- Teslimat planlaması\n- Müşteri bilgilendirmesi",
      category: "Teslimat",
      icon: "🚚",
      helpful: 35,
      notHelpful: 1,
      tags: ["teslimat", "süre", "lojistik"],
      lastUpdated: "2023-12-28"
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleHelpfulVote = (id: number, type: 'helpful' | 'not-helpful') => {
    setHelpfulVotes(prev => ({
      ...prev,
      [id]: prev[id] === type ? null : type
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {faqItems.map((item) => (
        <div key={item.id} className="group relative">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[#0F172A]/50 transition-all duration-700 hover:scale-[1.01] border border-[#334155]/20">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/20"></div>
              <div className="absolute top-4 md:top-8 right-4 md:right-8 w-24 md:w-48 h-24 md:h-48 bg-[#3B82F6]/10 rounded-full blur-2xl md:blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-16 md:w-32 h-16 md:h-32 bg-[#8B5CF6]/10 rounded-full blur-xl md:blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
            </div>
            
            <div className="relative z-10 p-6 md:p-8 lg:p-10">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left flex items-start justify-between group"
              >
                <div className="flex items-start space-x-4 md:space-x-6 flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30 shadow-xl md:shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl lg:text-4xl">{item.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white group-hover:text-[#60A5FA] transition-colors duration-500 mb-2 md:mb-3 leading-tight">
                      {item.question}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm md:text-base text-white/70">
                      <span className="bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#60A5FA]/30 font-semibold">
                        {item.category}
                      </span>
                      <span>Son güncelleme: {formatDate(item.lastUpdated)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 md:w-8 md:h-8 text-white/70 transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openItems.includes(item.id) && (
                <div className="mt-6 md:mt-8 pl-16 md:pl-20 lg:pl-24">
                  <div className="prose prose-gray max-w-none">
                    <div className="whitespace-pre-line text-white/90 leading-relaxed text-base md:text-lg lg:text-xl font-medium">
                      {item.answer}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-[#60A5FA]/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Helpful Feedback */}
                  <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base text-white/80 font-medium">Bu cevap yardımcı oldu mu?</span>
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <button
                          onClick={() => handleHelpfulVote(item.id, 'helpful')}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                            helpfulVotes[item.id] === 'helpful'
                              ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-lg'
                              : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#059669] hover:text-white hover:shadow-lg border border-white/20'
                          }`}
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>{item.helpful + (helpfulVotes[item.id] === 'helpful' ? 1 : 0)}</span>
                        </button>
                        <button
                          onClick={() => handleHelpfulVote(item.id, 'not-helpful')}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                            helpfulVotes[item.id] === 'not-helpful'
                              ? 'bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white shadow-lg'
                              : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-gradient-to-r hover:from-[#EF4444] hover:to-[#DC2626] hover:text-white hover:shadow-lg border border-white/20'
                          }`}
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 0115.263 3h4.017c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                          </svg>
                          <span>{item.notHelpful + (helpfulVotes[item.id] === 'not-helpful' ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </div>
        </div>
      ))}

      {/* Load More */}
      <div className="text-center pt-8 md:pt-12">
        <button className="bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] hover:from-[#4E9EFF] hover:to-[#8B5CF6] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
          Daha Fazla Soru Yükle
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;