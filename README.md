# 🍳 Pars Endüstriyel Mutfak - www.parslanmaz.com

Paslanmaz çelik endüstriyel mutfak ekipmanları üretimi ve satışı için modern, SEO-optimized Next.js web sitesi.

## 🚀 Özellikler

- ✅ **Next.js 15** - En son Next.js sürümü ile geliştirildi
- ✅ **Static Export** - cPanel/Apache hosting için optimize edildi
- ✅ **SEO Optimized** - 235+ anahtar kelime, structured data, sitemaps
- ✅ **Google Images Ready** - ImageObject schema ile tüm ürün görselleri optimize edildi
- ✅ **Responsive Design** - Mobil, tablet ve masaüstü için optimize edildi
- ✅ **Performance Optimized** - Core Web Vitals optimize edildi
- ✅ **Accessibility** - WCAG standartlarına uygun
- ✅ **Google Maps Integration** - İletişim sayfasında harita entegrasyonu
- ✅ **Dynamic Viewer Count** - Ürün sayfalarında dinamik ziyaretçi sayacı

## 📦 Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın

`.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```bash
cp .env.local.example .env.local
```

`.env.local` dosyasını düzenleyin:

```env
NEXT_PUBLIC_SITE_URL=https://www.parslanmaz.com
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Build ve Deployment

### cPanel/Apache Deployment (Production - www.parslanmaz.com)

1. **Build Alın:**

```bash
npm run build
```

2. **Out Klasörünü Kontrol Edin:**

Build işlemi tamamlandıktan sonra `out` klasöründe tüm dosyalar hazır olacaktır.

3. **cPanel'e Yükleyin:**

- cPanel File Manager'a giriş yapın
- `public_html` klasörüne gidin
- `out` klasöründeki **TÜM** dosyaları yükleyin (`.htaccess` dahil!)
- `.htaccess` dosyasının yüklendiğinden emin olun (gizli dosya olabilir)

4. **Kontrol Edin:**

- https://www.parslanmaz.com adresine gidin
- Google Maps'in çalıştığını kontrol edin
- Tüm sayfaların düzgün açıldığını kontrol edin

### Önemli Notlar

