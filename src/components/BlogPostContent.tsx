'use client';

import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  category: string;
  tags: string[];
}

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  // const [showFullContent, setShowFullContent] = useState(false);
  // const [activeSection, setActiveSection] = useState('');

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('tr-TR', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric'
  //   });
  // };

  const sections = [
    { id: 'giris', title: 'Giriş', icon: '🎯' },
    { id: 'gunluk-temizlik', title: 'Günlük Temizlik Rutini', icon: '🧽' },
    { id: 'haftalik-bakim', title: 'Haftalık Bakım', icon: '🔧' },
    { id: 'kacinilmasi-gerekenler', title: 'Kaçınılması Gerekenler', icon: '⚠️' },
    { id: 'profesyonel-bakim', title: 'Profesyonel Bakım', icon: '👨‍🔧' },
    { id: 'sonuc', title: 'Sonuç', icon: '✅' }
  ];

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Featured Image with Overlay */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-8xl mb-4">🔧</div>
            <div className="text-sm font-medium opacity-90">Endüstriyel Mutfak Uzmanlığı</div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="text-white text-sm font-medium">Uzman Rehberi</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Table of Contents - Enhanced */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">İçindekiler</h3>
          </div>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
              >
                <span className="text-lg mr-3">{section.icon}</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {index + 1}. {section.title}
                  </div>
                </div>
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content with Enhanced Styling */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold">
          {/* Introduction Section */}
          <section id="giris" className="mb-12">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 mb-6 border-l-4 border-primary-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Giriş
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Paslanmaz çelik mutfak ekipmanları, dayanıklılığı ve hijyenik özellikleri nedeniyle endüstriyel mutfaklarda yaygın olarak kullanılmaktadır. Ancak bu ekipmanların uzun ömürlü olması ve optimal performans göstermesi için düzenli bakım ve doğru temizlik yöntemleri uygulanmalıdır.
              </p>
            </div>
          </section>

          {/* Daily Cleaning Section */}
          <section id="gunluk-temizlik" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🧽</span>
              Günlük Temizlik Rutini
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Her kullanım sonrası ekipmanlarınızı temizlemek, kalıcı lekelerin oluşmasını önler ve hijyen standartlarını korur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <span className="text-lg mr-2">1️⃣</span>
                  Ön Temizlik
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ekipmanı kullanımdan hemen sonra soğuk su ile durulayın
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Yapışkan kalıntıları yumuşak bir fırça ile temizleyin
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Asitli ve tuzlu maddeleri uzun süre ekipman üzerinde bırakmayın
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <span className="text-lg mr-2">2️⃣</span>
                  Detaylı Temizlik
                </h3>
                <p className="text-green-800 leading-relaxed">
                  Günlük kullanım sonrası, ekipmanlarınızı özel paslanmaz çelik temizleyicileri ile temizleyin. Bu ürünler, ekipmanın doğal parlaklığını korurken etkili temizlik sağlar.
                </p>
              </div>
            </div>
          </section>

          {/* Weekly Maintenance Section */}
          <section id="haftalik-bakim" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🔧</span>
              Haftalık Bakım
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Haftalık bakım rutini, ekipmanlarınızın uzun vadeli performansını garanti eder.
            </p>
            
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                <span className="text-lg mr-2">🔍</span>
                Derinlemesine Temizlik
              </h3>
              <ul className="space-y-3 text-purple-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ekipmanı tamamen sökmek mümkünse, tüm parçaları ayrı ayrı temizleyin
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Özel paslanmaz çelik cilası kullanarak yüzeyi parlatın
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bağlantı noktalarını kontrol edin ve gerekirse yağlayın
                </li>
              </ul>
            </div>
          </section>

          {/* What to Avoid Section */}
          <section id="kacinilmasi-gerekenler" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">⚠️</span>
              Kaçınılması Gerekenler
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Paslanmaz çelik ekipmanlarınızın zarar görmemesi için aşağıdaki maddelerden kaçının:
            </p>
            
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Klor içeren temizleyiciler', desc: 'Paslanmaz çeliği aşındırır' },
                  { title: 'Çelik yünü veya sert fırçalar', desc: 'Yüzeyde çizik oluşturur' },
                  { title: 'Yüksek sıcaklıkta ani soğutma', desc: 'Metal yapısını bozar' },
                  { title: 'Asitli temizleyiciler', desc: 'Korozyona neden olur' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-white rounded-lg">
                    <span className="text-red-500 mr-3 mt-1">❌</span>
                    <div>
                      <div className="font-semibold text-red-900">{item.title}</div>
                      <div className="text-sm text-red-700">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Maintenance Section */}
          <section id="profesyonel-bakim" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">👨‍🔧</span>
              Profesyonel Bakım
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Yılda en az bir kez, ekipmanlarınızın profesyonel bakımını yaptırın. Bu bakım sırasında:
            </p>
            
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <ul className="space-y-3 text-indigo-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ekipmanın genel durumu değerlendirilir
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gerekli parça değişimleri yapılır
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Performans optimizasyonu sağlanır
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Garanti kapsamındaki sorunlar giderilir
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="sonuc" className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                Sonuç
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Düzenli bakım ve doğru temizlik yöntemleri, paslanmaz çelik ekipmanlarınızın ömrünü uzatır ve performansını optimize eder. Bu sayede hem maliyet tasarrufu sağlar hem de hijyen standartlarınızı korursunuz.
              </p>
            </div>
          </section>
        </div>

        {/* Author Bio - Enhanced */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {post.author.name}
                  </h4>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                    Uzman Yazar
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.author.bio}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Tüm Yazıları Gör
                  </button>
                  <button className="border border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-lg font-medium transition-colors">
                    Takip Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags - Enhanced */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Etiketler
          </h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-300 text-primary-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer hover:shadow-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Share - Enhanced */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Bu Yazıyı Paylaş
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Facebook', icon: '📘', color: 'bg-blue-500 hover:bg-blue-600' },
              { name: 'Twitter', icon: '🐦', color: 'bg-blue-400 hover:bg-blue-500' },
              { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700 hover:bg-blue-800' },
              { name: 'WhatsApp', icon: '💬', color: 'bg-green-500 hover:bg-green-600' },
              { name: 'Telegram', icon: '✈️', color: 'bg-blue-600 hover:bg-blue-700' },
              { name: 'E-posta', icon: '📧', color: 'bg-gray-600 hover:bg-gray-700' }
            ].map((social) => (
              <button
                key={social.name}
                className={`${social.color} text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                title={`${social.name}'da paylaş`}
              >
                <span className="text-lg">{social.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter CTA - Enhanced */}
        <div className="mt-8 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 rounded-xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-2">Blog Bültenimize Abone Olun</h4>
            <p className="text-primary-100 mb-6 max-w-md mx-auto">
              Yeni yazılarımızdan haberdar olun ve uzman tavsiyelerini kaçırmayın
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;