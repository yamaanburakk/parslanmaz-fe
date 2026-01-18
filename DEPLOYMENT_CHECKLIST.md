# 🚀 cPanel Deployment Checklist - www.parslanmaz.com

## ✅ Ön Hazırlık

- [x] Build tamamlandı (`npm run build`)
- [x] `out` klasörü oluşturuldu
- [x] Tüm dosyalar `out` klasöründe mevcut
- [x] `.htaccess` dosyası `out` klasöründe mevcut

## 📋 Deployment Adımları

### 1. cPanel'e Giriş

- [ ] cPanel'e giriş yapın (https://www.parslanmaz.com:2083)
- [ ] File Manager'ı açın

### 2. Eski Dosyaları Temizleme (İlk deployment'ta gerekli değil)

- [ ] `public_html` klasörüne gidin
- [ ] Eski dosyaları yedekleyin (önerilir)
- [ ] Eski dosyaları silin (veya arşivleyin)

### 3. Yeni Dosyaları Yükleme

- [ ] `out` klasöründeki **TÜM** dosyaları seçin
- [ ] `public_html` klasörüne yükleyin
- [ ] Yükleme tamamlanana kadar bekleyin

### 4. Kritik Dosyaları Kontrol Etme

- [ ] `.htaccess` dosyasının yüklendiğini kontrol edin
  - ⚠️ Gizli dosya olabilir, "Show Hidden Files" seçeneğini aktif edin
- [ ] `index.html` dosyasının yüklendiğini kontrol edin
- [ ] `favicon.ico` dosyasının yüklendiğini kontrol edin
- [ ] Tüm klasörlerin yüklendiğini kontrol edin (`hakkimizda/`, `projeler/`, vb.)

### 5. Dosya İzinlerini Kontrol Etme

- [ ] `.htaccess` dosyası izinleri: **644**
- [ ] `index.html` dosyası izinleri: **644**
- [ ] Klasör izinleri: **755**
- [ ] Görsel dosyaları izinleri: **644**

### 6. Site Testi

- [ ] Ana sayfa açılıyor mu? → https://www.parslanmaz.com
- [ ] Hakkımızda sayfası açılıyor mu? → https://www.parslanmaz.com/hakkimizda/
- [ ] Projeler sayfası açılıyor mu? → https://www.parslanmaz.com/projeler/
- [ ] İletişim sayfası açılıyor mu? → https://www.parslanmaz.com/iletisim/
- [ ] SSS sayfası açılıyor mu? → https://www.parslanmaz.com/sss/
- [ ] Ürün kategorileri açılıyor mu?

### 7. Google Maps Testi

- [ ] İletişim sayfasına gidin
- [ ] Google Maps görüntüleniyor mu?
- [ ] Harita üzerinde zoom yapılabiliyor mu?
- [ ] "Google Maps'te Aç" butonu çalışıyor mu?

### 8. Görsel Testi

- [ ] Ana sayfa hero görseli görüntüleniyor mu?
- [ ] Logo görüntüleniyor mu?
- [ ] Ürün kategori görselleri görüntüleniyor mu?
- [ ] Proje görselleri görüntüleniyor mu?

### 9. Mobil Uyumluluk Testi

- [ ] Mobil cihazda site açılıyor mu?
- [ ] Menü çalışıyor mu?
- [ ] Görseller düzgün görüntüleniyor mu?
- [ ] Formlar çalışıyor mu?

### 10. SEO Kontrolleri

- [ ] Sitemap erişilebilir mi? → https://www.parslanmaz.com/sitemap.xml
- [ ] Image sitemap erişilebilir mi? → https://www.parslanmaz.com/image-sitemap.xml
- [ ] Robots.txt erişilebilir mi? → https://www.parslanmaz.com/robots.txt
- [ ] Favicon görüntüleniyor mu?

### 11. Performance Testi

- [ ] PageSpeed Insights testi: https://pagespeed.web.dev/
  - [ ] Mobil skor: 90+ hedefleniyor
  - [ ] Desktop skor: 90+ hedefleniyor
- [ ] GTmetrix testi: https://gtmetrix.com/
  - [ ] Grade: A hedefleniyor

### 12. Güvenlik Kontrolleri

- [ ] HTTPS çalışıyor mu? (http → https yönlendirmesi)
- [ ] www yönlendirmesi çalışıyor mu? (non-www → www)
- [ ] Security headers aktif mi? (F12 → Network → Headers kontrol edin)

### 13. Tarayıcı Konsolu Kontrolleri

- [ ] F12 tuşuna basın
- [ ] Console sekmesine gidin
- [ ] Herhangi bir hata var mı?
  - ❌ CSP hataları olmamalı
  - ❌ 404 hataları olmamalı
  - ❌ JavaScript hataları olmamalı

### 14. Google Search Console

- [ ] Google Search Console'a giriş yapın
- [ ] URL İnceleme yapın
- [ ] "Canlı test" yapın
- [ ] "İndeksleme iste" butonuna tıklayın

## 🔧 Sorun Giderme

### Google Maps Görüntülenmiyor

**Çözüm:**
1. `.htaccess` dosyasının yüklendiğini kontrol edin
2. `.htaccess` dosyasının içeriğini kontrol edin (CSP ayarları)
3. Tarayıcı konsolunda hata var mı kontrol edin (F12)

### Görseller Görüntülenmiyor

**Çözüm:**
1. Görsel dosyalarının yüklendiğini kontrol edin
2. Dosya izinlerini kontrol edin (644)
3. Dosya adlarında Türkçe karakter var mı kontrol edin

### 404 Hataları

**Çözüm:**
1. `.htaccess` dosyasının yüklendiğini kontrol edin
2. Trailing slash kullanımını kontrol edin (`/hakkimizda/`)
3. Dosya ve klasör yapısını kontrol edin

### HTTPS Yönlendirmesi Çalışmıyor

**Çözüm:**
1. `.htaccess` dosyasının yüklendiğini kontrol edin
2. Apache mod_rewrite modülünün aktif olduğunu kontrol edin
3. cPanel'den SSL sertifikasının aktif olduğunu kontrol edin

### CSP Hataları

**Çözüm:**
1. `.htaccess` dosyasının en son versiyonunu yüklediğinizden emin olun
2. Cloudflare kullanıyorsanız, CSP ayarlarının doğru olduğunu kontrol edin
3. Tarayıcı konsolunda hangi kaynağın engellendiğini kontrol edin

## 📞 Destek

Herhangi bir sorun yaşarsanız:

1. **Tarayıcı Konsolu:** F12 tuşuna basın ve hata mesajlarını kontrol edin
2. **cPanel Error Logs:** cPanel → Metrics → Errors
3. **Apache Error Logs:** cPanel → Metrics → Raw Access

## ✅ Deployment Tamamlandı!

Tüm adımlar tamamlandıysa, siteniz başarıyla yayında! 🎉

**Sonraki Adımlar:**
- [ ] Google Search Console'a sitemap gönderin
- [ ] Google My Business profili oluşturun
- [ ] Google Analytics kurun
- [ ] Sosyal medya hesaplarını güncelleyin
- [ ] Müşterilere yeni site duyurusu yapın

---

**Son Güncelleme:** 4 Ocak 2026
**Site:** www.parslanmaz.com
**Deployment Type:** cPanel/Apache Static Export


