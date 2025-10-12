'use client';

import Link from 'next/link';

interface RelatedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
}

// interface RelatedPostsProps {
//   currentPostId: number; // Will be used when implementing actual related posts logic
// }

const RelatedPosts = () => {
  const relatedPosts: RelatedPost[] = [
    {
      id: 2,
      slug: "endustriyel-mutfaklarda-enerji-tasarrufu-yontemleri",
      title: "Endüstriyel Mutfaklarda Enerji Tasarrufu Yöntemleri",
      excerpt: "Mutfak işletmenizde enerji maliyetlerini düşürmek için uygulayabileceğiniz pratik çözümler ve teknolojiler.",
      category: "Enerji Tasarrufu",
      readTime: "6 dk",
      date: "2024-01-12",
      image: "/api/placeholder/300/200",
      tags: ["enerji", "tasarruf", "maliyet"]
    },
    {
      id: 3,
      slug: "restoran-mutfaginda-hijyen-standartlari-ve-kontrol-listesi",
      title: "Restoran Mutfağında Hijyen Standartları ve Kontrol Listesi",
      excerpt: "HACCP standartlarına uygun mutfak hijyeni için günlük, haftalık ve aylık kontrol listeleri ve uygulama rehberi.",
      category: "Hijyen",
      readTime: "10 dk",
      date: "2024-01-10",
      image: "/api/placeholder/300/200",
      tags: ["hijyen", "HACCP", "kontrol"]
    },
    {
      id: 4,
      slug: "mutfak-ekipmani-seciminde-dikkat-edilmesi-gerekenler",
      title: "Mutfak Ekipmanı Seçiminde Dikkat Edilmesi Gerekenler",
      excerpt: "İşletmeniz için doğru mutfak ekipmanını seçerken göz önünde bulundurmanız gereken faktörler ve uzman tavsiyeleri.",
      category: "Ekipman Seçimi",
      readTime: "7 dk",
      date: "2024-01-08",
      image: "/api/placeholder/300/200",
      tags: ["ekipman", "seçim", "rehber"]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="mt-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">İlgili Yazılar</h2>
          <p className="text-gray-600">
            Bu konuyla ilgili diğer uzman yazılarımızı keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-4xl text-primary-400">📄</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime} okuma</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-primary-600 group-hover:text-primary-700 font-medium text-sm transition-colors">
                      <span>Devamını Oku</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            <span>Tüm Blog Yazılarını Görüntüle</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;