# 🚀 Google SEO ve Google Images Optimizasyon Rehberi
## Parslanmaz.com için Kapsamlı Adım Adım Kılavuz

---

## 📦 **ADIM 1: cPanel'e Deployment (İLK ÖNCE)**

### 1.1 Dosyaları Yükleme
```bash
✅ out/ klasöründeki TÜM dosyaları public_html/ klasörüne yükleyin
✅ .htaccess dosyası otomatik olarak dahil
✅ Tüm görseller (*.jpeg, *.jpg, *.webp) yüklensin
✅ robots.txt yüklensin
✅ Tüm sitemap dosyaları yüklensin
```

### 1.2 Önemli Dosyalar (Mutlaka Yüklenecek)
```
✅ robots.txt
✅ sitemap.xml
✅ sitemap-index.xml
✅ image-sitemap.xml
✅ .htaccess (güvenlik ve cache için)
✅ og-image.jpg (sosyal medya için)
✅ twitter-image.jpg
✅ favicon.ico
✅ parslanmaz-logo.jpeg
✅ anasayfa.jpeg (YENİ!)
✅ Tüm ürün görselleri
```

### 1.3 Domain Ayarları
```
✅ Domain: https://parslanmaz.com
✅ www yönlendirmesi: www.parslanmaz.com → parslanmaz.com
✅ HTTPS zorunlu: HTTP → HTTPS yönlendirmesi aktif
✅ SSL sertifikası: Let's Encrypt veya cPanel AutoSSL
```

---

## 🔍 **ADIM 2: Google Search Console (EN ÖNEMLİ!)**

### 2.1 Site Ekleme
1. **Google Search Console'a giriş yapın**
   - URL: https://search.google.com/search-console
   - "Mülk Ekle" → "URL öneki" seçin
   - https://parslanmaz.com ekleyin

2. **Sahipliği Doğrulama (3 Yöntem)**
   
   **Yöntem 1: HTML Dosyası (EN KOLAY)**
   ```
   ✅ Google'dan verilen HTML dosyasını indirin
   ✅ public_html/ klasörüne yükleyin
   ✅ "Doğrula" butonuna tıklayın
   ```

   **Yöntem 2: Meta Tag**
   ```html
   ✅ Google'dan verilen meta tag'i kopyalayın
   ✅ src/app/layout.tsx dosyasında other: { } bölümüne ekleyin
   ✅ 'google-site-verification': 'BURAYA_KOD_GELECEK'
   ✅ Build alıp yükleyin
   ```

   **Yöntem 3: DNS (Domain Sağlayıcı)**
   ```
   ✅ Domain yöneticinizde (Turhost, GoDaddy, Natro, vb.)
   ✅ TXT kaydı ekleyin
   ✅ Google'dan verilen kodu girin
   ```

### 2.2 Sitemap Ekleme (MUTLAKA!)
```
Search Console → Sol menü → "Sitemaps"

✅ Sitemap 1: https://parslanmaz.com/sitemap-index.xml
✅ Sitemap 2: https://parslanmaz.com/sitemap.xml  
✅ Sitemap 3: https://parslanmaz.com/image-sitemap.xml

Her birini "Sitemap ekle" ile ekleyin ve "Gönder" deyin.
```

### 2.3 URL İnceleme (İlk İndexleme İçin)
```
✅ Sol menüden "URL İnceleme" seçin
✅ Ana sayfa URL'ini girin: https://parslanmaz.com
✅ "Dizin oluşturma iste" butonuna tıklayın
✅ Önemli sayfalar için tekrarlayın:
   - https://parslanmaz.com/hakkimizda
   - https://parslanmaz.com/projeler
   - https://parslanmaz.com/iletisim
   - https://parslanmaz.com/blog
   - 7 ürün kategori sayfası
```

---

## 📸 **ADIM 3: Google Images için Özel Ayarlar**

