# 🚀 Google'a Sitenizi Tanıtma - Adım Adım Yol Haritası
## www.parslanmaz.com için Kapsamlı Kılavuz

---

## 📦 AŞAMA 1: SİTEYİ YÜKLEME (İLK ÖNCE!) ✅

### ✅ Yapılacaklar:
```bash
1. out/ klasöründeki TÜM dosyaları cPanel'e yükleyin
2. public_html/ klasörüne yapıştırın
3. Mevcut dosyaları EZME (overwrite) seçeneğini işaretleyin
4. Yükleme tamamlandıktan sonra test edin: https://www.parslanmaz.com
```

### ✅ Kontrol Listesi (Mutlaka Yüklenecek Dosyalar):
- [x] index.html
- [x] robots.txt
- [x] sitemap.xml
- [x] sitemap-index.xml
- [x] image-sitemap.xml
- [x] .htaccess (güvenlik ve cache için)
- [x] parslanmaz-logo.jpeg (YENİ LOGO)
- [x] anasayfa.jpeg
- [x] Tüm ürün görselleri (*.jpeg)
- [x] 404.html
- [x] Tüm _next/ klasörü

---

## 🔍 AŞAMA 2: GOOGLE SEARCH CONSOLE (EN ÖNEMLİ!) 🔴

### **Adım 2.1: Google Search Console'a Giriş**
1. **Tarayıcıda açın:** https://search.google.com/search-console
2. **Google hesabınızla giriş yapın** (Gmail hesabı)
3. **"Mülk ekle" butonuna tıklayın**

### **Adım 2.2: Domain Ekleme**
1. **"URL öneki" seçeneğini seçin** (Domain değil!)
2. **URL girin:** `https://www.parslanmaz.com`
3. **"Devam" butonuna tıklayın**

### **Adım 2.3: Sahipliği Doğrulama (3 Yöntem - Birini Seçin)**

#### **YÖNTEM 1: HTML Dosyası (EN KOLAY) ⭐ ÖNERİLİR**
```
1. Google size bir dosya indirecek (Örn: googleXXXXXXXXXXXXXXXX.html)
2. Bu dosyayı public_html/ klasörünün EN ÜSTÜne yükleyin
3. Test edin: https://www.parslanmaz.com/googleXXXXXXXXXXXXXXXX.html
   ➜ Dosya görünüyorsa başarılı!
4. Google Search Console'da "Doğrula" butonuna tıklayın
5. Doğrulama başarılı olacak! ✅
```

#### **YÖNTEM 2: Meta Tag**
```
1. Google size bir meta tag verecek
2. Örnek: <meta name="google-site-verification" content="XXXXXXXXXXXX" />
3. Bu kodu src/app/layout.tsx dosyasına ekleyin (other bölümüne)
4. Build alıp yükleyin
5. Google Search Console'da "Doğrula" butonuna tıklayın
```

#### **YÖNTEM 3: DNS TXT Kaydı**
```
1. Domain sağlayıcınıza gidin (Turhost, GoDaddy, Natro, vb.)
2. DNS ayarlarını açın
3. TXT kaydı ekleyin
4. Google'dan verilen kodu yapıştırın
5. 1-2 saat bekleyin (DNS propagation)
6. Google Search Console'da "Doğrula" butonuna tıklayın
```

---

## 🗺️ AŞAMA 3: SITEMAP GÖNDERME (MUTLAKA!) ⭐

### **Adım 3.1: Sitemap Ekle**
1. **Google Search Console'da sol menüden "Sitemaps" seçin**
2. **"Yeni site haritası ekle" bölümüne aşağıdaki URL'leri sırayla ekleyin:**

#### **Sitemap 1: Index (Ana Sitemap)**
```
https://www.parslanmaz.com/sitemap-index.xml
```
➜ "Gönder" butonuna tıklayın ✅

#### **Sitemap 2: Sayfa Sitemap**
```
https://www.parslanmaz.com/sitemap.xml
```
➜ "Gönder" butonuna tıklayın ✅

#### **Sitemap 3: Görsel Sitemap (GOOGLE IMAGES İÇİN ÖNEMLİ!) 📸**
```
https://www.parslanmaz.com/image-sitemap.xml
```
➜ "Gönder" butonuna tıklayın ✅

### **Adım 3.2: Sitemap Kontrolü**
```
✅ Durum: "Başarılı" yazısını görmelisiniz
✅ Bulunan URL'ler: ~50-60 URL görünmeli
✅ Görsel sayısı: ~50+ görsel

❌ Hata alırsanız:
   1. URL'leri tarayıcıda açın ve test edin
   2. 404 hatası alıyorsanız dosyaları kontrol edin
   3. 24 saat bekleyin ve tekrar deneyin
```

---

