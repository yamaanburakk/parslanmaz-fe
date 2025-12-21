'use client';

import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  views: number;
  likes: number;
}

interface BlogPostSidebarProps {
  post: BlogPost;
}

const BlogPostSidebar = ({ post }: BlogPostSidebarProps) => {
  const relatedPosts = [
    {
      id: 2,
      slug: "endustriyel-mutfaklarda-enerji-tasarrufu-yontemleri",
      title: "Endüstriyel Mutfaklarda Enerji Tasarrufu Yöntemleri",
      category: "Enerji Tasarrufu",
      readTime: "6 dk",
      date: "2024-01-12"
    },
    {
      id: 3,
      slug: "restoran-mutfaginda-hijyen-standartlari-ve-kontrol-listesi",
      title: "Restoran Mutfağında Hijyen Standartları",
      category: "Hijyen",
      readTime: "10 dk",
      date: "2024-01-10"
    },
    {
      id: 4,
      slug: "mutfak-ekipmani-seciminde-dikkat-edilmesi-gerekenler",
      title: "Mutfak Ekipmanı Seçiminde Dikkat Edilmesi Gerekenler",
      category: "Ekipman Seçimi",
      readTime: "7 dk",
      date: "2024-01-08"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Post Stats */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">İstatistikler</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Görüntüleme</span>
            <span className="font-semibold text-primary-600">{post.views}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Beğeni</span>
            <span className="font-semibold text-accent-500">{post.likes}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Okuma Süresi</span>
            <span className="font-semibold text-gray-900">{post.readTime}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Yayın Tarihi</span>
            <span className="font-semibold text-gray-900">
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
        <div className="space-y-4">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={`/blog/${relatedPost.slug}`}
              className="block group hover:bg-gray-50 p-3 rounded-lg transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">📄</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2">
                      {relatedPost.category}
                    </span>
                    <span>{formatDate(relatedPost.date)}</span>
                    <span className="mx-1">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">İçindekiler</h3>
        <nav className="space-y-2">
          {[
            'Giriş',
            'Günlük Temizlik Rutini',
            'Haftalık Bakım',
            'Kaçınılması Gerekenler',
            'Profesyonel Bakım',
            'Sonuç'
          ].map((item, index) => (
            <a
              key={index}
              href={`#section-${index + 1}`}
              className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1 border-l-2 border-transparent hover:border-primary-500 pl-3"
            >
              {index + 1}. {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
        <div className="space-y-2">
          {[
            { name: 'Bakım & Temizlik', count: 12, current: true },
            { name: 'Hijyen', count: 15, current: false },
            { name: 'Enerji Tasarrufu', count: 8, current: false },
            { name: 'Ekipman Seçimi', count: 10, current: false },
            { name: 'Catering', count: 6, current: false },
            { name: 'Sürdürülebilirlik', count: 7, current: false }
          ].map((category) => (
            <Link
              key={category.name}
              href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors group ${
                category.current ? 'bg-primary-50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-3 ${
                  category.current ? 'bg-primary-500' : 'bg-gray-300'
                }`}></span>
                <span className={`text-sm transition-colors ${
                  category.current 
                    ? 'text-primary-700 font-medium' 
                    : 'text-gray-700 group-hover:text-primary-600'
                }`}>
                  {category.name}
                </span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                category.current 
                  ? 'bg-primary-200 text-primary-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white text-center">
        <h3 className="text-lg font-bold mb-2">Uzman Desteği</h3>
        <p className="text-accent-100 text-sm mb-4">
          Bu konu hakkında daha fazla bilgi almak ister misiniz?
        </p>
        <Link 
          href="/iletisim"
          className="inline-block bg-white text-accent-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Uzmanla İletişime Geç
        </Link>
      </div>

    </div>
  );
};

export default BlogPostSidebar;