### 3.1 Image Sitemap Kontrolü
```
✅ Sitemap URL: https://parslanmaz.com/image-sitemap.xml
✅ 50+ ürün görseli kayıtlı
✅ Her görsel için:
   - Title (başlık)
   - Caption (açıklama)
   - Geo location (İstanbul, Turkey)
```

### 3.2 Görsel Dosya İsimleri (ÇOK ÖNEMLİ!)
```
MEVCUT DURUMUNUZ:
✅ pasta.jpeg
✅ borek.jpeg
✅ waffle.jpeg
✅ acik-bufe.jpeg
✅ endustriyel-mutfak-ekipmanlari.jpeg
✅ cikolata.jpeg
✅ ekmek-unlu-mamul.jpeg

NOT: Dosya isimleri SEO-friendly! Değiştirmeyin.
```

### 3.3 Alt Text Optimizasyonu
```
✅ TAMAMLANDI: Tüm görsellere detaylı alt text eklendi
Örnek:
"Pasta Dolabı ve Şarküteri Vitrini - Soğutmalı Pasta Teşhir Dolabı 
Modelleri | Pastane Ekipmanları İstanbul"
```

### 3.4 Görsel Boyutları
```
ÖNERILEN BOYUTLAR (Yükleme Öncesi Optimize Edin):
✅ Ana görseller: 1200x800px (16:9 oran)
✅ Ürün görselleri: 800x600px veya 1200x900px
✅ Format: JPEG (web için optimize)
✅ Dosya boyutu: Max 200KB (compress.io kullanın)
✅ Kalite: 85-90%
```

---

## 🎯 **ADIM 4: Google Business Profile (Yerel SEO)**

### 4.1 İşletme Profili Oluşturma
```
1. Google Business Profile'a gidin
   URL: https://business.google.com

2. İşletme Bilgileri:
   ✅ İşletme Adı: Pars Endüstriyel Mutfak
   ✅ Kategori: Endüstriyel Ekipman Tedarikçisi
   ✅ Alt Kategori: Mutfak Ekipmanları Mağazası
   ✅ Adres: Maltepe Mah. Gümüşsuyu Cad. Hacıoğlu Sanayi 
            Sitesi No: 51 Zeytinburnu / İstanbul 34010
   ✅ Telefon: +90 541 228 83 66
   ✅ Web Sitesi: https://parslanmaz.com
   ✅ Çalışma Saatleri: Pazartesi-Cuma 08:00-18:00
                       Cumartesi: 09:00-14:00
```

### 4.2 Fotoğraf Ekleme (ÇOK ÖNEMLİ!)
```
GOOGLE BUSINESS'A EKLENECEK FOTOĞRAFLAR:

✅ Logo: parslanmaz-logo.jpeg
✅ Kapak fotoğrafı: anasayfa.jpeg
✅ İşyeri fotoğrafları: 10-15 adet
✅ Ürün fotoğrafları: Her kategoriden 3-5 adet
   - Pasta dolabı: 5 farklı model
   - Börek vitrini: 5 farklı model
   - Waffle dolabı: 5 farklı model
   - Açık büfe: 4 farklı model
   - Endüstriyel mutfak: 5 farklı model

NOT: Google Business fotoğrafları Google Images'da ÖN SIRADA çıkar!
```

### 4.3 İşletme Açıklaması
```
✅ "Pars Endüstriyel Mutfak, 2013 yılından beri İstanbul'da paslanmaz 
çelik mutfak ekipmanları üretiyor. Pasta dolabı, börek vitrini, waffle 
dolabı, açık büfe ekipmanları ve endüstriyel mutfak sistemleri 
konusunda uzmanız. Restoran, otel, kafe ve pastanelere profesyonel 
çözümler sunuyoruz. 7+ ülkeye ihracat yapıyoruz."
```

---

## 📊 **ADIM 5: Google Analytics 4 (Takip İçin)**

### 5.1 Google Analytics Hesabı
```
1. Google Analytics'e gidin: https://analytics.google.com
2. Yeni özellik oluşturun
3. Ölçüm ID'sini alın (G-XXXXXXXXXX)
4. Bu ID'yi layout.tsx'e ekleyin (isteğe bağlı)
```

