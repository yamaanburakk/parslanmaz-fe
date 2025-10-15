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
  },
  {
    id: 4,
    slug: "mutfak-ekipmani-seciminde-dikkat-edilmesi-gerekenler",
    title: "Mutfak Ekipmanı Seçiminde Dikkat Edilmesi Gerekenler",
    excerpt: "İşletmeniz için doğru mutfak ekipmanını seçerken göz önünde bulundurmanız gereken faktörler.",
    content: `
      <h2>Giriş</h2>
      <p>Doğru mutfak ekipmanı seçimi, işletmenizin verimliliği ve karlılığı için kritik öneme sahiptir. Bu rehberde, ihtiyaçlarınıza en uygun ekipmanları seçmenize yardımcı olacak faktörleri inceleyeceğiz.</p>
      
      <h2>İşletme Tipine Göre Seçim</h2>
      <p>Farklı işletme tiplerinin farklı ekipman ihtiyaçları vardır. Restoran, kafe, otel mutfağı veya catering işletmesi olmanıza göre ekipman seçiminizi yapmalısınız.</p>
      
      <h2>Kapasite Hesaplama</h2>
      <ul>
        <li>Günlük müşteri sayısı</li>
        <li>Menü çeşitliliği</li>
        <li>Peak saatlerdeki yoğunluk</li>
        <li>Gelecek büyüme planları</li>
      </ul>
      
      <h2>Enerji Verimliliği</h2>
      <p>Enerji verimli ekipmanlar, uzun vadede önemli maliyet tasarrufu sağlar.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru ekipman seçimi ile verimli ve karlı bir işletme kurabilirsiniz.</p>
    `,
    author: {
      name: "Ali Özkan",
      avatar: "/api/placeholder/60/60",
      bio: "Endüstriyel mutfak danışmanı. 8 yıllık ekipman seçimi deneyimi."
    },
    date: "2024-01-08",
    category: "Ekipman Seçimi",
    readTime: "7 dk",
    image: "/api/placeholder/800/400",
    tags: ["ekipman", "seçim", "rehber"],
    featured: false,
    views: 890,
    likes: 42
  },
  {
    id: 5,
    slug: "catering-isletmelerinde-menu-planlama-stratejileri",
    title: "Catering İşletmelerinde Menü Planlama Stratejileri",
    excerpt: "Başarılı catering hizmeti için menü planlama, maliyet hesaplama ve müşteri memnuniyeti ipuçları.",
    content: `
      <h2>Giriş</h2>
      <p>Catering işletmelerinde menü planlama, müşteri memnuniyeti ve karlılık açısından kritik öneme sahiptir. Bu rehberde etkili menü planlama stratejilerini inceleyeceğiz.</p>
      
      <h2>Hedef Kitle Analizi</h2>
      <p>Müşteri profilinizi belirleyerek, onların tercihlerine uygun menüler oluşturabilirsiniz.</p>
      
      <h2>Maliyet Hesaplama</h2>
      <ul>
        <li>Malzeme maliyetleri</li>
        <li>İşçilik giderleri</li>
        <li>Operasyonel maliyetler</li>
        <li>Kar marjı hesaplama</li>
      </ul>
      
      <h2>Menü Çeşitliliği</h2>
      <p>Farklı damak zevklerine hitap eden çeşitli seçenekler sunarak müşteri memnuniyetini artırabilirsiniz.</p>
      
      <h2>Sonuç</h2>
      <p>Stratejik menü planlama ile başarılı catering hizmeti sunabilirsiniz.</p>
    `,
    author: {
      name: "Zeynep Aydın",
      avatar: "/api/placeholder/60/60",
      bio: "Catering işletme uzmanı. 6 yıllık menü planlama deneyimi."
    },
    date: "2024-01-05",
    category: "Catering",
    readTime: "9 dk",
    image: "/api/placeholder/800/400",
    tags: ["catering", "menü", "planlama"],
    featured: false,
    views: 720,
    likes: 38
  },
  {
    id: 6,
    slug: "mutfak-atik-yonetimi-ve-surdurulebilirlik",
    title: "Mutfak Atık Yönetimi ve Sürdürülebilirlik",
    excerpt: "Çevre dostu mutfak işletmeciliği için atık azaltma ve geri dönüşüm stratejileri.",
    content: `
      <h2>Giriş</h2>
      <p>Sürdürülebilir mutfak işletmeciliği, çevresel sorumluluk ve maliyet tasarrufu sağlar. Bu rehberde etkili atık yönetimi stratejilerini inceleyeceğiz.</p>
      
      <h2>Atık Azaltma Yöntemleri</h2>
      <ul>
        <li>Gıda israfını önleme</li>
        <li>Portion kontrolü</li>
        <li>Menü optimizasyonu</li>
        <li>Personel eğitimi</li>
      </ul>
      
      <h2>Geri Dönüşüm Programları</h2>
      <p>Organik atıkların kompost edilmesi ve diğer malzemelerin geri dönüştürülmesi.</p>
      
      <h2>Çevre Dostu Uygulamalar</h2>
      <p>Enerji tasarrufu ve çevresel etki azaltma yöntemleri.</p>
      
      <h2>Sonuç</h2>
      <p>Sürdürülebilir uygulamalar ile hem çevreye katkı sağlayabilir hem de maliyet tasarrufu elde edebilirsiniz.</p>
    `,
    author: {
      name: "Can Yıldız",
      avatar: "/api/placeholder/60/60",
      bio: "Sürdürülebilirlik uzmanı. 5 yıllık atık yönetimi deneyimi."
    },
    date: "2024-01-03",
    category: "Sürdürülebilirlik",
    readTime: "8 dk",
    image: "/api/placeholder/800/400",
    tags: ["atık yönetimi", "sürdürülebilirlik", "çevre"],
    featured: false,
    views: 650,
    likes: 29
  },
  {
    id: 7,
    slug: "endustriyel-mutfak-ekipman-secimi-2024-rehberi",
    title: "2024 Endüstriyel Mutfak Ekipman Seçimi Rehberi",
    excerpt: "Profesyonel mutfaklar için en uygun ekipmanları seçmenize yardımcı olacak kapsamlı rehber.",
    content: `
      <h2>Giriş</h2>
      <p>2024 yılında endüstriyel mutfak ekipmanı seçimi, teknolojik gelişmeler ve yeni trendler ışığında değerlendirilmelidir.</p>
      
      <h2>2024 Trendleri</h2>
      <ul>
        <li>Akıllı ekipmanlar</li>
        <li>Enerji verimliliği</li>
        <li>Otomasyon sistemleri</li>
        <li>Uzaktan kontrol</li>
      </ul>
      
      <h2>Ekipman Kategorileri</h2>
      <p>Pişirme, soğutma, hazırlık ve servis ekipmanlarının detaylı analizi.</p>
      
      <h2>Teknoloji Entegrasyonu</h2>
      <p>IoT ve akıllı sistemlerin mutfak ekipmanlarına entegrasyonu.</p>
      
      <h2>Sonuç</h2>
      <p>2024 standartlarına uygun ekipman seçimi ile modern ve verimli mutfaklar kurabilirsiniz.</p>
    `,
    author: {
      name: "Elif Yıldırım",
      avatar: "/api/placeholder/60/60",
      bio: "Teknoloji uzmanı. 7 yıllık akıllı mutfak sistemleri deneyimi."
    },
    date: "2024-01-20",
    category: "Ekipman",
    readTime: "12 dk",
    image: "/api/placeholder/800/400",
    tags: ["ekipman", "rehber", "2024"],
    featured: false,
    views: 1100,
    likes: 56
  },
  {
    id: 8,
    slug: "paslanmaz-celik-kalite-standartlari",
    title: "Paslanmaz Çelik Kalite Standartları ve Sertifikasyon",
    excerpt: "304 ve 316 kalite paslanmaz çelik arasındaki farklar ve kullanım alanları.",
    content: `
      <h2>Giriş</h2>
      <p>Paslanmaz çelik kalite standartları, ekipmanların dayanıklılığı ve hijyenik özellikleri için kritik öneme sahiptir.</p>
      
      <h2>304 Kalite Paslanmaz Çelik</h2>
      <ul>
        <li>Genel kullanım için uygun</li>
        <li>Orta düzeyde korozyon direnci</li>
        <li>Ekonomik fiyat</li>
        <li>Gıda endüstrisinde yaygın kullanım</li>
      </ul>
      
      <h2>316 Kalite Paslanmaz Çelik</h2>
      <ul>
        <li>Yüksek korozyon direnci</li>
        <li>Deniz suyuna dayanıklı</li>
        <li>Kimyasal işlemler için ideal</li>
        <li>Premium kalite</li>
      </ul>
      
      <h2>Sertifikasyon Standartları</h2>
      <p>ISO, CE ve diğer uluslararası standartların açıklaması.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru kalite seçimi ile uzun ömürlü ve güvenilir ekipmanlar elde edebilirsiniz.</p>
    `,
    author: {
      name: "Murat Acar",
      avatar: "/api/placeholder/60/60",
      bio: "Malzeme mühendisi. 10 yıllık paslanmaz çelik uzmanlığı."
    },
    date: "2024-01-18",
    category: "Malzeme Bilgisi",
    readTime: "9 dk",
    image: "/api/placeholder/800/400",
    tags: ["paslanmaz çelik", "kalite", "standart"],
    featured: false,
    views: 950,
    likes: 43
  },
  {
    id: 9,
    slug: "otel-mutfagi-tasarim-ipuclari",
    title: "Otel Mutfağı Tasarım İpuçları ve Öneriler",
    excerpt: "Otel mutfaklarında ergonomi, verimlilik ve hijyen için tasarım önerileri.",
    content: `
      <h2>Giriş</h2>
      <p>Otel mutfağı tasarımı, konuk memnuniyeti ve operasyonel verimlilik için kritik öneme sahiptir.</p>
      
      <h2>Ergonomik Tasarım</h2>
      <ul>
        <li>Çalışma alanları düzenlemesi</li>
        <li>Personel hareket akışı</li>
        <li>Ekipman yerleşimi</li>
        <li>Aydınlatma planlaması</li>
      </ul>
      
      <h2>Verimlilik Optimizasyonu</h2>
      <p>Hızlı ve etkili servis için alan planlaması.</p>
      
      <h2>Hijyen Standartları</h2>
      <p>HACCP standartlarına uygun tasarım prensipleri.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru tasarım ile hem personel verimliliği hem de konuk memnuniyeti artırılabilir.</p>
    `,
    author: {
      name: "Selin Koç",
      avatar: "/api/placeholder/60/60",
      bio: "Mutfak tasarım uzmanı. 8 yıllık otel mutfağı tasarım deneyimi."
    },
    date: "2024-01-16",
    category: "Tasarım",
    readTime: "11 dk",
    image: "/api/placeholder/800/400",
    tags: ["otel", "tasarım", "mutfak"],
    featured: true,
    views: 1200,
    likes: 61
  },
  {
    id: 10,
    slug: "haccp-sistemleri-ve-uygulamasi",
    title: "HACCP Sistemleri ve Mutfaklarda Uygulanması",
    excerpt: "Gıda güvenliği için HACCP sistemlerinin mutfaklarda nasıl uygulanacağı.",
    content: `
      <h2>Giriş</h2>
      <p>HACCP (Hazard Analysis and Critical Control Points) sistemi, gıda güvenliğini sağlamak için kritik öneme sahiptir.</p>
      
      <h2>HACCP Prensipleri</h2>
      <ul>
        <li>Tehlike analizi</li>
        <li>Kritik kontrol noktaları belirleme</li>
        <li>Limit değerleri tespit etme</li>
        <li>İzleme prosedürleri</li>
      </ul>
      
      <h2>Mutfakta Uygulama</h2>
      <p>Günlük operasyonlarda HACCP sisteminin uygulanması.</p>
      
      <h2>Dokümantasyon</h2>
      <p>Kayıt tutma ve raporlama süreçleri.</p>
      
      <h2>Sonuç</h2>
      <p>HACCP sistemi ile güvenli ve kaliteli gıda hizmeti sunabilirsiniz.</p>
    `,
    author: {
      name: "Dr. Ayşe Demir",
      avatar: "/api/placeholder/60/60",
      bio: "Gıda güvenliği uzmanı. 12 yıllık HACCP uygulama deneyimi."
    },
    date: "2024-01-14",
    category: "Gıda Güvenliği",
    readTime: "15 dk",
    image: "/api/placeholder/800/400",
    tags: ["HACCP", "gıda güvenliği", "hijyen"],
    featured: false,
    views: 1400,
    likes: 78
  },
  {
    id: 11,
    slug: "endustriyel-sogutma-sistemleri",
    title: "Endüstriyel Soğutma Sistemleri ve Enerji Verimliliği",
    excerpt: "Mutfaklarda kullanılan soğutma sistemlerinin enerji verimliliği ve bakımı.",
    content: `
      <h2>Giriş</h2>
      <p>Endüstriyel soğutma sistemleri, gıda güvenliği ve enerji verimliliği açısından kritik öneme sahiptir.</p>
      
      <h2>Soğutma Sistemi Türleri</h2>
      <ul>
        <li>Walk-in soğutucular</li>
        <li>Reach-in soğutucular</li>
        <li>Dondurucular</li>
        <li>Soğuk hava depoları</li>
      </ul>
      
      <h2>Enerji Verimliliği</h2>
      <p>Enerji tasarrufu sağlayan teknolojiler ve uygulamalar.</p>
      
      <h2>Bakım ve Servis</h2>
      <p>Düzenli bakım ile sistem ömrünü uzatma yöntemleri.</p>
      
      <h2>Sonuç</h2>
      <p>Verimli soğutma sistemleri ile hem enerji tasarrufu hem de gıda güvenliği sağlayabilirsiniz.</p>
    `,
    author: {
      name: "Ahmet Yılmaz",
      avatar: "/api/placeholder/60/60",
      bio: "Soğutma sistemleri uzmanı. 9 yıllık endüstriyel soğutma deneyimi."
    },
    date: "2024-01-11",
    category: "Soğutma",
    readTime: "10 dk",
    image: "/api/placeholder/800/400",
    tags: ["soğutma", "enerji", "verimlilik"],
    featured: false,
    views: 850,
    likes: 35
  },
  {
    id: 12,
    slug: "restoran-acilis-kontrol-listesi",
    title: "Restoran Açılış Kontrol Listesi: Mutfak Ekipmanları",
    excerpt: "Yeni restoran açarken mutfak ekipmanları için gerekli kontrol listesi.",
    content: `
      <h2>Giriş</h2>
      <p>Yeni restoran açarken mutfak ekipmanlarının doğru seçimi ve kurulumu, başarılı operasyon için kritik öneme sahiptir.</p>
      
      <h2>Zorunlu Ekipmanlar</h2>
      <ul>
        <li>Pişirme ekipmanları</li>
        <li>Soğutma sistemleri</li>
        <li>Hazırlık ekipmanları</li>
        <li>Temizlik ekipmanları</li>
      </ul>
      
      <h2>Kurulum Kontrolü</h2>
      <p>Ekipman kurulumunda dikkat edilmesi gereken noktalar.</p>
      
      <h2>Test ve Onay</h2>
      <p>Açılış öncesi ekipman testleri ve onay süreçleri.</p>
      
      <h2>Sonuç</h2>
      <p>Kapsamlı kontrol listesi ile sorunsuz restoran açılışı gerçekleştirebilirsiniz.</p>
    `,
    author: {
      name: "Can Özkan",
      avatar: "/api/placeholder/60/60",
      bio: "Restoran danışmanı. 11 yıllık restoran açılış deneyimi."
    },
    date: "2024-01-09",
    category: "İşletme",
    readTime: "13 dk",
    image: "/api/placeholder/800/400",
    tags: ["restoran", "açılış", "checklist"],
    featured: false,
    views: 980,
    likes: 47
  },
  {
    id: 13,
    slug: "endustriyel-firinlar-ve-pisirme-teknikleri",
    title: "Endüstriyel Fırınlar ve Modern Pişirme Teknikleri",
    excerpt: "Konveksiyonel, kombi ve deck fırınların karşılaştırması ve kullanım alanları.",
    content: `
      <h2>Giriş</h2>
      <p>Endüstriyel fırınlar, modern mutfaklarda çeşitli pişirme teknikleri sunarak verimliliği artırır.</p>
      
      <h2>Fırın Türleri</h2>
      <ul>
        <li>Konveksiyonel fırınlar</li>
        <li>Kombi fırınlar</li>
        <li>Deck fırınlar</li>
        <li>Pizza fırınları</li>
      </ul>
      
      <h2>Pişirme Teknikleri</h2>
      <p>Farklı fırın türlerinde optimal pişirme yöntemleri.</p>
      
      <h2>Enerji Verimliliği</h2>
      <p>Modern fırınların enerji tasarrufu özellikleri.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru fırın seçimi ile hem enerji tasarrufu hem de kaliteli pişirme elde edebilirsiniz.</p>
    `,
    author: {
      name: "Mehmet Kaya",
      avatar: "/api/placeholder/60/60",
      bio: "Pişirme ekipmanları uzmanı. 8 yıllık endüstriyel fırın deneyimi."
    },
    date: "2024-01-07",
    category: "Pişirme Ekipmanları",
    readTime: "14 dk",
    image: "/api/placeholder/800/400",
    tags: ["fırın", "pişirme", "ekipman"],
    featured: false,
    views: 1100,
    likes: 52
  },
  {
    id: 14,
    slug: "mutfak-havalandirma-sistemleri",
    title: "Mutfak Havalandırma Sistemleri ve Davlumbaz Seçimi",
    excerpt: "Profesyonel mutfaklarda doğru havalandırma sistemi ve davlumbaz seçimi.",
    content: `
      <h2>Giriş</h2>
      <p>Doğru havalandırma sistemi, mutfak hijyeni ve personel sağlığı için kritik öneme sahiptir.</p>
      
      <h2>Havalandırma Sistemi Bileşenleri</h2>
      <ul>
        <li>Davlumbazlar</li>
        <li>Fan sistemleri</li>
        <li>Filtreler</li>
        <li>Duman kanalları</li>
      </ul>
      
      <h2>Davlumbaz Seçimi</h2>
      <p>İhtiyaca uygun davlumbaz türü ve kapasitesi belirleme.</p>
      
      <h2>Bakım ve Temizlik</h2>
      <p>Havalandırma sistemlerinin düzenli bakımı ve temizliği.</p>
      
      <h2>Sonuç</h2>
      <p>Etkili havalandırma sistemi ile temiz ve sağlıklı mutfak ortamı sağlayabilirsiniz.</p>
    `,
    author: {
      name: "Fatma Demir",
      avatar: "/api/placeholder/60/60",
      bio: "Havalandırma sistemleri uzmanı. 7 yıllık endüstriyel havalandırma deneyimi."
    },
    date: "2024-01-04",
    category: "Havalandırma",
    readTime: "11 dk",
    image: "/api/placeholder/800/400",
    tags: ["havalandırma", "davlumbaz", "sistem"],
    featured: false,
    views: 920,
    likes: 41
  },
  {
    id: 15,
    slug: "kurumsal-catering-mutfak-planlamasi",
    title: "Kurumsal Catering Mutfak Planlaması",
    excerpt: "Büyük ölçekli catering işletmeleri için mutfak planlaması ve ekipman seçimi.",
    content: `
      <h2>Giriş</h2>
      <p>Kurumsal catering mutfak planlaması, büyük ölçekli operasyonlar için özel yaklaşım gerektirir.</p>
      
      <h2>Planlama Aşamaları</h2>
      <ul>
        <li>Kapasite analizi</li>
        <li>Alan planlaması</li>
        <li>Ekipman seçimi</li>
        <li>İş akışı tasarımı</li>
      </ul>
      
      <h2>Ekipman Yerleşimi</h2>
      <p>Verimli operasyon için ekipman yerleşim prensipleri.</p>
      
      <h2>Kalite Kontrol</h2>
      <p>Büyük ölçekli üretimde kalite kontrol sistemleri.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru planlama ile büyük ölçekli catering operasyonlarını başarıyla yönetebilirsiniz.</p>
    `,
    author: {
      name: "Zeynep Aydın",
      avatar: "/api/placeholder/60/60",
      bio: "Kurumsal catering uzmanı. 9 yıllık büyük ölçekli catering deneyimi."
    },
    date: "2024-01-02",
    category: "Catering",
    readTime: "16 dk",
    image: "/api/placeholder/800/400",
    tags: ["catering", "planlama", "büyük ölçek"],
    featured: false,
    views: 1300,
    likes: 64
  }
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

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