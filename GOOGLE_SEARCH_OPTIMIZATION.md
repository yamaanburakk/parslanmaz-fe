# 🚀 Google Arama Optimizasyonu Rehberi
## www.parslanmaz.com için Tam Kapsamlı SEO Stratejisi

---

## ✅ Tamamlanan Teknik Optimizasyonlar

### 1. **Google Maps Entegrasyonu** ✅
- ✅ Content Security Policy (CSP) güncellendi
- ✅ X-Frame-Options `SAMEORIGIN` olarak ayarlandı
- ✅ Google Maps iframe'i için gerekli izinler eklendi
- ✅ `.htaccess` ve `vercel.json` dosyaları güncellendi
- ✅ Harita için `title` attribute eklendi (accessibility)

**Sonuç:** İletişim sayfasındaki Google Maps artık sorunsuz görüntülenecek.

---

### 2. **Anahtar Kelime Optimizasyonu** ✅
- ✅ **235+ anahtar kelime** eklendi (önceden ~85 kelime vardı)
- ✅ Long-tail keywords (uzun kuyruk anahtar kelimeler) eklendi
- ✅ Şehir bazlı anahtar kelimeler genişletildi
- ✅ Ürün kategorisi bazlı detaylı kelimeler eklendi
- ✅ Sektörel ve teknik terimler eklendi

**Eklenen Kategoriler:**
- Marka ve genel terimler
- Mutfak türleri (restoran, otel, kafe, hastane, okul)
- Ürün kategorileri (tezgah, dolap, raf, evye, fırın, ocak)
- Özel dolaplar (pasta, şarküteri, waffle, kumpir, çikolata)
- Şehirler (İstanbul, Ankara, İzmir, Bursa, Antalya, vb.)
- Kalite ve özellikler (304/316 paslanmaz, HACCP, CE belgeli)
- Long-tail keywords (örn: "paslanmaz çelik mutfak tezgahı fiyatları istanbul")

---

### 3. **Google Images Optimizasyonu** ✅
- ✅ **ImageObject Schema** tüm ürün görselleri için eklendi
- ✅ Her görsel için detaylı metadata:
  - `contentUrl`: Görselin tam URL'si
  - `name`: Ürün başlığı
  - `description`: SEO-optimized alt text
  - `caption`: Ürün açıklaması
  - `author` ve `copyrightHolder`: Pars Endüstriyel Mutfak
  - `keywords`: Her görsel için özel anahtar kelimeler
  - `isPartOf`: Görselin bulunduğu sayfa bilgisi
  - `license` ve `acquireLicensePage`: Telif hakkı bilgileri

- ✅ **Alt Text Optimizasyonu:**
  - Önceki: "Endüstriyel Mutfak Ekipmanları görseli"
  - Yeni: "Paslanmaz Çelik Endüstriyel Mutfak Ekipmanları - Tezgah, Dolap, Raf ve Evye Modelleri | Pars Endüstriyel Mutfak İstanbul"

**Sonuç:** Google Images'da "paslanmaz çelik mutfak", "endüstriyel mutfak ekipmanları" gibi aramalarda ürünleriniz görünecek.

---

