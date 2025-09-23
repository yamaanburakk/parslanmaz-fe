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
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
      
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.slice(1).map((category) => (
          <div
            key={category.id}
            className={`${category.color} rounded-lg p-4 text-white cursor-pointer hover:opacity-90 transition-opacity`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm">{category.name}</h4>
                <p className="text-xs opacity-90">{category.count} yazı</p>
              </div>
              <div className="text-2xl opacity-70">
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
          </div>
        ))}
      </div>

      {/* Popular Tags */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Popüler Etiketler</h4>
        <div className="flex flex-wrap gap-2">
          {['paslanmaz çelik', 'bakım', 'hijyen', 'enerji tasarrufu', 'ekipman', 'catering', 'restoran', 'mutfak'].map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;