'use client';

import Link from 'next/link';

interface PopularPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  views: number;
}

interface NewsletterSubscriber {
  count: number;
  growth: string;
}

const BlogSidebar = () => {
  const popularPosts: PopularPost[] = [
    {
      id: 1,
      slug: "paslanmaz-celik-mutfak-ekipmanlarinda-bakim-ve-temizlik-rehberi",
      title: "Paslanmaz Çelik Mutfak Ekipmanlarında Bakım ve Temizlik Rehberi",
      date: "2024-01-15",
      readTime: "8 dk",
      views: 1250
    },
    {
      id: 2,
      slug: "endustriyel-mutfaklarda-enerji-tasarrufu-yontemleri",
      title: "Endüstriyel Mutfaklarda Enerji Tasarrufu Yöntemleri",
      date: "2024-01-12",
      readTime: "6 dk",
      views: 980
    },
    {
      id: 3,
      slug: "restoran-mutfaginda-hijyen-standartlari-ve-kontrol-listesi",
      title: "Restoran Mutfağında Hijyen Standartları ve Kontrol Listesi",
      date: "2024-01-10",
      readTime: "10 dk",
      views: 1150
    },
    {
      id: 4,
      slug: "mutfak-ekipmani-seciminde-dikkat-edilmesi-gerekenler",
      title: "Mutfak Ekipmanı Seçiminde Dikkat Edilmesi Gerekenler",
      date: "2024-01-08",
      readTime: "7 dk",
      views: 850
    }
  ];

  const newsletterStats: NewsletterSubscriber = {
    count: 2500,
    growth: "+15%"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="space-y-8">
      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Blog Bülteni</h3>
          <p className="text-primary-100 text-sm mb-4">
            Yeni yazılarımızdan haberdar olun
          </p>
          <div className="flex items-center justify-center text-xs text-primary-200 mb-4">
            <span>{newsletterStats.count.toLocaleString()} abone</span>
            <span className="mx-2">•</span>
            <span className="text-green-300">{newsletterStats.growth} bu ay</span>
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Popüler Yazılar
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group hover:bg-gray-50 p-3 rounded-lg transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-1">•</span>
                    <span>{post.readTime}</span>
                    <span className="mx-1">•</span>
                    <span>{formatViews(post.views)} görüntüleme</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Kategoriler
        </h3>
        <div className="space-y-2">
          {[
            { name: 'Bakım & Temizlik', count: 12, color: 'bg-blue-100 text-blue-700' },
            { name: 'Hijyen', count: 15, color: 'bg-red-100 text-red-700' },
            { name: 'Enerji Tasarrufu', count: 8, color: 'bg-green-100 text-green-700' },
            { name: 'Ekipman Seçimi', count: 10, color: 'bg-purple-100 text-purple-700' },
            { name: 'Catering', count: 6, color: 'bg-orange-100 text-orange-700' },
            { name: 'Sürdürülebilirlik', count: 7, color: 'bg-teal-100 text-teal-700' }
          ].map((category) => (
            <Link
              key={category.name}
              href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full ${category.color} mr-3`}></span>
                <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Etiketler
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'paslanmaz çelik', 'bakım', 'hijyen', 'enerji tasarrufu', 'ekipman', 
            'catering', 'restoran', 'mutfak', 'temizlik', 'HACCP', 'teknoloji', 
            'sürdürülebilirlik', 'trendler', 'rehber', 'ipuçları'
          ].map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
          </svg>
          Sosyal Medya
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Bizi takip edin ve güncel içeriklerden haberdar olun
        </p>
        <div className="flex space-x-3">
          {[
            { name: 'Facebook', icon: '📘', color: 'bg-blue-500' },
            { name: 'Instagram', icon: '📷', color: 'bg-pink-500' },
            { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
            { name: 'YouTube', icon: '📺', color: 'bg-red-500' }
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className={`${social.color} text-white w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity`}
              title={social.name}
            >
              <span className="text-lg">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white text-center">
        <h3 className="text-lg font-bold mb-2">Uzman Desteği</h3>
        <p className="text-accent-100 text-sm mb-4">
          Mutfak ekipmanları hakkında sorularınız mı var?
        </p>
        <button className="bg-white text-accent-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Uzmanla İletişime Geç
        </button>
      </div>
    </div>
  );
};

export default BlogSidebar;