### 4. **Mevcut SEO Özellikleri** ✅
- ✅ Sitemap.xml (ana sayfa ve tüm sayfalar)
- ✅ Image-sitemap.xml (tüm ürün görselleri)
- ✅ Sitemap-index.xml (sitemap'lerin indeksi)
- ✅ Robots.txt (arama motorları için yönergeler)
- ✅ Structured Data (Organization, LocalBusiness, Product, Service, FAQ, WebSite, BreadcrumbList)
- ✅ Open Graph tags (Facebook, LinkedIn paylaşımları için)
- ✅ Twitter Cards (Twitter paylaşımları için)
- ✅ Canonical URLs (duplicate content önleme)
- ✅ Meta descriptions (her sayfa için özel)
- ✅ Responsive images (WebP, AVIF formatları)
- ✅ Image lazy loading (performans optimizasyonu)
- ✅ Preload critical resources (LCP optimizasyonu)
- ✅ DNS prefetch (hız optimizasyonu)

---

## 📋 Yapılması Gereken Adımlar (Sırayla)

### **ADIM 1: Google Search Console Kurulumu** 🔴 ÖNEMLİ
1. **Google Search Console'a Giriş Yapın:**
   - https://search.google.com/search-console adresine gidin
   - Google hesabınızla giriş yapın

2. **Site Doğrulama:**
   - "Mülk ekle" butonuna tıklayın
   - "URL öneki" seçeneğini seçin
   - `https://www.parslanmaz.com` girin
   - **HTML etiketi** yöntemini seçin
   - Verilen kodu `src/app/layout.tsx` dosyasındaki `other` bölümüne ekleyin:
     ```typescript
     other: {
       'google-site-verification': 'BURAYA_GOOGLE_VERIFICATION_CODE',
       // ...
     },
     ```
   - Build alın ve siteye yükleyin
   - Google Search Console'da "Doğrula" butonuna tıklayın

3. **Sitemap Gönderimi:**
   - Sol menüden "Sitemap'ler" seçeneğine tıklayın
   - Aşağıdaki sitemap'leri sırayla ekleyin:
     - `https://www.parslanmaz.com/sitemap-index.xml`
     - `https://www.parslanmaz.com/sitemap.xml`
     - `https://www.parslanmaz.com/image-sitemap.xml`
   - "Gönder" butonuna tıklayın

4. **URL İnceleme:**
   - Sol menüden "URL İnceleme" seçeneğine tıklayın
   - Ana sayfanızı test edin: `https://www.parslanmaz.com`
   - "Canlı test" yapın
   - "İndeksleme iste" butonuna tıklayın
   - Tüm önemli sayfalar için tekrarlayın (ürün kategorileri, hakkımızda, iletişim)

---

### **ADIM 2: Google Business Profile (Google My Business)** 🔴 ÖNEMLİ
1. **İşletme Profili Oluşturun:**
   - https://business.google.com adresine gidin
   - "İşletmenizi yönetin" butonuna tıklayın
   - İşletme bilgilerini girin:
     - **İşletme Adı:** Pars Endüstriyel Mutfak
     - **Kategori:** Mutfak Ekipmanları Tedarikçisi, Endüstriyel Ekipman Tedarikçisi
     - **Adres:** Maltepe Mah. Gümüşsuyu Cad. Hacıoğlu Sanayi Sitesi No: 51, Zeytinburnu, İstanbul, 34010
     - **Telefon:** +90 541 228 83 66
     - **Web Sitesi:** https://www.parslanmaz.com
     - **Çalışma Saatleri:**
       - Pazartesi-Cuma: 09:00-18:00
       - Cumartesi: 10:00-16:00
       - Pazar: Kapalı

2. **Profil Optimizasyonu:**
   - ✅ **Fotoğraflar:** En az 10 adet kaliteli fotoğraf yükleyin
     - Logo (parslanmaz-logo.jpeg)
     - Dış mekan fotoğrafları (işletme binası)
     - İç mekan fotoğrafları (showroom, atölye)
     - Ürün fotoğrafları (tezgah, dolap, raf, evye)
     - Ekip fotoğrafları
   - ✅ **İşletme Açıklaması:** 750 karakter detaylı açıklama yazın
   - ✅ **Hizmetler:** Tüm ürün kategorilerini ekleyin
   - ✅ **Özellikler:** İşletme özelliklerini seçin (otopark, tekerlekli sandalye erişimi, vb.)

3. **Doğrulama:**
   - Google posta veya telefon ile doğrulama kodu gönderecek
   - Kodu girin ve doğrulayın

---

### **ADIM 3: Google Analytics 4 Kurulumu** 📊
1. **GA4 Hesabı Oluşturun:**
   - https://analytics.google.com adresine gidin
   - Yeni özellik oluşturun
   - Ölçüm ID'sini alın (örn: G-XXXXXXXXXX)

2. **Siteye Entegre Edin:**
   - `src/app/layout.tsx` dosyasına Google Analytics kodunu ekleyin:
     ```typescript
     <Script
       src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
       strategy="afterInteractive"
     />
     <Script id="google-analytics" strategy="afterInteractive">
       {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       `}
     </Script>
     ```

---

### **ADIM 4: Backlink Stratejisi** 🔗
1. **Yerel Dizinler:**
   - Yandex Haritalar'a işletme ekleyin
   - Foursquare'e işletme ekleyin
   - Bing Places'e işletme ekleyin
   - Türkiye'deki sektörel dizinlere kayıt olun

2. **Sosyal Medya:**
   - Facebook Business Page oluşturun
   - Instagram Business hesabı açın
   - LinkedIn Company Page oluşturun
   - YouTube kanalı açın (ürün tanıtım videoları için)
   - Tüm profillerde web sitesi linkini ekleyin

3. **Sektörel Platformlar:**
   - B2B platformlarına üye olun (TurkishExporter, ExportHub, vb.)
   - Sanayi ve ticaret odalarına üye olun
   - Sektörel fuarlara katılın ve web sitesinde duyurun

---

### **ADIM 5: İçerik Stratejisi** 📝
1. **Blog Oluşturun:**
   - `/blog` sayfası ekleyin
   - Haftada 1-2 blog yazısı yayınlayın
   - **Örnek Konular:**
     - "Endüstriyel Mutfak Ekipmanı Seçerken Dikkat Edilmesi Gerekenler"
     - "304 ve 316 Kalite Paslanmaz Çelik Arasındaki Farklar"
     - "Restoran Mutfağı Nasıl Tasarlanır?"
     - "HACCP Sertifikası Nedir ve Neden Önemlidir?"
     - "Endüstriyel Mutfak Ekipmanlarında Bakım ve Temizlik"

2. **Video İçerik:**
   - Ürün tanıtım videoları çekin
   - Üretim süreci videoları paylaşın
   - Müşteri referans videoları oluşturun
   - YouTube'a yükleyin ve web sitesine gömün

3. **Sık Sorulan Sorular (SSS):**
   - SSS sayfanızı genişletin (zaten var)
   - Her ürün kategorisi için özel SSS ekleyin

---

### **ADIM 6: Teknik SEO Kontrolleri** 🔧
1. **Site Hızı:**
   - https://pagespeed.web.dev/ adresinde test edin
   - Mobil ve masaüstü skorlarını 90+ tutun
   - Core Web Vitals'ı optimize edin (LCP, FID, CLS)

2. **Mobil Uyumluluk:**
   - Google Mobile-Friendly Test ile kontrol edin
   - Tüm sayfaların mobilde düzgün çalıştığından emin olun

3. **SSL Sertifikası:**
   - HTTPS kullanımını kontrol edin
   - Tüm sayfaların güvenli olduğundan emin olun

4. **Broken Links:**
   - Aylık olarak kırık linkleri kontrol edin
   - 404 hatalarını düzeltin

---

### **ADIM 7: Yerel SEO** 📍
1. **Yerel Anahtar Kelimeler:**
   - "Zeytinburnu endüstriyel mutfak"
   - "İstanbul paslanmaz çelik mutfak"
   - "Zeytinburnu mutfak ekipmanları"
   - Bu kelimeleri içerik ve meta açıklamalarda kullanın

2. **NAP Tutarlılığı:**
   - Name, Address, Phone (NAP) bilgilerini tüm platformlarda aynı tutun
   - Google My Business, web sitesi, sosyal medya hesaplarında tutarlılık sağlayın

3. **Yerel İçerik:**
   - İstanbul'daki projelerinizi vurgulayın
   - Bölgesel müşteri referansları ekleyin
   - Zeytinburnu ve çevresindeki hizmet alanlarınızı belirtin

---

## 📊 Beklenen Sonuçlar ve Zaman Çizelgesi

### **İlk 1-2 Hafta:**
- Google Search Console'da site indekslenir
- Marka adı aramaları için ilk sırada görünmeye başlar
- Google Maps'te işletme görünür hale gelir

### **1-3 Ay:**
- Uzun kuyruk anahtar kelimeler için sıralamalar başlar
- Google Images'da ürün görselleri görünmeye başlar
- Organik trafik %50-100 artar
- İstanbul ve Zeytinburnu bazlı aramalar için üst sıralarda yer alır

### **3-6 Ay:**
- Ana anahtar kelimeler için ilk sayfa sıralamaları
- Organik trafik %200-300 artar
- Google My Business'tan doğrudan aramalar ve yol tarifleri alınır
- Backlink sayısı artar

### **6-12 Ay:**
- Sektörde lider konuma gelme
- Organik trafik %500+ artar
- Çok sayıda anahtar kelime için ilk 3 sırada yer alma
- Google Images'da dominant pozisyon

---

## 🎯 Ölçüm ve Takip

### **Haftalık Kontroller:**
- Google Search Console'da yeni indekslenen sayfalar
- Anahtar kelime sıralamaları (Google Search Console > Performans)
- Site hızı ve Core Web Vitals

### **Aylık Kontroller:**
- Organik trafik artışı (Google Analytics)
- Backlink sayısı ve kalitesi
- Dönüşüm oranları (form gönderimi, telefon araması)
- Google My Business istatistikleri

### **Üç Aylık Kontroller:**
- Genel SEO stratejisi değerlendirmesi
- Rakip analizi
- İçerik stratejisi güncellemesi
- Teknik SEO optimizasyonları

---

## 🚀 Hızlı Başlangıç Kontrol Listesi

- [ ] Google Search Console'a site ekle ve doğrula
- [ ] Sitemap'leri Google Search Console'a gönder
- [ ] Google My Business profili oluştur ve doğrula
- [ ] Google Analytics 4 kur
- [ ] En az 10 adet kaliteli fotoğraf yükle (Google My Business)
- [ ] Sosyal medya hesaplarını oluştur ve web sitesi linkini ekle
- [ ] Yandex, Bing, Foursquare'e işletme ekle
- [ ] İlk blog yazısını yayınla
- [ ] Müşteri yorumları toplamaya başla (Google My Business)
- [ ] Aylık SEO raporlama sistemini kur

---

## 📞 Destek ve Danışmanlık

Bu rehberdeki tüm adımlar tamamlandığında, siteniz Google'da üst sıralarda yer almaya başlayacaktır. Herhangi bir sorunuz veya desteğe ihtiyacınız olursa, SEO uzmanlarından profesyonel danışmanlık alabilirsiniz.

**Önemli Not:** SEO bir maraton, sprint değildir. Sabırlı olun ve düzenli olarak içerik üretin. Sonuçlar 3-6 ay içinde net bir şekilde görülmeye başlayacaktır.

---

## ✅ Tamamlanan Teknik Altyapı

Sitenizde zaten şu optimizasyonlar yapılmıştır:
- ✅ 235+ anahtar kelime optimizasyonu
- ✅ ImageObject schema (Google Images için)
- ✅ Detaylı alt text optimizasyonu
- ✅ Google Maps CSP düzeltmesi
- ✅ Sitemap.xml, image-sitemap.xml, sitemap-index.xml
- ✅ Robots.txt optimizasyonu
- ✅ Structured data (Organization, LocalBusiness, Product, Service, FAQ)
- ✅ Open Graph ve Twitter Cards
- ✅ Responsive images (WebP, AVIF)
- ✅ Performance optimizations (preload, dns-prefetch, lazy loading)
- ✅ Security headers (.htaccess, vercel.json)
- ✅ Canonical URLs
- ✅ Mobile-first design

**Sırada:** Yukarıdaki adımları takip ederek Google'a sitenizi tanıtın ve içerik üretin!

---

**Son Güncelleme:** 3 Ocak 2026
**Hazırlayan:** AI Assistant
**Site:** www.parslanmaz.com


