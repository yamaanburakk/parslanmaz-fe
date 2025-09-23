'use client';

import { useState } from 'react';

const FAQHero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sıkça Sorulan
            <span className="block text-accent-400">Sorular</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            Endüstriyel mutfak ekipmanları hakkında merak ettiğiniz her şey
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Sorunuzu yazın... (örn: paslanmaz çelik bakım)"
                className="w-full px-6 py-4 pr-16 text-gray-900 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-accent-400/30 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-accent-500 hover:bg-accent-600 text-white px-6 rounded-full transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">100+</div>
              <div className="text-primary-200">Sıkça Sorulan Soru</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">15+</div>
              <div className="text-primary-200">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-primary-200">Uzman Desteği</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-accent-400/20 text-6xl animate-bounce">
        ❓
      </div>
      <div className="absolute top-32 right-20 text-accent-400/20 text-4xl animate-pulse">
        💡
      </div>
      <div className="absolute bottom-20 left-20 text-accent-400/20 text-5xl animate-bounce delay-1000">
        🔧
      </div>
      <div className="absolute bottom-32 right-10 text-accent-400/20 text-3xl animate-pulse delay-500">
        ⚡
      </div>
    </section>
  );
};

export default FAQHero;