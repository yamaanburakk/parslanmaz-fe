# 🔍 Google Search Console Doğrulama Kodu Ekleme Rehberi

## 📝 ADIM 1: Google'dan Doğrulama Kodunu Alın

### 1.1 Google Search Console'a Gidin
```
URL: https://search.google.com/search-console
```

### 1.2 Sahiplik Doğrulama Sayfasına Gidin
```
Sol üst köşe → Site seçici → Ayarlar (⚙️) → Sahiplik doğrulama
```

veya

```
"Mülk ekle" → "URL öneki" → https://www.parslanmaz.com → Doğrulama yöntemleri
```

### 1.3 HTML Etiketi Yöntemini Seçin
```
✅ "HTML etiketi" sekmesine tıklayın
✅ Google size şöyle bir kod gösterecek:
```

```html
<meta name="google-site-verification" content="AbCdEfGhIjKlMnOpQrStUvWxYz1234567890" />
```

### 1.4 Sadece İçindeki Kodu Kopyalayın
```
AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
        ↑
   Bu kısmı kopyalayın (content içindeki değer)
```

---

## 💻 ADIM 2: Kodu layout.tsx Dosyasına Ekleyin

### 2.1 Dosyayı Açın
```
src/app/layout.tsx
```

### 2.2 263-267. Satırları Bulun
Şu kısmı bulacaksınız:

```typescript
other: {
  'google-site-verification': 'verification-code-placeholder',
  'yandex-verification': 'verification-code-placeholder',
  'facebook-domain-verification': 'verification-code-placeholder',
},
```

### 2.3 Placeholder'ı Gerçek Kod ile Değiştirin

**ÖNCE (Eski):**
```typescript
'google-site-verification': 'verification-code-placeholder',
```

**SONRA (Yeni):**
```typescript
'google-site-verification': 'AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
```

**ÖRNEK:** Google'dan `AbCdEfGhIjKlMnOpQrStUvWxYz1234567890` kodu aldıysanız:

```typescript
other: {
  'google-site-verification': 'AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
  'yandex-verification': 'verification-code-placeholder',
  'facebook-domain-verification': 'verification-code-placeholder',
},
```

---

## 🔨 ADIM 3: Build Alın ve Yükleyin

### 3.1 Build Komutu
```bash
npm run build
```

### 3.2 Out Klasörünü cPanel'e Yükleyin
```
1. out/ klasöründeki TÜM dosyaları seçin
2. cPanel File Manager → public_html/ klasörüne yükleyin
3. Mevcut dosyaların üzerine yazın (overwrite)
```

---

## ✅ ADIM 4: Google'da Doğrulayın

### 4.1 Google Search Console'a Dönün
```
1. "Doğrula" butonuna tıklayın
2. Google sitenizi kontrol edecek (5-10 saniye)
3. "Sahiplik doğrulandı" mesajını göreceksiniz! ✅
```

### 4.2 Başarılı! 🎉
```
✅ Siteniz Google Search Console'a eklendi
✅ Artık sitemap gönderebilirsiniz
✅ URL indeksleme istekleri gönderebilirsiniz
✅ Performans verilerini görebilirsiniz
```

---

## 🚨 SORUN GİDERME

### Hata: "Doğrulama başarısız"
**Çözüm:**
1. Kodu doğru kopyaladığınızdan emin olun
2. Build aldığınızdan emin olun
3. Dosyaları cPanel'e yüklediğinizden emin olun
4. 5-10 dakika bekleyin ve tekrar deneyin
5. Cache temizleyin: Ctrl + F5

### Hata: "Meta etiketi bulunamadı"
**Çözüm:**
1. https://www.parslanmaz.com adresinde sağ tık → "Kaynağı görüntüle"
2. Ctrl + F ile `google-site-verification` arayın
3. Kod varsa: Build/yükleme başarılı ✅
4. Kod yoksa: Build alın ve tekrar yükleyin

### Alternatif Yöntem: HTML Dosyası (Daha Kolay)
Eğer meta tag yöntemi çalışmazsa:
```
1. Google'dan HTML dosyası indirin (örn: googleXXXXXXXX.html)
2. Bu dosyayı public_html/ klasörüne yükleyin
3. Test edin: https://www.parslanmaz.com/googleXXXXXXXX.html
4. Google'da "Doğrula" butonuna tıklayın
5. Başarılı! ✅
```

---

## 📋 KONTROL LİSTESİ

- [ ] Google Search Console'dan doğrulama kodu aldım
- [ ] `src/app/layout.tsx` dosyasında 264. satırı güncelledim
- [ ] `npm run build` komutunu çalıştırdım
- [ ] `out/` klasörünü cPanel'e yükledim
- [ ] Google Search Console'da "Doğrula" butonuna tıkladım
- [ ] "Sahiplik doğrulandı" mesajını gördüm ✅

---

## 🎯 SONUÇ

**Doğrulama tamamlandıktan sonra:**
1. ✅ Sitemap gönderin
2. ✅ URL indeksleme istekleri gönderin
3. ✅ Performans verilerini takip edin
4. ✅ Google Images için image-sitemap gönderin

**Tüm bunlar için:** `GOOGLE_TANITIM_YOL_HARITASI.md` dosyasına bakın!

