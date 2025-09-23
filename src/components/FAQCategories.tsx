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
      color: 'bg-gray-500', 
      icon: '📋',
      description: 'Tüm sorular'
    },
    { 
      id: 'bakim-temizlik', 
      name: 'Bakım & Temizlik', 
      count: 25, 
      color: 'bg-blue-500', 
      icon: '🧽',
      description: 'Ekipman bakım ve temizlik soruları'
    },
    { 
      id: 'enerji-tasarrufu', 
      name: 'Enerji Tasarrufu', 
      count: 15, 
      color: 'bg-green-500', 
      icon: '⚡',
      description: 'Enerji verimliliği ve tasarruf'
    },
    { 
      id: 'hijyen', 
      name: 'Hijyen', 
      count: 20, 
      color: 'bg-red-500', 
      icon: '🧼',
      description: 'Hijyen standartları ve uygulamaları'
    },
    { 
      id: 'ekipman-secimi', 
      name: 'Ekipman Seçimi', 
      count: 18, 
      color: 'bg-purple-500', 
      icon: '🛠️',
      description: 'Doğru ekipman seçimi rehberi'
    },
    { 
      id: 'garanti-servis', 
      name: 'Garanti & Servis', 
      count: 12, 
      color: 'bg-orange-500', 
      icon: '🛡️',
      description: 'Garanti ve servis hizmetleri'
    },
    { 
      id: 'kurulum', 
      name: 'Kurulum', 
      count: 10, 
      color: 'bg-teal-500', 
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
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Kategoriler</h3>
        <div className="text-sm text-gray-500">
          {categories.find(c => c.id === selectedCategory)?.count} soru
        </div>
      </div>
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.slice(1).map((category) => (
          <div
            key={category.id}
            className={`${category.color} rounded-xl p-6 text-white cursor-pointer hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-lg`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{category.icon}</div>
              <div className="text-right">
                <div className="text-2xl font-bold">{category.count}</div>
                <div className="text-xs opacity-90">soru</div>
              </div>
            </div>
            <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
            <p className="text-sm opacity-90 leading-relaxed">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">100+</div>
            <div className="text-sm text-gray-600">Toplam Soru</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Çözüm Oranı</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Destek</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-600">Kategori</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQCategories;