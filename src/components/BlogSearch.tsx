'use client';

import { useState, useEffect } from 'react';

interface SearchSuggestion {
  id: string;
  title: string;
  category: string;
}

const BlogSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Sample search suggestions
  const allSuggestions: SearchSuggestion[] = [
    { id: '1', title: 'Paslanmaz çelik bakım', category: 'Bakım & Temizlik' },
    { id: '2', title: 'Enerji tasarrufu yöntemleri', category: 'Enerji Tasarrufu' },
    { id: '3', title: 'Mutfak hijyen standartları', category: 'Hijyen' },
    { id: '4', title: 'Ekipman seçim rehberi', category: 'Ekipman Seçimi' },
    { id: '5', title: 'Catering menü planlama', category: 'Catering' },
    { id: '6', title: 'Atık yönetimi stratejileri', category: 'Sürdürülebilirlik' },
    { id: '7', title: 'Mutfak teknolojileri', category: 'Teknoloji' },
    { id: '8', title: 'Restoran trendleri 2024', category: 'Sektör Trendleri' }
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('blogRecentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add to recent searches
      const newRecentSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(newRecentSearches);
      localStorage.setItem('blogRecentSearches', JSON.stringify(newRecentSearches));
      
      // Perform search
      console.log('Searching for:', searchQuery);
      setIsSearchFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.title);
    setIsSearchFocused(false);
    // Add to recent searches
    const newRecentSearches = [suggestion.title, ...recentSearches.filter(s => s !== suggestion.title)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('blogRecentSearches', JSON.stringify(newRecentSearches));
  };

  const handleRecentSearchClick = (search: string) => {
    setSearchQuery(search);
    setIsSearchFocused(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('blogRecentSearches');
  };

  return (
    <div className="relative mb-6">
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            placeholder="Blog yazılarında ara..."
            className="w-full px-6 py-4 pr-16 text-gray-900 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-primary-500 hover:bg-primary-600 text-white px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* Search Suggestions Dropdown */}
      {isSearchFocused && (searchSuggestions.length > 0 || recentSearches.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {/* Search Suggestions */}
          {searchSuggestions.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Öneriler</h4>
              <div className="space-y-2">
                {searchSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{suggestion.title}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {suggestion.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-700">Son Aramalar</h4>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Temizle
                </button>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearchClick(search)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-900">{search}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Searches */}
          <div className="p-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Popüler Aramalar</h4>
            <div className="flex flex-wrap gap-2">
              {['paslanmaz çelik', 'bakım rehberi', 'hijyen', 'enerji tasarrufu', 'ekipman seçimi'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="text-sm text-gray-600">Hızlı filtreler:</span>
        {['Son 7 gün', 'En popüler', 'En yeni', 'Uzun okuma'].map((filter) => (
          <button
            key={filter}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSearch;