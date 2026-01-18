# 📦 cPanel Upload Kontrol Listesi
## Parslanmaz.com - Dosya Yükleme Rehberi

---

## ✅ **ADIM 1: Hazırlık (Yükleme Öncesi)**

### 1.1 Build Kontrolü
```
✅ Build başarılı: npm run build ✓
✅ out/ klasörü oluştu
✅ Dosya sayısı: 200+ dosya
✅ Toplam boyut: ~15-20 MB
```

### 1.2 Önemli Dosyalar Var mı?
```bash
out/
├── ✅ index.html (ana sayfa)
├── ✅ robots.txt
├── ✅ sitemap.xml
├── ✅ sitemap-index.xml
├── ✅ image-sitemap.xml
├── ✅ .htaccess
├── ✅ favicon.ico
├── ✅ og-image.jpg
├── ✅ twitter-image.jpg
├── ✅ parslanmaz-logo.jpeg
├── ✅ anasayfa.jpeg (YENİ!)
└── ✅ Tüm ürün görselleri
```

---

## 🚀 **ADIM 2: cPanel'e Giriş**

### 2.1 Giriş Bilgileri
```
URL: https://yourdomain.com:2083
   veya
URL: https://yourdomain.com/cpanel

Kullanıcı Adı: [cPanel kullanıcı adınız]
Şifre: [cPanel şifreniz]
```

### 2.2 File Manager'ı Açma
```
1. cPanel ana sayfasında "File Manager" bulun
2. Dosyalar bölümünde "Dosya Yöneticisi" tıklayın
3. public_html klasörüne gidin
```

---

## 📁 **ADIM 3: Eski Dosyaları Yedekleme (İLK DEFA DEĞİLSE)**

### 3.1 Yedek Alma
```
1. public_html klasöründe tüm dosyaları seçin
2. Sağ tık → "Compress" (Sıkıştır)
3. Format: .zip seçin
4. İsim: backup-[tarih].zip
5. Download edin (bilgisayarınıza indirin)
```

### 3.2 Eski Dosyaları Silme
```
SADECE BUNLARI SİLİN (Diğerlerine dokunmayın!):
✅ *.html dosyaları
✅ _next/ klasörü
✅ Eski görsel dosyaları
✅ Eski robots.txt
✅ Eski sitemap dosyaları

SİLMEYİN:
❌ .htaccess (eğer özel ayarlarınız varsa)
❌ cgi-bin/
❌ mail/ veya email/ klasörleri
❌ logs/ klasörü
❌ SSL sertifika dosyaları
```

---

## ⬆️ **ADIM 4: Dosyaları Yükleme**

### 4.1 Yöntem 1: File Manager Upload (Küçük Siteler İçin)
```
1. File Manager → public_html
2. "Upload" butonuna tıklayın
3. out/ klasöründen TÜM dosyaları sürükleyip bırakın
4. Yükleme tamamlanmasını bekleyin
5. Sayfayı yenileyin ve kontrol edin

NOT: Dosya sayısı 1000'den fazlaysa veya toplam 
boyut 100MB'dan büyükse FTP kullanın.
```

### 4.2 Yöntem 2: ZIP ile Upload (ÖNERİLEN!)
```
1. Bilgisayarınızda:
   - out/ klasörünün içindeki TÜM dosyaları seçin
   - Sağ tık → "Sıkıştır" → parslanmaz-out.zip

2. cPanel File Manager:
   - public_html klasörüne gidin
   - "Upload" ile ZIP dosyasını yükleyin
   - ZIP dosyasına sağ tık → "Extract" (Çıkart)
   - Klasör seçin: . (nokta - current directory)
   - "Extract Files" tıklayın
   - ZIP dosyasını silin (artık gereksiz)

3. Dosyaları Kontrol Edin:
   ✅ index.html var mı?
   ✅ robots.txt var mı?
   ✅ Görseller yüklendi mi?
```

### 4.3 Yöntem 3: FTP (Büyük Siteler İçin)
```
FTP İstemcisi: FileZilla (ücretsiz)
Download: https://filezilla-project.org

FTP Bilgileri (cPanel'den alın):
- Host: ftp.parslanmaz.com veya IP adresi
- Username: [FTP kullanıcı adı]
- Password: [FTP şifre]
- Port: 21 (veya 22 - SFTP için)

Yükleme:
1. Sol panel: out/ klasörünü açın (local)
2. Sağ panel: public_html/ açın (remote)
3. out/ içindeki HERHEY'i seçin
4. Sağ tarafa sürükleyin
5. Yükleme bitene kadar bekleyin (10-15 dk)
```