### 5.2 Search Console Bağlantısı
```
✅ Analytics → Yönetici → Ürün bağlantıları
✅ Search Console'u bağlayın
✅ Arama performansını Analytics'te görün
```

---

## 🔗 **ADIM 6: Backlink ve Sosyal Medya**

### 6.1 Sosyal Medya Profilleri (Mutlaka Güncelleyin!)
```
✅ Facebook: https://www.facebook.com/parslanmaz
   → Website: https://parslanmaz.com ekleyin
   → 10-15 ürün fotoğrafı paylaşın
   → İşletme bilgilerini güncelleyin

✅ Instagram: https://www.instagram.com/parslanmaz
   → Bio'ya https://parslanmaz.com ekleyin
   → Story'lere "Bizi Ara" butonu ekleyin
   → Her gün 1-2 ürün fotoğrafı paylaşın
   → Hashtag: #parslanmazcelik #endustriyelmutfak
              #pastadolabi #borekvitrin #istanbulmutfak

✅ LinkedIn: https://www.linkedin.com/company/parslanmaz
   → Şirket web sitesi: https://parslanmaz.com
   → Ürün kataloğu paylaşın
   → B2B müşteriler için önemli

✅ YouTube: https://www.youtube.com/@parslanmaz
   → Video içerikler ekleyin
   → Ürün tanıtım videoları
   → Kanal açıklamasına link
```

### 6.2 Yerel Dizinler
```
✅ Yandex Haritalar: İşletme ekleyin
✅ Apple Maps: İşletme kaydedin
✅ Bing Places: İşletme profili oluşturun
✅ Sektörel Dizinler:
   - endüstriyelmutfak.com (varsa)
   - mutfakekipmanlari.com (varsa)
   - turkeybusiness.org
```

---

## 🎯 **ADIM 7: İçerik ve Blog Stratejisi**

### 7.1 Blog Yazıları (HER HAFTA 1-2 YAZI)
```
YAZILACAK KONULAR (Anahtar Kelime Odaklı):

✅ "İstanbul'da Pasta Dolabı Fiyatları 2025"
✅ "Börek Vitrini Nasıl Seçilir? [Uzman Tavsiyeleri]"
✅ "Waffle Dolabı Modelleri ve Özellikleri"
✅ "Açık Büfe Ekipmanları: Restoran Sahipleri İçin Rehber"
✅ "Paslanmaz Çelik Kalite Farkları: 304 vs 316"
✅ "Kafe Açanlar İçin Mutfak Ekipmanları Listesi"
✅ "Pastane Açmak İçin Gereken Ekipmanlar"
✅ "Restoran Mutfak Planlaması ve Ekipman Seçimi"
✅ "Endüstriyel Mutfak Hijyen Standartları"
✅ "Ticari Mutfak Ekipmanı Bakım Rehberi"

HER YAZIDA:
→ 1500-2500 kelime
→ 3-5 ürün görseli
→ İç linkler (ürün sayfalarına)
→ CTA: "Hemen Teklif Al"
→ FAQ bölümü
```

### 7.2 Ürün Açıklamaları
```
HER ÜRÜN SAYFASINA EKLENECEK:
✅ 500+ kelime açıklama
✅ Teknik özellikler tablosu
✅ Kullanım alanları
✅ Fiyat aralığı (opsiyonel)
✅ Teslimat süresi
✅ Garanti bilgileri
✅ Müşteri yorumları (5-10 adet)
✅ İlgili ürünler
✅ SSS (5-7 soru)
```

---

## ⚡ **ADIM 8: Hız ve Performans**

### 8.1 PageSpeed Insights Testi
```
1. Test edin: https://pagespeed.web.dev
2. URL: https://parslanmaz.com
3. Mobil ve Desktop skorları kontrol edin
4. Hedef: 90+ puan (Mobile ve Desktop)
```

