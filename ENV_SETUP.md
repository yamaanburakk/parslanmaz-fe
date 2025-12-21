# İletişim Formu - Environment Variables Kurulumu

## Hızlı Başlangıç

Proje kök dizininde `.env.local` dosyası oluşturun ve aşağıdaki ayarlardan birini ekleyin.

## Seçenek 1: Gmail ile E-posta Gönderimi (En Kolay)

```env
# Gmail ayarları
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password

# E-posta alıcı adresi
CONTACT_EMAIL=oguzalp@parslanmaz.com
```

**Gmail App Password Nasıl Alınır:**
1. Google Hesap Ayarları > Güvenlik
2. 2 Adımlı Doğrulamayı açın
3. Uygulama Şifreleri > Yeni uygulama şifresi oluşturun
4. Oluşan 16 haneli şifreyi `GMAIL_APP_PASSWORD` olarak kullanın

## Seçenek 2: Genel SMTP Kullanımı

```env
# SMTP ayarları
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@parslanmaz.com

# E-posta alıcı adresi
CONTACT_EMAIL=oguzalp@parslanmaz.com
```

## Seçenek 3: Resend API (Önerilen - Modern ve Güvenilir)

```env
# Resend API Key (https://resend.com'dan alın)
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM=noreply@parslanmaz.com

# E-posta alıcı adresi
CONTACT_EMAIL=oguzalp@parslanmaz.com
```

## WhatsApp Gönderimi İçin (Opsiyonel)

### Twilio WhatsApp API Kullanımı

```env
# Twilio hesap bilgileri (https://www.twilio.com)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+905412288366
```

### Veya Generic Webhook

```env
# WhatsApp webhook URL'i
WHATSAPP_WEBHOOK_URL=https://your-webhook-url.com/send
WHATSAPP_API_KEY=your-api-key
WHATSAPP_PHONE_NUMBER=905412288366
```

## Önemli Notlar

1. `.env.local` dosyası git'e commit edilmemelidir (zaten .gitignore'da)
2. Production'da (Vercel) environment variables'ı Vercel dashboard'dan ekleyin
3. E-posta gönderimi için en az bir seçenek (Gmail, SMTP veya Resend) gereklidir
4. WhatsApp gönderimi opsiyoneldir, sadece e-posta gönderimi de yeterlidir

## Test Etme

1. `.env.local` dosyasını oluşturun ve yukarıdaki ayarlardan birini ekleyin
2. Development server'ı yeniden başlatın: `npm run dev`
3. İletişim formunu test edin: http://localhost:3000/iletisim

