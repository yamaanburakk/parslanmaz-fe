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
    <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Endüstriyel Mutfak
            <span className="block text-accent-400">Blog & Rehber</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-6 sm:mb-8 leading-relaxed">
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
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-16 text-gray-900 rounded-full text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-accent-400/30 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-1 sm:right-2 top-1 sm:top-2 bottom-1 sm:bottom-2 bg-accent-500 hover:bg-accent-600 text-white px-4 sm:px-6 rounded-full transition-colors flex items-center justify-center"
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
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-primary-200 text-sm sm:text-base">Uzman Makale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">15+</div>
              <div className="text-primary-200 text-sm sm:text-base">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-2">1000+</div>
              <div className="text-primary-200 text-sm sm:text-base">Okuyucu</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default BlogHero;