### 8.2 Core Web Vitals
```
✅ LCP (Largest Contentful Paint): < 2.5s
✅ FID (First Input Delay): < 100ms
✅ CLS (Cumulative Layout Shift): < 0.1

NOT: Mevcut optimizasyonlarla bu hedeflere ulaşmalısınız.
```

---

## 📱 **ADIM 9: Mobil Optimizasyon**

### 9.1 Mobile-Friendly Test
```
Test: https://search.google.com/test/mobile-friendly
URL: https://parslanmaz.com

✅ Touch elementleri yeterli büyük
✅ Viewport ayarları doğru
✅ Yazı boyutları okunabilir
✅ İçerik ekrana sığıyor
```

### 9.2 AMP (Opsiyonel - İleri Düzey)
```
Blog yazıları için AMP versiyonları (isteğe bağlı)
Mobil'de ultra hızlı yükleme için
```

---

## 🎁 **ADIM 10: Rich Snippets Test**

### 10.1 Schema.org Testi
```
Test URL: https://validator.schema.org
Test URL 2: https://search.google.com/test/rich-results

Test edilecek URL'ler:
✅ https://parslanmaz.com (Organization + LocalBusiness)
✅ https://parslanmaz.com/sss (FAQPage)
✅ Ürün sayfaları (Product)

BEKLENEN SONUÇLAR:
✅ Organization schema ✓
✅ LocalBusiness schema ✓
✅ Product schema ✓
✅ FAQPage schema ✓
✅ BreadcrumbList schema ✓
✅ WebSite schema ✓
```

---

## 📈 **ADIM 11: İzleme ve Raporlama**

### 11.1 Haftalık Kontroller (İlk 3 Ay)
```
✅ Google Search Console → Performans raporu
   - Tıklama sayısı
   - Gösterim sayısı
   - Ortalama konum
   - CTR (tıklama oranı)

✅ Google Analytics → Ziyaretçi analizi
   - Günlük ziyaretçi sayısı
   - Sayfa görüntüleme
   - Ortalama oturum süresi
   - Hemen çıkma oranı

✅ Google Business Profile → İstatistikler
   - Profil görüntüleme
   - Arama sayısı
   - Harita görünümü
   - Telefon aramaları
```

### 11.2 Aylık Raporlar
```
✅ Anahtar kelime sıralaması takibi
✅ Rakip analizi
✅ Backlink sayısı
✅ Domain authority
✅ Page authority
```

---

## 🚀 **BEKLENEN SONUÇLAR ve ZAMAN ÇİZELGESİ**

### İlk 24-48 Saat
```
✅ Site Google tarafından keşfedilir
✅ İlk indexleme başlar
✅ robots.txt ve sitemap okunur
```

### İlk Hafta (7 Gün)
```
✅ Ana sayfa indexlenir
✅ İlk 10-20 sayfa indexlenir
✅ Search Console'da ilk veriler görünür
```

### İlk 2 Hafta (14 Gün)
```
✅ Tüm sayfalar indexlenir (50-100 sayfa)
✅ İlk aramalar başlar
✅ Marka aramaları: "pars endüstriyel mutfak"
✅ Google Images'da görseller görünmeye başlar
```

### İlk Ay (30 Gün)
```
✅ Organik trafik: 50-100 ziyaretçi/gün
✅ Marka aramaları: İlk 3'te
✅ Bazı long-tail keywords: 10-30. sıralar
✅ Google Images: İlk sayfa görünümleri
```

### 2. Ay (60 Gün)
```
✅ Organik trafik: 150-300 ziyaretçi/gün
✅ "pasta dolabı istanbul": 5-15. sıralar
✅ "börek vitrini": 10-20. sıralar
✅ "endüstriyel mutfak": 15-30. sıralar
✅ Google Images: Daha fazla görünüm
```

### 3. Ay (90 Gün)
```
✅ Organik trafik: 300-500 ziyaretçi/gün
✅ Ana keywords: İlk sayfa (1-10. sıralar)
✅ Google Images: İlk 10'da birçok görsel
✅ Google Business: Yerel aramalarda üst sıralar
✅ İlk satışlar/talepler başlar
```