---

## 🔧 **ADIM 5: .htaccess Kontrolü**

### 5.1 .htaccess Dosyası Var mı?
```
File Manager → public_html → Settings (sağ üst)
→ "Show Hidden Files" işaretleyin

✅ .htaccess dosyası görünmeli
```

### 5.2 .htaccess İçeriği (Kontrol Edin)
```
Sağ tık → "Edit" (Düzenle)

Olması gerekenler:
✅ RewriteEngine On
✅ HTTPS yönlendirmesi
✅ www → non-www yönlendirme
✅ Cache control ayarları
✅ Gzip compression

NOT: Dosya zaten out/ klasöründe hazır!
```

---

## 🌐 **ADIM 6: Domain Ayarları**

### 6.1 HTTPS Zorunluluğu
```
cPanel → SSL/TLS Status
✅ parslanmaz.com için SSL aktif olmalı
✅ AutoSSL veya Let's Encrypt

Eğer SSL yoksa:
cPanel → SSL/TLS → "Manage SSL Sites"
→ Let's Encrypt ile ücretsiz SSL alın
```

### 6.2 www Yönlendirme
```
.htaccess dosyasında zaten var:
RewriteCond %{HTTP_HOST} ^www\.parslanmaz\.com [NC]
RewriteRule ^(.*)$ https://parslanmaz.com/$1 [L,R=301]
```

---

## ✅ **ADIM 7: Test ve Kontrol**

### 7.1 Ana Sayfa Kontrolü
```
Tarayıcıda açın: https://parslanmaz.com

Kontrol listesi:
✅ Sayfa yükleniyor mu?
✅ Logo görünüyor mu?
✅ Hero görseli (anasayfa.jpeg) görünüyor mu?
✅ Menü çalışıyor mu?
✅ "Hemen Teklif Al" butonu çalışıyor mu?
✅ Görseller yükleniyor mu?
✅ Mobilde düzgün görünüyor mu?
```

### 7.2 Önemli Sayfalar
```
Test edin:
✅ https://parslanmaz.com/hakkimizda
✅ https://parslanmaz.com/projeler
✅ https://parslanmaz.com/iletisim
✅ https://parslanmaz.com/blog
✅ https://parslanmaz.com/sss
✅ Ürün kategori sayfaları (7 adet)
```

### 7.3 SEO Dosyaları
```
✅ https://parslanmaz.com/robots.txt
   → İçeriği görünüyor mu?
   → Sitemap linkleri doğru mu?

✅ https://parslanmaz.com/sitemap.xml
   → XML formatında mı?
   → Tüm URL'ler listeleniyor mu?

✅ https://parslanmaz.com/sitemap-index.xml
   → 2 sitemap gösteriyor mu?

✅ https://parslanmaz.com/image-sitemap.xml
   → 50+ görsel kayıtlı mı?
```

### 7.4 Görseller Kontrolü
```
✅ https://parslanmaz.com/anasayfa.jpeg
✅ https://parslanmaz.com/parslanmaz-logo.jpeg
✅ https://parslanmaz.com/og-image.jpg
✅ https://parslanmaz.com/pasta.jpeg
✅ https://parslanmaz.com/borek.jpeg
✅ https://parslanmaz.com/waffle.jpeg
✅ https://parslanmaz.com/endustriyel-mutfak-ekipmanlari.jpeg

Her biri açılıyor mu? Kontrol edin.
```

---

## 🔍 **ADIM 8: Performans Testleri**

### 8.1 Hız Testi
```
1. PageSpeed Insights
   URL: https://pagespeed.web.dev
   Test: https://parslanmaz.com
   
   Hedef Skorlar:
   ✅ Mobile: 85+
   ✅ Desktop: 90+

2. GTmetrix (Opsiyonel)
   URL: https://gtmetrix.com
   Test: https://parslanmaz.com
   
   Hedef:
   ✅ Grade: A
   ✅ Load Time: < 3s
```

### 8.2 Mobile-Friendly Test
```
URL: https://search.google.com/test/mobile-friendly
Test: https://parslanmaz.com

✅ "Page is mobile-friendly" mesajı
```