- ✅ `.htaccess` dosyası **MUTLAKA** yüklenmelidir (CSP, redirects, cache ayarları için)
- ✅ `trailing slash` kullanılır (örn: `/hakkimizda/`)
- ✅ Cloudflare Insights desteklenir (CSP'de tanımlı)
- ✅ Google Maps, Google Analytics desteklenir

## 📁 Proje Yapısı

```
parslanmaz-fe/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Ana layout (metadata, SEO)
│   │   ├── page.tsx            # Ana sayfa
│   │   ├── hakkimizda/         # Hakkımızda sayfası
│   │   ├── projeler/           # Projeler sayfası
│   │   ├── iletisim/           # İletişim sayfası
│   │   ├── sss/                # SSS sayfası
│   │   ├── urun-kategori/      # Ürün kategori sayfaları
│   │   ├── sitemap.ts          # Sitemap generator
│   │   ├── robots.ts           # Robots.txt generator
│   │   ├── image-sitemap.xml/  # Image sitemap
│   │   └── sitemap-index.xml/  # Sitemap index
│   ├── components/             # React bileşenleri
│   │   ├── Header.tsx          # Header
│   │   ├── Footer.tsx          # Footer
│   │   ├── HeroSection.tsx     # Ana sayfa hero
│   │   ├── ProductsSection.tsx # Ürün kategorileri
│   │   ├── GoogleMap.tsx       # Google Maps
│   │   ├── StructuredData.tsx  # Schema.org structured data
│   │   └── ...
│   └── hooks/                  # Custom React hooks
│       └── useViewerCount.ts   # Dinamik ziyaretçi sayacı
├── public/                     # Statik dosyalar
│   ├── .htaccess              # Apache configuration (ÖNEMLİ!)
│   ├── favicon.ico            # Favicon
│   ├── parslanmaz-logo.jpeg   # Logo
│   ├── anasayfa.jpeg          # Ana sayfa görseli
│   └── ...                    # Diğer görseller
├── out/                       # Build çıktısı (cPanel'e yüklenecek)
├── next.config.ts             # Next.js konfigürasyonu
├── tailwind.config.ts         # Tailwind CSS konfigürasyonu
└── package.json               # NPM bağımlılıkları
```

## 🔧 Konfigürasyon Dosyaları

### `.htaccess` (Apache/cPanel)

- ✅ HTTPS yönlendirmesi
- ✅ www yönlendirmesi (non-www → www)
- ✅ Content Security Policy (CSP)
- ✅ Security headers
- ✅ Cache control
- ✅ Gzip compression
- ✅ Trailing slash handling

### `next.config.ts`

- ✅ Static export (`output: 'export'`)
- ✅ Trailing slash enabled
- ✅ Image optimization
- ✅ Performance optimizations
- ✅ Bundle analyzer

### `vercel.json`

- ⚠️ **NOT:** Vercel artık kullanılmıyor. Bu dosya sadece referans amaçlıdır.
- Production deployment: **www.parslanmaz.com** (cPanel/Apache)

## 🎯 SEO Optimizasyonları

### Anahtar Kelimeler

- ✅ **235+ anahtar kelime** optimize edildi
- ✅ Long-tail keywords eklendi
- ✅ Şehir bazlı keywords (İstanbul, Ankara, İzmir, vb.)
- ✅ Ürün kategorisi keywords
- ✅ Sektörel keywords

### Structured Data (Schema.org)

- ✅ Organization
- ✅ LocalBusiness
- ✅ Product
- ✅ Service
- ✅ FAQ
- ✅ WebSite
- ✅ BreadcrumbList
- ✅ ImageObject (Google Images için)

### Sitemaps

- ✅ `sitemap.xml` - Tüm sayfalar
- ✅ `image-sitemap.xml` - Tüm ürün görselleri
- ✅ `sitemap-index.xml` - Sitemap indeksi

### Google Images Optimizasyonu

- ✅ ImageObject schema tüm ürün görselleri için
- ✅ Detaylı alt text optimizasyonu
- ✅ Copyright ve license bilgileri
- ✅ Author ve creator metadata

## 📊 Google Search Console Kurulumu

Detaylı adımlar için `GOOGLE_SEARCH_OPTIMIZATION.md` dosyasına bakın.

### Hızlı Başlangıç:

1. **Google Search Console'a site ekleyin:**
   - https://search.google.com/search-console
   - `https://www.parslanmaz.com` ekleyin
   - HTML tag ile doğrulayın

2. **Sitemap'leri gönderin:**
   - `https://www.parslanmaz.com/sitemap-index.xml`
   - `https://www.parslanmaz.com/sitemap.xml`
   - `https://www.parslanmaz.com/image-sitemap.xml`

3. **Google My Business profili oluşturun:**
   - https://business.google.com
   - İşletme bilgilerini ekleyin
   - Fotoğraflar yükleyin

## 🛠️ Geliştirme

### Yeni Sayfa Ekleme

1. `src/app/` altında yeni klasör oluşturun
2. `page.tsx` dosyası oluşturun
3. Metadata ekleyin (SEO için)
4. `src/app/sitemap.ts` dosyasına yeni sayfayı ekleyin

### Yeni Ürün Kategorisi Ekleme

1. `src/components/ProductsSection.tsx` dosyasını açın
2. `productCategories` array'ine yeni kategori ekleyin
3. Görsel ekleyin (`public/` klasörüne)
4. Alt text'i optimize edin (SEO için)

### CSS Değişiklikleri

- Tailwind CSS kullanılıyor
- Custom CSS: `src/app/globals.css`
- Component-level styles: Tailwind classes

## 📈 Performance

- ✅ Lighthouse Score: 90+
- ✅ Core Web Vitals optimized
- ✅ Image lazy loading
- ✅ Code splitting
- ✅ Bundle size optimization
- ✅ Gzip compression

## 🔒 Güvenlik

- ✅ Content Security Policy (CSP)
- ✅ HTTPS enforced
- ✅ Security headers
- ✅ XSS protection
- ✅ CSRF protection

## 📞 İletişim

- **Web:** https://www.parslanmaz.com
- **Telefon:** +90 541 228 83 66
- **Adres:** Maltepe Mah. Gümüşsuyu Cad. Hacıoğlu Sanayi Sitesi No: 51, Zeytinburnu, İstanbul

## 📝 Lisans

© 2024 Pars Endüstriyel Mutfak. Tüm hakları saklıdır.

---

**Son Güncelleme:** 4 Ocak 2026
**Next.js Version:** 15.1.0
**Deployment:** www.parslanmaz.com (cPanel/Apache)
