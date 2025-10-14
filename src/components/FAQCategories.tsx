'use client';

import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  count: number;
  color: string;
  icon: string;
  description: string;
}

const FAQCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: Category[] = [
    { 
      id: 'all', 
      name: 'Tümü', 
      count: 100, 
      color: 'bg-gradient-to-br from-[#1F2937] to-[#111827]', 
      icon: '📋',
      description: 'Tüm sorular'
    },
    { 
      id: 'bakim-temizlik', 
      name: 'Bakım & Temizlik', 
      count: 25, 
      color: 'bg-gradient-to-br from-[#374151] to-[#1F2937]', 
      icon: '🧽',
      description: 'Ekipman bakım ve temizlik soruları'
    },
    { 
      id: 'enerji-tasarrufu', 
      name: 'Enerji Tasarrufu', 
      count: 15, 
      color: 'bg-gradient-to-br from-[#4B5563] to-[#374151]', 
      icon: '⚡',
      description: 'Enerji verimliliği ve tasarruf'
    },
    { 
      id: 'hijyen', 
      name: 'Hijyen', 
      count: 20, 
      color: 'bg-gradient-to-br from-[#6B7280] to-[#4B5563]', 
      icon: '🧼',
      description: 'Hijyen standartları ve uygulamaları'
    },
    { 
      id: 'ekipman-secimi', 
      name: 'Ekipman Seçimi', 
      count: 18, 
      color: 'bg-gradient-to-br from-[#9CA3AF] to-[#6B7280]', 
      icon: '🛠️',
      description: 'Doğru ekipman seçimi rehberi'
    },
    { 
      id: 'garanti-servis', 
      name: 'Garanti & Servis', 
      count: 12, 
      color: 'bg-gradient-to-br from-[#D1D5DB] to-[#9CA3AF]', 
      icon: '🛡️',
      description: 'Garanti ve servis hizmetleri'
    },
    { 
      id: 'kurulum', 
      name: 'Kurulum', 
      count: 10, 
      color: 'bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]', 
      icon: '🔧',
      description: 'Kurulum ve montaj işlemleri'
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Filter functionality will be implemented here
    console.log('Selected category:', categoryId);
  };

  return (
    <div className="relative">
      {/* Professional Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 border border-[#60A5FA]/30">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-2 md:mr-3 animate-pulse"></div>
          <span className="text-white font-semibold text-xs md:text-sm tracking-wider uppercase">Kategori Filtreleri</span>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-2 md:ml-3 animate-pulse"></div>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
            Uzman
          </span>
          <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
            Kategoriler
          </span>
        </h3>
        <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Sorularınızı kategorilere göre filtreleyerek 
          <span className="text-[#60A5FA] font-bold"> daha hızlı</span> ve 
          <span className="text-[#60A5FA] font-bold"> kolay</span> çözüm bulun.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`px-4 md:px-6 py-3 md:py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-[#374151] to-[#1F2937] text-white shadow-xl border border-[#4B5563]'
                : 'bg-white/5 backdrop-blur-sm text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span className="mr-2 md:mr-3 text-lg md:text-xl">{category.icon}</span>
            {category.name}
            <span className={`ml-2 md:ml-3 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/60'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.slice(1).map((category) => (
          <div
            key={category.id}
            className={`group relative overflow-hidden ${category.color} rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            onClick={() => handleCategorySelect(category.id)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-1000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {category.id === 'bakim-temizlik' && (
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                  {category.id === 'enerji-tasarrufu' && (
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {category.id === 'hijyen' && (
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {category.id === 'ekipman-secimi' && (
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {category.id === 'garanti-servis' && (
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {category.id === 'kurulum' && (
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1">
                    {category.count}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 font-semibold">soru</div>
                </div>
              </div>
              
              <h4 className="font-black text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-4 group-hover:text-white/90 transition-colors duration-300">
                {category.name}
              </h4>
              
              <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-medium">
                {category.description}
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-white/40 via-white/60 to-white/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </div>
        ))}
      </div>

      {/* Professional Stats */}
      <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-[#374151]/30 to-[#1F2937]/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#4B5563]/30 group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2">25+</div>
              <div className="text-sm md:text-base text-white/80 font-semibold">Toplam Soru</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-[#4B5563]/30 to-[#374151]/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#6B7280]/30 group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2">95%</div>
              <div className="text-sm md:text-base text-white/80 font-semibold">Çözüm Oranı</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-[#6B7280]/30 to-[#4B5563]/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#9CA3AF]/30 group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-sm md:text-base text-white/80 font-semibold">Destek</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-[#9CA3AF]/30 to-[#6B7280]/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#D1D5DB]/30 group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2">1+</div>
              <div className="text-sm md:text-base text-white/80 font-semibold">Kategori</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQCategories;