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
    <div className="space-y-6 md:space-y-8 lg:space-y-10">
      {/* Newsletter Subscription */}
      <div className="group relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl hover:shadow-[#1E3A8A]/50 transition-all duration-700 hover:scale-105 border border-[#1E40AF]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#2563EB]/20"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="w-16 md:w-20 h-16 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
            <svg className="w-8 md:w-10 h-8 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-3 md:mb-4">Blog Bülteni</h3>
          <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6 font-medium">
            Yeni yazılarımızdan haberdar olun
          </p>
          <div className="flex items-center justify-center text-xs md:text-sm text-white/80 mb-4 md:mb-6">
            <span className="font-semibold">{newsletterStats.count.toLocaleString()} abone</span>
            <span className="mx-2 md:mx-3">•</span>
            <span className="text-[#60A5FA] font-semibold">{newsletterStats.growth} bu ay</span>
          </div>
          <div className="space-y-3 md:space-y-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-[#0F172A] text-sm md:text-base focus:outline-none focus:ring-4 focus:ring-[#60A5FA]/30 shadow-lg border border-white/20"
            />
            <button className="w-full bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] hover:from-[#9CA3AF] hover:to-[#60A5FA] text-white py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Abone Ol
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1E40AF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      </div>

      {/* Popular Posts */}
      <div className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E2E8F0] hover:shadow-[#60A5FA]/20 transition-all duration-700">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-6 md:mb-8 flex items-center">
            <svg className="w-5 md:w-6 h-5 md:h-6 text-[#60A5FA] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Popüler Yazılar
          </h3>
          <div className="space-y-4 md:space-y-5">
            {popularPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group/link hover:bg-gradient-to-r hover:from-[#60A5FA]/5 hover:to-[#9CA3AF]/5 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 border border-transparent hover:border-[#60A5FA]/20"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-[#60A5FA] to-[#9CA3AF] text-white rounded-full flex items-center justify-center text-sm md:text-base font-black shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm md:text-base font-bold text-[#0F172A] group-hover/link:text-[#60A5FA] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs md:text-sm text-[#0F172A]/80">
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-1 md:mx-2">•</span>
                      <span>{post.readTime}</span>
                      <span className="mx-1 md:mx-2">•</span>
                      <span className="font-medium">{formatViews(post.views)} görüntüleme</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E2E8F0] hover:shadow-[#60A5FA]/20 transition-all duration-700">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-6 md:mb-8 flex items-center">
            <svg className="w-5 md:w-6 h-5 md:h-6 text-[#60A5FA] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Kategoriler
          </h3>
          <div className="space-y-3 md:space-y-4">
            {[
              { name: 'Bakım & Temizlik', count: 12, color: 'from-[#60A5FA] to-[#3B82F6]' },
              { name: 'Hijyen', count: 15, color: 'from-[#EF4444] to-[#DC2626]' },
              { name: 'Enerji Tasarrufu', count: 8, color: 'from-[#10B981] to-[#059669]' },
              { name: 'Ekipman Seçimi', count: 10, color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { name: 'Catering', count: 6, color: 'from-[#F59E0B] to-[#D97706]' },
              { name: 'Sürdürülebilirlik', count: 7, color: 'from-[#14B8A6] to-[#0D9488]' }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-gradient-to-r hover:from-[#60A5FA]/5 hover:to-[#9CA3AF]/5 transition-all duration-300 group/link border border-transparent hover:border-[#60A5FA]/20"
              >
                <div className="flex items-center">
                  <span className={`w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-r ${category.color} mr-3 md:mr-4 shadow-sm`}></span>
                  <span className="text-sm md:text-base font-medium text-[#0F172A] group-hover/link:text-[#60A5FA] transition-colors">
                    {category.name}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-[#0F172A]/80 bg-gradient-to-r from-[#60A5FA]/10 to-[#9CA3AF]/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold border border-[#60A5FA]/20">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E2E8F0] hover:shadow-[#60A5FA]/20 transition-all duration-700">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60A5FA]/20 via-transparent to-[#9CA3AF]/20"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#60A5FA]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0F172A] mb-6 md:mb-8 flex items-center">
            <svg className="w-5 md:w-6 h-5 md:h-6 text-[#60A5FA] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Etiketler
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              'paslanmaz çelik', 'bakım', 'hijyen', 'enerji tasarrufu', 'ekipman', 
              'catering', 'restoran', 'mutfak', 'temizlik', 'HACCP', 'teknoloji', 
              'sürdürülebilirlik', 'trendler', 'rehber', 'ipuçları'
            ].map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="bg-gradient-to-r from-[#60A5FA]/10 to-[#9CA3AF]/10 hover:from-[#60A5FA] hover:to-[#9CA3AF] text-[#0F172A]/80 hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border border-[#60A5FA]/20 hover:border-transparent shadow-sm hover:shadow-lg"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;