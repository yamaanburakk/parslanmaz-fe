import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/BlogPostContent';
import BlogPostSidebar from '@/components/BlogPostSidebar';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostHeader from '@/components/BlogPostHeader';
import ReadingProgress from '@/components/ReadingProgress';
import BlogComments from '@/components/BlogComments';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
  views: number;
  likes: number;
}

// Sample blog post data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "paslanmaz-celik-mutfak-ekipmanlarinda-bakim-ve-temizlik-rehberi",
    title: "Paslanmaz Çelik Mutfak Ekipmanlarında Bakım ve Temizlik Rehberi",
    excerpt: "Paslanmaz çelik ekipmanlarınızın ömrünü uzatmak ve hijyen standartlarını korumak için detaylı bakım ipuçları.",
    content: `
      <h2>Giriş</h2>
      <p>Paslanmaz çelik mutfak ekipmanları, dayanıklılığı ve hijyenik özellikleri nedeniyle endüstriyel mutfaklarda yaygın olarak kullanılmaktadır. Ancak bu ekipmanların uzun ömürlü olması ve optimal performans göstermesi için düzenli bakım ve doğru temizlik yöntemleri uygulanmalıdır.</p>
      
      <h2>Günlük Temizlik Rutini</h2>
      <p>Her kullanım sonrası ekipmanlarınızı temizlemek, kalıcı lekelerin oluşmasını önler ve hijyen standartlarını korur.</p>
      
      <h3>1. Ön Temizlik</h3>
      <ul>
        <li>Ekipmanı kullanımdan hemen sonra soğuk su ile durulayın</li>
        <li>Yapışkan kalıntıları yumuşak bir fırça ile temizleyin</li>
        <li>Asitli ve tuzlu maddeleri uzun süre ekipman üzerinde bırakmayın</li>
      </ul>
      
      <h3>2. Detaylı Temizlik</h3>
      <p>Günlük kullanım sonrası, ekipmanlarınızı özel paslanmaz çelik temizleyicileri ile temizleyin. Bu ürünler, ekipmanın doğal parlaklığını korurken etkili temizlik sağlar.</p>
      
      <h2>Haftalık Bakım</h2>
      <p>Haftalık bakım rutini, ekipmanlarınızın uzun vadeli performansını garanti eder.</p>
      
      <h3>Derinlemesine Temizlik</h3>
      <ul>
        <li>Ekipmanı tamamen sökmek mümkünse, tüm parçaları ayrı ayrı temizleyin</li>
        <li>Özel paslanmaz çelik cilası kullanarak yüzeyi parlatın</li>
        <li>Bağlantı noktalarını kontrol edin ve gerekirse yağlayın</li>
      </ul>
      
      <h2>Kaçınılması Gerekenler</h2>
      <p>Paslanmaz çelik ekipmanlarınızın zarar görmemesi için aşağıdaki maddelerden kaçının:</p>
      
      <ul>
        <li><strong>Klor içeren temizleyiciler:</strong> Paslanmaz çeliği aşındırır</li>
        <li><strong>Çelik yünü veya sert fırçalar:</strong> Yüzeyde çizik oluşturur</li>
        <li><strong>Yüksek sıcaklıkta ani soğutma:</strong> Metal yapısını bozar</li>
        <li><strong>Asitli temizleyiciler:</strong> Korozyona neden olur</li>
      </ul>
      
      <h2>Profesyonel Bakım</h2>
      <p>Yılda en az bir kez, ekipmanlarınızın profesyonel bakımını yaptırın. Bu bakım sırasında:</p>
      
      <ul>
        <li>Ekipmanın genel durumu değerlendirilir</li>
        <li>Gerekli parça değişimleri yapılır</li>
        <li>Performans optimizasyonu sağlanır</li>
        <li>Garanti kapsamındaki sorunlar giderilir</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Düzenli bakım ve doğru temizlik yöntemleri, paslanmaz çelik ekipmanlarınızın ömrünü uzatır ve performansını optimize eder. Bu sayede hem maliyet tasarrufu sağlar hem de hijyen standartlarınızı korursunuz.</p>
    `,
    author: {
      name: "Ahmet Yılmaz",
      avatar: "/api/placeholder/60/60",
      bio: "15 yıllık endüstriyel mutfak ekipmanları uzmanı. Paslanmaz çelik teknolojileri ve bakım yöntemleri konusunda uzman."
    },
    date: "2024-01-15",
    category: "Bakım & Temizlik",
    readTime: "8 dk",
    image: "/api/placeholder/800/400",
    tags: ["bakım", "temizlik", "paslanmaz çelik", "hijyen"],
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    slug: "endustriyel-mutfaklarda-enerji-tasarrufu-yontemleri",
    title: "Endüstriyel Mutfaklarda Enerji Tasarrufu Yöntemleri",
    excerpt: "Mutfak işletmenizde enerji maliyetlerini düşürmek için uygulayabileceğiniz pratik çözümler ve teknolojiler.",
    content: `
      <h2>Giriş</h2>
      <p>Enerji maliyetleri, endüstriyel mutfak işletmelerinin en büyük gider kalemlerinden biridir. Doğru enerji tasarrufu yöntemleri ile hem çevreye katkı sağlayabilir hem de işletme maliyetlerinizi önemli ölçüde azaltabilirsiniz.</p>
      
      <h2>Enerji Verimli Ekipman Seçimi</h2>
      <p>Yeni ekipman alırken enerji verimliliği etiketlerini kontrol edin ve A+ sınıfı ürünleri tercih edin.</p>
      
      <h2>Günlük Enerji Tasarrufu İpuçları</h2>
      <ul>
        <li>Fırınları önceden ısıtmayın, sadece gerektiğinde açın</li>
        <li>Büyük tencerelerde yemek pişirirken kapakları kapatın</li>
        <li>Soğutma dolaplarının kapılarını gereksiz yere açık bırakmayın</li>
        <li>Kullanılmayan ekipmanları kapatın</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Bu yöntemleri uygulayarak enerji maliyetlerinizi %30'a kadar azaltabilirsiniz.</p>
    `,
    author: {
      name: "Mehmet Kaya",
      avatar: "/api/placeholder/60/60",
      bio: "Enerji verimliliği uzmanı. 10 yıllık endüstriyel mutfak danışmanlığı deneyimi."
    },
    date: "2024-01-12",
    category: "Enerji Tasarrufu",
    readTime: "6 dk",
    image: "/api/placeholder/800/400",
    tags: ["enerji", "tasarruf", "maliyet", "verimlilik"],
    featured: false,
    views: 980,
    likes: 45
  },
  {
    id: 3,
    slug: "restoran-mutfaginda-hijyen-standartlari-ve-kontrol-listesi",
    title: "Restoran Mutfağında Hijyen Standartları ve Kontrol Listesi",
    excerpt: "HACCP standartlarına uygun mutfak hijyeni için günlük, haftalık ve aylık kontrol listeleri ve uygulama rehberi.",
    content: `
      <h2>Giriş</h2>
      <p>Restoran mutfağında hijyen standartları, müşteri sağlığı ve işletme itibarı için kritik öneme sahiptir. HACCP standartlarına uygun hijyen uygulamaları ile güvenli ve kaliteli hizmet sunabilirsiniz.</p>
      
      <h2>Günlük Hijyen Kontrol Listesi</h2>
      <ul>
        <li>Çalışma yüzeylerinin temizliği</li>
        <li>Ekipman sterilizasyonu</li>
        <li>Personel hijyeni kontrolü</li>
        <li>Gıda saklama koşulları</li>
      </ul>
      
      <h2>Haftalık Kontroller</h2>
      <ul>
        <li>Derinlemesine temizlik</li>
        <li>Ekipman bakımı</li>
        <li>Hijyen eğitimi</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Düzenli hijyen kontrolleri ile güvenli ve kaliteli hizmet sunabilirsiniz.</p>
    `,
    author: {
      name: "Fatma Demir",
      avatar: "/api/placeholder/60/60",
      bio: "Gıda güvenliği uzmanı. HACCP sertifikalı, 12 yıllık deneyim."
    },
    date: "2024-01-10",
    category: "Hijyen",
    readTime: "10 dk",
    image: "/api/placeholder/800/400",
    tags: ["hijyen", "HACCP", "kontrol", "gıda güvenliği"],
    featured: true,
    views: 1150,
    likes: 67
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* Blog Post Header */}
      <BlogPostHeader post={post} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <BlogPostContent post={post} />
            
            {/* Comments Section */}
            <BlogComments />

            {/* Related Posts */}
            <RelatedPosts />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogPostSidebar post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}