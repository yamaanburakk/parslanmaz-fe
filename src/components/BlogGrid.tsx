'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: "paslanmaz-celik-mutfak-ekipmanlarinda-bakim-ve-temizlik-rehberi",
      title: "Paslanmaz Çelik Mutfak Ekipmanlarında Bakım ve Temizlik Rehberi",
      excerpt: "Paslanmaz çelik ekipmanlarınızın ömrünü uzatmak ve hijyen standartlarını korumak için detaylı bakım ipuçları.",
      content: "Detaylı içerik...",
      author: "Ahmet Yılmaz",
      date: "2024-01-15",
      category: "Bakım & Temizlik",
      readTime: "8 dk",
      image: "/api/placeholder/400/250",
      tags: ["bakım", "temizlik", "paslanmaz çelik"],
      featured: true
    },
    {
      id: 2,
      slug: "endustriyel-mutfaklarda-enerji-tasarrufu-yontemleri",
      title: "Endüstriyel Mutfaklarda Enerji Tasarrufu Yöntemleri",
      excerpt: "Mutfak işletmenizde enerji maliyetlerini düşürmek için uygulayabileceğiniz pratik çözümler.",
      content: "Detaylı içerik...",
      author: "Mehmet Kaya",
      date: "2024-01-12",
      category: "Enerji Tasarrufu",
      readTime: "6 dk",
      image: "/api/placeholder/400/250",
      tags: ["enerji", "tasarruf", "maliyet"],
      featured: false
    },
    {
      id: 3,
      slug: "restoran-mutfaginda-hijyen-standartlari-ve-kontrol-listesi",
      title: "Restoran Mutfağında Hijyen Standartları ve Kontrol Listesi",
      excerpt: "HACCP standartlarına uygun mutfak hijyeni için günlük, haftalık ve aylık kontrol listeleri.",
      content: "Detaylı içerik...",
      author: "Fatma Demir",
      date: "2024-01-10",
      category: "Hijyen",
      readTime: "10 dk",
      image: "/api/placeholder/400/250",
      tags: ["hijyen", "HACCP", "kontrol"],
      featured: true
    },
    {
      id: 4,
      slug: "mutfak-ekipmani-seciminde-dikkat-edilmesi-gerekenler",
      title: "Mutfak Ekipmanı Seçiminde Dikkat Edilmesi Gerekenler",
      excerpt: "İşletmeniz için doğru mutfak ekipmanını seçerken göz önünde bulundurmanız gereken faktörler.",
      content: "Detaylı içerik...",
      author: "Ali Özkan",
      date: "2024-01-08",
      category: "Ekipman Seçimi",
      readTime: "7 dk",
      image: "/api/placeholder/400/250",
      tags: ["ekipman", "seçim", "rehber"],
      featured: false
    },
    {
      id: 5,
      slug: "catering-isletmelerinde-menu-planlama-stratejileri",
      title: "Catering İşletmelerinde Menü Planlama Stratejileri",
      excerpt: "Başarılı catering hizmeti için menü planlama, maliyet hesaplama ve müşteri memnuniyeti ipuçları.",
      content: "Detaylı içerik...",
      author: "Zeynep Aydın",
      date: "2024-01-05",
      category: "Catering",
      readTime: "9 dk",
      image: "/api/placeholder/400/250",
      tags: ["catering", "menü", "planlama"],
      featured: false
    },
    {
      id: 6,
      slug: "mutfak-atik-yonetimi-ve-surdurulebilirlik",
      title: "Mutfak Atık Yönetimi ve Sürdürülebilirlik",
      excerpt: "Çevre dostu mutfak işletmeciliği için atık azaltma ve geri dönüşüm stratejileri.",
      content: "Detaylı içerik...",
      author: "Can Yıldız",
      date: "2024-01-03",
      category: "Sürdürülebilirlik",
      readTime: "8 dk",
      image: "/api/placeholder/400/250",
      tags: ["atık yönetimi", "sürdürülebilirlik", "çevre"],
      featured: false
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="space-y-8">
      {/* Featured Posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Öne Çıkan Yazılar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-6xl text-primary-400">📝</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} okuma</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Devamını Oku
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tüm Yazılar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-4xl text-primary-400">📄</div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-accent-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{post.author}</span>
                  <span className="mx-1">•</span>
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                >
                  Devamını Oku
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentPage === page
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;