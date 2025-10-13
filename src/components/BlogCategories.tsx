'use client';

import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  count: number;
  color: string;
}

const BlogCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'Tümü', count: 50, color: 'bg-gray-500' },
    { id: 'bakim-temizlik', name: 'Bakım & Temizlik', count: 12, color: 'bg-blue-500' },
    { id: 'enerji-tasarrufu', name: 'Enerji Tasarrufu', count: 8, color: 'bg-green-500' },
    { id: 'hijyen', name: 'Hijyen', count: 15, color: 'bg-red-500' },
    { id: 'ekipman-secimi', name: 'Ekipman Seçimi', count: 10, color: 'bg-purple-500' },
    { id: 'catering', name: 'Catering', count: 6, color: 'bg-orange-500' },
    { id: 'surdurulebilirlik', name: 'Sürdürülebilirlik', count: 7, color: 'bg-teal-500' },
    { id: 'teknoloji', name: 'Teknoloji', count: 5, color: 'bg-indigo-500' },
    { id: 'trendler', name: 'Sektör Trendleri', count: 9, color: 'bg-pink-500' }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Filter functionality will be implemented here
    console.log('Selected category:', categoryId);
  };

  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
      <div className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-[#E2E8F0]">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0F172A] mb-6 md:mb-8 lg:mb-10 flex items-center">
            <svg className="w-6 md:w-8 h-6 md:h-8 text-[#60A5FA] mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Kategoriler
          </h3>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`group/pill relative overflow-hidden px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] text-white shadow-lg'
                    : 'bg-gradient-to-r from-[#60A5FA]/10 to-[#9CA3AF]/10 text-[#0F172A] border border-[#60A5FA]/20 hover:border-[#60A5FA]/40 hover:shadow-lg'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/pill:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">{category.name}</span>
                <span className={`relative z-10 ml-2 md:ml-3 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 text-[#0F172A]'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categories.slice(1).map((category) => (
              <div
                key={category.id}
                className="group/card relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] rounded-xl md:rounded-2xl p-4 md:p-6 text-white cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-[#1E3A8A]/50 border border-[#1E40AF]/20"
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#2563EB]/20"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-[#60A5FA]/10 rounded-full blur-lg group-hover/card:scale-150 transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-sm md:text-base lg:text-lg">{category.name}</h4>
                      <p className="text-xs md:text-sm opacity-90 font-medium">{category.count} yazı</p>
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl opacity-80 group-hover/card:scale-110 transition-transform duration-300">
                      {category.id === 'bakim-temizlik' && '🔧'}
                      {category.id === 'enerji-tasarrufu' && '⚡'}
                      {category.id === 'hijyen' && '🧼'}
                      {category.id === 'ekipman-secimi' && '🛠️'}
                      {category.id === 'catering' && '🍽️'}
                      {category.id === 'surdurulebilirlik' && '🌱'}
                      {category.id === 'teknoloji' && '💻'}
                      {category.id === 'trendler' && '📈'}
                    </div>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1E40AF] transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Tags */}
          <div className="mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-[#E2E8F0]">
            <h4 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-4 md:mb-6 flex items-center">
              <svg className="w-5 md:w-6 h-5 md:h-6 text-[#60A5FA] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Popüler Etiketler
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['paslanmaz çelik', 'bakım', 'hijyen', 'enerji tasarrufu', 'ekipman', 'catering', 'restoran', 'mutfak'].map((tag) => (
                <span
                  key={tag}
                  className="group/tag bg-gradient-to-r from-[#60A5FA]/10 to-[#9CA3AF]/10 hover:from-[#60A5FA] hover:to-[#9CA3AF] text-[#0F172A]/80 hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium cursor-pointer transition-all duration-300 border border-[#60A5FA]/20 hover:border-transparent shadow-sm hover:shadow-lg transform hover:scale-105"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;