## 🔗 AŞAMA 4: İLK İNDEKSLEME İSTEĞİ ⚡

### **Adım 4.1: Ana Sayfa İndeksleme**
1. **Sol menüden "URL İnceleme" seçin**
2. **Ana sayfa URL'ini girin:** `https://www.parslanmaz.com`
3. **Enter'a basın**
4. **"Canlı testi yap" butonuna tıklayın** (1-2 dakika sürer)
5. **"Dizin oluşturma iste" butonuna tıklayın**
6. **Başarılı! ✅**

### **Adım 4.2: Önemli Sayfalar İçin Tekrarla**
Aşağıdaki sayfalar için aynı işlemi yapın:

```
✅ https://www.parslanmaz.com/hakkimizda
✅ https://www.parslanmaz.com/projeler
✅ https://www.parslanmaz.com/iletisim
✅ https://www.parslanmaz.com/sss
✅ https://www.parslanmaz.com/hemen-teklif-al
```

### **Adım 4.3: Ürün Kategorileri İçin İndeksleme (ÖNEMLİ!)**
```
✅ https://www.parslanmaz.com/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri
✅ https://www.parslanmaz.com/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri
✅ https://www.parslanmaz.com/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri
✅ https://www.parslanmaz.com/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri
✅ https://www.parslanmaz.com/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri
✅ https://www.parslanmaz.com/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri
✅ https://www.parslanmaz.com/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri
```

**NOT:** Her URL için "dizin oluşturma iste" butonuna tıklamayı unutmayın!

---

## 📸 AŞAMA 5: GOOGLE IMAGES İÇİN ÖZEL AYARLAR ⭐

### **Neden Ürün Görselleri Çıkmıyor?**
Google Images'da görünmek için:
1. ✅ **Site indekslenmiş olmalı** (Aşama 2-4)
2. ✅ **Image sitemap gönderilmiş olmalı** (Aşama 3)
3. ⏳ **Google'ın görselleri taraması lazım** (1-4 hafta sürebilir)
4. ✅ **Görsellerin alt text'i optimize olmalı** (TAMAMLANDI)
5. ✅ **Structured data (Schema.org) eklenmiş olmalı** (TAMAMLANDI)

### **Yapılması Gerekenler:**

#### **5.1: Image Sitemap Kontrolü**
1. **Tarayıcıda açın:** https://www.parslanmaz.com/image-sitemap.xml
2. **Kontrol edin:**
   - ✅ 50+ görsel olmalı
   - ✅ Her görselin title ve caption'ı olmalı
   - ✅ URL'ler doğru olmalı

#### **5.2: Google Search Console'da Görsel Takibi**
1. **Search Console → Sol menü → "Performans"**
2. **"Arama türü" → "Resim"**
3. **İlk verileri görmek 2-4 hafta sürebilir** ⏳

#### **5.3: Görsel Dosya İsimleri (ZATEN OPTİMİZE! ✅)**
```
✅ pasta.jpeg (Pasta Dolabı için mükemmel!)
✅ borek.jpeg (Börek Dolabı için mükemmel!)
✅ waffle.jpeg (Waffle Dolabı için mükemmel!)
✅ acik-bufe.jpeg (Açık Büfe için mükemmel!)
✅ endustriyel-mutfak-ekipmanlari.jpeg (SEO-friendly!)
✅ cikolata.jpeg (Çikolata Dolabı için mükemmel!)
✅ ekmek-unlu-mamul.jpeg (Ekmek Dolabı için mükemmel!)
```

**NOT:** Dosya isimleri zaten SEO-friendly, değiştirmeyin! ✅

---

## 📊 AŞAMA 6: GOOGLE ANALYTICS (İSTEĞE BAĞLI AMA ÖNERİLİR)

### **Adım 6.1: Google Analytics Hesabı Oluşturma**
1. **Tarayıcıda açın:** https://analytics.google.com
2. **"Yönetici" → "Hesap oluştur"**
3. **Hesap adı:** Pars Endüstriyel Mutfak
4. **Özellik adı:** www.parslanmaz.com
5. **Platform:** Web
6. **Site URL'i:** https://www.parslanmaz.com