### 8.3 Schema Test
```
URL: https://search.google.com/test/rich-results
Test: https://parslanmaz.com

Beklenen:
✅ Organization schema detected
✅ LocalBusiness schema detected
✅ FAQPage schema detected
✅ No errors
```

---

## 🚨 **ADIM 9: Sorun Giderme**

### 9.1 Sayfa Açılmıyor (500 Error)
```
Çözüm:
1. .htaccess dosyasını geçici olarak yeniden adlandırın
   .htaccess → .htaccess-backup
2. Sayfa açılıyor mu test edin
3. Açılıyorsa .htaccess'te syntax hatası var
4. Dosyayı düzeltin veya yeniden yükleyin
```

### 9.2 Görseller Görünmüyor (404)
```
Çözüm:
1. File Manager'da görsel var mı kontrol edin
2. Dosya adı doğru mu? (büyük/küçük harf)
3. Dosya izinleri: 644 olmalı
   Sağ tık → "Change Permissions"
   Owner: Read + Write
   Group: Read
   Public: Read
```

### 9.3 HTTPS Çalışmıyor
```
Çözüm:
1. cPanel → SSL/TLS Status
2. parslanmaz.com için SSL aktif değilse:
   "Run AutoSSL" tıklayın
3. 10-15 dakika bekleyin
4. Sayfayı yenileyin
```

### 9.4 www Yönlendirmiyor
```
Çözüm:
.htaccess dosyasının başına ekleyin:

RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.parslanmaz\.com [NC]
RewriteRule ^(.*)$ https://parslanmaz.com/$1 [L,R=301]
```

---

## 📊 **ADIM 10: İzleme Kurulumu**

### 10.1 Google Search Console
```
1. https://search.google.com/search-console
2. "Add Property" → https://parslanmaz.com
3. Sahiplik doğrulama (HTML file veya meta tag)
4. 3 sitemap ekle
5. URL inspection ile test et
```

### 10.2 Google Analytics (Opsiyonel)
```
1. https://analytics.google.com
2. Yeni property oluştur
3. Ölçüm ID'sini al (G-XXXXXXXXXX)
4. (İsteğe bağlı olarak siteye eklenebilir)
```

---

## ✅ **FİNAL CHECKLIST (Tüm Adımlar)**

### Yükleme Öncesi
```
☐ npm run build başarılı
☐ out/ klasörü mevcut
☐ Tüm dosyalar out/ içinde
☐ .htaccess dosyası hazır
☐ Görseller optimize (< 200KB)
```

### Yükleme
```
☐ cPanel'e giriş yapıldı
☐ public_html temizlendi (varsa eski dosyalar)
☐ Tüm dosyalar yüklendi
☐ .htaccess yüklendi
☐ Dosya izinleri doğru (644 files, 755 folders)
```

### Test
```
☐ Ana sayfa açılıyor
☐ Tüm sayfalar çalışıyor
☐ Görseller görünüyor
☐ Menü çalışıyor
☐ Mobil responsive
☐ robots.txt erişilebilir
☐ sitemap.xml erişilebilir
☐ HTTPS aktif
☐ www yönlendirmesi çalışıyor
```

### SEO
```
☐ Google Search Console kayıt
☐ Sitemap'ler eklendi
☐ URL indexleme istendi
☐ Google Business Profile oluşturuldu
☐ Sosyal medya linkleri güncellendi
```

---

## 🎯 **BAŞARIYLA TAMAMLANDI!**

Şimdi yapmanız gerekenler:

### İlk 24 Saat
```
✅ Tüm sayfaları manuel test edin
✅ Google Search Console'u kontrol edin
✅ İlk URL indexleme isteğini gönderin
```

### İlk Hafta
```
✅ Günlük Search Console kontrolü
✅ Hata varsa düzeltin
✅ İlk blog yazısını yayınlayın
✅ Sosyal medyada paylaşın
```

### İlk Ay
```
✅ Haftalık performans raporu
✅ Google Business fotoğrafları ekleyin
✅ İlk müşteri yorumlarını toplayın
✅ 4-5 blog yazısı daha ekleyin
```

---

## 📞 **DESTEK**

Sorun yaşarsanız:
```
1. GOOGLE_SEO_CHECKLIST.md dosyasına bakın
2. cPanel destek dokümantasyonu
3. Hosting sağlayıcı desteği
```

---

**Başarılar! Site canlıda! 🎉**


