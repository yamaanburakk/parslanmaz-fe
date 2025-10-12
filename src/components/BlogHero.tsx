'use client';

import { useState } from 'react';

const BlogHero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Endüstriyel Mutfak
            <span className="block bg-gradient-to-r from-[#66B2FF] via-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">Blog & Rehber</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#F8FAFC] mb-6 sm:mb-8 leading-relaxed">
            Mutfak ekipmanları, bakım ipuçları, sektör trendleri ve uzman tavsiyeleri
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Blog yazılarında ara..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-16 text-[#131C3C] rounded-full text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-[#66B2FF]/30 shadow-lg border border-[#66B2FF]/20"
              />
              <button
                type="submit"
                className="absolute right-1 sm:right-2 top-1 sm:top-2 bottom-1 sm:bottom-2 bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] hover:from-[#4E9EFF] hover:to-[#66B2FF] text-white px-4 sm:px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#66B2FF] mb-2">50+</div>
              <div className="text-[#F1F5F9] text-sm sm:text-base">Uzman Makale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-2">15+</div>
              <div className="text-[#F1F5F9] text-sm sm:text-base">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">1000+</div>
              <div className="text-[#F1F5F9] text-sm sm:text-base">Okuyucu</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#66B2FF]/10 to-[#FF6B35]/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#66B2FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-2xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#66B2FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default BlogHero;