### **Adım 6.2: Tracking Code Ekleme**
```typescript
// src/app/layout.tsx dosyasına ekleyin (head bölümüne)

<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

**NOT:** `G-XXXXXXXXXX` yerine Google Analytics'ten aldığınız kodu yazın.

---

## 🎯 AŞAMA 7: GOOGLE MY BUSINESS (GOOGLE MAPS İÇİN) ⭐

### **Adım 7.1: Google İşletme Profili Oluşturma**
1. **Tarayıcıda açın:** https://business.google.com
2. **"İşletmeni Yönet" → "İşletme Ekle"**
3. **İşletme adı:** Pars Endüstriyel Mutfak
4. **Kategori:** Endüstriyel Ekipman Tedarikçisi
5. **Adres:** İşletme adresinizi girin
6. **Telefon:** İletişim numaranızı girin
7. **Web sitesi:** https://www.parslanmaz.com

### **Adım 7.2: İşletme Doğrulama**
```
Google size posta ile doğrulama kodu gönderecek (1-2 hafta)
Kodu aldığınızda Google My Business'a girin
İşletmeniz Google Maps'te görünmeye başlayacak! ✅
```

### **Adım 7.3: İşletme Fotoğrafları Ekleme**
```
✅ Logo: parslanmaz-logo.jpeg
✅ Kapak fotoğrafı: anasayfa.jpeg
✅ Ürün fotoğrafları: pasta.jpeg, borek.jpeg, waffle.jpeg, vb.
✅ İşyeri fotoğrafları (varsa)
✅ Ekip fotoğrafları (varsa)
```

---

## 📱 AŞAMA 8: SOSYAL MEDYA PAYLAŞIMLARı (BACKLINK İÇİN)

### **8.1: Facebook Paylaşımı**
```
1. Facebook Business Page oluşturun
2. Hakkında bölümüne web sitesi ekleyin: https://www.parslanmaz.com
3. Ürün fotoğrafları paylaşın
4. Her paylaşımda web sitesi linkini ekleyin
```

### **8.2: Instagram Paylaşımı**
```
1. Instagram Business hesabı oluşturun
2. Bio'ya web sitesi ekleyin: www.parslanmaz.com
3. Ürün fotoğrafları paylaşın
4. #paslanmazmutfak #endüstriyelmutfak #paslanmazcelik hashtagleri kullanın
```

### **8.3: LinkedIn Paylaşımı**
```
1. LinkedIn Company Page oluşturun
2. Hakkında bölümüne web sitesi ekleyin
3. Proje fotoğrafları ve başarı hikayeleri paylaşın
```

### **8.4: YouTube Video (İSTEĞE BAĞLI)**
```
1. Ürün tanıtım videoları çekin
2. Video açıklamasına web sitesi linkini ekleyin
3. Video başlığında anahtar kelime kullanın (örn: "Paslanmaz Çelik Mutfak Ekipmanları")
```

---

## 🔗 AŞAMA 9: BACKLINK STRATEJİSİ (SEO GÜCÜ ARTIRMA)

### **9.1: Yerel Dizinler**
```
✅ Türkiye İhracatçılar Meclisi: https://tim.org.tr
✅ İstanbul Ticaret Odası: https://ito.org.tr
✅ Yandex Yönlendirme: https://webmaster.yandex.com
✅ Bing Webmaster Tools: https://www.bing.com/webmasters
```

### **9.2: Sektörel Forumlar ve Bloglar**
```
✅ Endüstriyel mutfak forumlarına katılın
✅ Yorum yapın ve web sitenizi paylaşın (spam yapmayın!)
✅ Misafir blog yazısı yazın
```

### **9.3: Müşteri Referansları**
```
✅ Müşterilerinizden referans yazısı isteyin
✅ Proje fotoğrafları paylaşın
✅ Başarı hikayeleri yazın
```

---

## ⏰ ZAMAN ÇİZELGESİ (NE KADAR SÜRER?)

### **Hemen (0-1 Gün):**
- ✅ Site yükleme (Aşama 1)
- ✅ Google Search Console ekleme (Aşama 2)
- ✅ Sitemap gönderme (Aşama 3)
- ✅ İndeksleme istekleri (Aşama 4)

### **1-3 Gün:**
- 🔄 Google sitenizi taramaya başlar
- 🔄 İlk sayfalar indekslenir (ana sayfa, hakkımızda)

### **1-2 Hafta:**
- 🔄 Tüm sayfalar indekslenir
- 🔄 "site:www.parslanmaz.com" aramasında sayfalar görünür
- 🔄 İlk organik trafik gelmeye başlar

### **2-4 Hafta:**
- 🔄 Google Images'da görseller taranır
- 🔄 Görseller Google Images'da görünmeye başlar
- 🔄 "paslanmaz çelik mutfak" aramasında sayfalarda ilerleme

### **1-3 Ay:**
- 🔄 Google'da sıralama yükselir
- 🔄 "pars endüstriyel mutfak" aramasında 1. sıra
- 🔄 "paslanmaz çelik mutfak istanbul" aramasında ilk sayfada
- 🔄 Google Images'da ürün görselleri düzenli çıkar

### **3-6 Ay:**
- 🔄 Competitive keywords'lerde sıralama (örn: "endüstriyel mutfak ekipmanları")
- 🔄 Organik trafik düzenli büyür
- 🔄 Google My Business'ta yüksek görünürlük

---

## ✅ KONTROL LİSTESİ (HANGİSİNİ YAPTINIZ?)

### **Teknik Altyapı (TAMAMLANDI ✅)**
- [x] Sitemap.xml
- [x] Image-sitemap.xml
- [x] Sitemap-index.xml
- [x] Robots.txt
- [x] Structured Data (Schema.org)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Meta descriptions
- [x] Alt texts (tüm görseller)
- [x] ImageObject schema
- [x] Canonical URLs
- [x] .htaccess (güvenlik ve cache)
- [x] SSL sertifikası (HTTPS)
- [x] Favicon (parslanmaz-logo)

### **Google Servisleri (YAPILACAK ⏳)**
- [ ] Google Search Console ekleme
- [ ] Sahiplik doğrulama
- [ ] Sitemap gönderme (3 adet)
- [ ] İndeksleme istekleri (15+ URL)
- [ ] Google Analytics kurulumu
- [ ] Google My Business oluşturma
- [ ] Google My Business doğrulama

### **Pazarlama (İSTEĞE BAĞLI 🔵)**
- [ ] Facebook Business Page
- [ ] Instagram Business hesabı
- [ ] LinkedIn Company Page
- [ ] YouTube kanalı
- [ ] Yerel dizinlere ekleme
- [ ] Müşteri referansları
- [ ] Blog yazıları

---

## 🎯 ÖNCELİK SIRASI (HANGI AŞAMADAN BAŞLAMALIYIM?)

### **BU HAFTA YAPILMASI GEREKENLER (ÇOK ÖNEMLİ!):**
```
1️⃣ AŞAMA 1: Site yükleme (out/ klasörünü cPanel'e)
2️⃣ AŞAMA 2: Google Search Console ekleme ve doğrulama
3️⃣ AŞAMA 3: Sitemap gönderme (3 adet sitemap)
4️⃣ AŞAMA 4: İndeksleme istekleri (15+ URL)
5️⃣ AŞAMA 7: Google My Business oluşturma (doğrulama kodu bekleme süresi var)
```

### **GELECEK HAFTA:**
```
6️⃣ AŞAMA 6: Google Analytics kurulumu
7️⃣ AŞAMA 8: Sosyal medya hesapları oluşturma
8️⃣ AŞAMA 9: Backlink stratejisi başlatma
```

---

## 📞 YARDIM VE DESTEK

### **Google Search Console Sorunları:**
- Doğrulama başarısız: HTML dosyasını doğru konuma yükleyin
- Sitemap hatası: URL'leri tarayıcıda test edin
- İndeksleme yavaş: Sabırlı olun, 1-2 hafta sürebilir

### **Google Images'da Görseller Çıkmıyor:**
- Image sitemap gönderildi mi? → Kontrol edin
- Görsellerin alt text'i var mı? → Zaten var ✅
- Structured data ekli mi? → Zaten var ✅
- Ne kadar sürer? → 2-4 hafta

### **Google'da Sıralama Düşük:**
- İlk aylar normal, sabırlı olun
- Backlink stratejisi uygulayın
- İçerik ekleyin (blog yazıları)
- Müşteri yorumları ekleyin

---

## 🚀 SONUÇ

**Yapılması Gereken Adımlar:**
1. ✅ Teknik altyapı TAMAMLANDI
2. ⏳ Google Search Console (SİZ YAPACAKSINIZ)
3. ⏳ Sitemap gönderme (SİZ YAPACAKSINIZ)
4. ⏳ İndeksleme istekleri (SİZ YAPACAKSINIZ)
5. ⏳ Google My Business (SİZ YAPACAKSINIZ)

**Beklenen Sonuçlar:**
- 📅 1-2 hafta: Site Google'da görünür
- 📅 2-4 hafta: Görseller Google Images'da görünür
- 📅 1-3 ay: İlk sayfalarda sıralama
- 📅 3-6 ay: Competitive keywords'lerde yükselme

**En Önemli 3 Adım:**
1. 🔴 Google Search Console ekleme (EN ÖNEMLİ!)
2. 🔴 Sitemap gönderme (GOOGLE IMAGES İÇİN ÖNEMLİ!)
3. 🔴 İndeksleme istekleri (HIZLI SONUÇ İÇİN ÖNEMLİ!)

---

## 📌 HIZLI BAŞLANGIÇ (5 DAKİKA)

Zamanınız yoksa sadece şunu yapın:
```
1. https://search.google.com/search-console adresine gidin
2. www.parslanmaz.com ekleyin
3. HTML dosyası ile doğrulayın
4. Sitemap ekleyin: https://www.parslanmaz.com/sitemap-index.xml
5. Ana sayfayı indeksleme isteyin
```

Bu 5 adımı yaparsanız, Google sitenizi tanımaya başlayacak! ✅

---

**Başarılar! 🎉**