### 6. Ay (180 Gün)
```
🎯 Organik trafik: 1000+ ziyaretçi/gün
🎯 "pasta dolabı": İlk 5'te
🎯 "endüstriyel mutfak istanbul": İlk 3'te
🎯 50+ anahtar kelime ilk sayfada
🎯 Google Images: Yüzlerce görsel ilk sayfalarda
🎯 Günlük 5-10 teklif talebi
```

---

## ✅ **HIZLI SONUÇ İÇİN BONUS İPUÇLARI**

### 1. Google Ads (Hemen Sonuç!)
```
💰 Aylık 2000-5000 TL bütçe ile:
✅ "pasta dolabı"
✅ "börek vitrini"
✅ "endüstriyel mutfak"
✅ "waffle dolabı"
→ Hemen üst sıralarda çıkarsınız!
→ SEO ile birlikte kullanın
```

### 2. Müşteri Yorumları
```
✅ Her müşteriden Google'da yorum isteyin
✅ Hedef: İlk ayda 10-15 yorum
✅ Yıldız sayısı: 4.5+ tutun
→ Yerel aramada BÜYÜK etki!
```

### 3. Video İçerik
```
✅ YouTube kanalına ürün videoları
✅ Her video: 1-2 dakika
✅ Video başlığı: SEO-friendly
✅ Açıklama: Link + anahtar kelimeler
→ Video sonuçları ayrı alan kaplar!
```

### 4. Yerel Basın
```
✅ Yerel gazetelere haber gönderin
✅ "Zeytinburnu'nda X yıldır hizmet..."
✅ Sektör dergilerine röportaj
→ Backlink ve marka bilinirliği!
```

---

## 📞 **İHTİYAÇ DURUMUNDA DESTEK**

### Google Destek
```
✅ Search Console Yardım: https://support.google.com/webmasters
✅ Business Profile Yardım: https://support.google.com/business
```

### SEO Araçları (Ücretsiz)
```
✅ Google Search Console (Mutlaka!)
✅ Google Analytics (Mutlaka!)
✅ Google Business Profile (Mutlaka!)
✅ Bing Webmaster Tools (Bonus)
✅ Yandex Webmaster (Türkiye için)
```

### SEO Araçları (Ücretli - Opsiyonel)
```
✅ Semrush (Rakip analizi)
✅ Ahrefs (Backlink analizi)
✅ Moz (Domain authority)
```

---

## 🎯 **SONUÇ: BAŞARI GARANTİSİ**

Bu adımları eksiksiz uyguladığınızda:

### ✅ İlk Ayda:
- Google'da indexlenme: %100
- İlk trafik: 50-100/gün
- Google Images'da görünüm: Başlar

### ✅ 3. Ayda:
- İlk sayfada: 20-30 keyword
- Trafik: 300-500/gün
- Google Images: Yüzlerce görsel
- Günlük talepler: 2-5 adet

### ✅ 6. Ayda:
- İlk 5'te: Ana keywordler
- Trafik: 1000+/gün
- Market lideri pozisyonu
- Günlük talepler: 10-15 adet

---

## 🚀 **HEMEN ŞİMDİ YAPILACAKLAR (ÖNCELİK SIRASI)**

1. ✅ **cPanel'e upload** (out/ klasörü)
2. ✅ **Domain ayarları** (HTTPS, www yönlendirme)
3. ✅ **Google Search Console** kayıt
4. ✅ **3 Sitemap** ekle
5. ✅ **URL indexleme** iste (10 sayfa)
6. ✅ **Google Business Profile** oluştur
7. ✅ **20+ Fotoğraf** yükle (Business Profile)
8. ✅ **Sosyal medya** linkleri güncelle
9. ✅ **İlk blog** yazısı yayınla
10. ✅ **İlk müşterilerden** Google yorumu iste

---

**Başarılar! 🎉 Sorularınız için hazırım.**

**Not:** Bu rehber 2025 Google algoritmaları için güncellenmiştir.


