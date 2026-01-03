import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.parslanmaz.com';
  
  // Tüm ürün görselleri
  const images = [
    // Ana sayfa görselleri
    { loc: `${baseUrl}/`, image: `${baseUrl}/anasayfa.jpeg`, title: 'Pars Endüstriyel Mutfak Ana Sayfa', caption: 'Paslanmaz Çelik Endüstriyel Mutfak Ekipmanları' },
    { loc: `${baseUrl}/`, image: `${baseUrl}/paslanmaz-celik-endustriyel-mutfak.jpeg`, title: 'Paslanmaz Çelik Endüstriyel Mutfak', caption: 'Profesyonel Mutfak Çözümleri' },
    { loc: `${baseUrl}/`, image: `${baseUrl}/paslanmaz-celik-endustriyel-mutfak2.webp`, title: 'Endüstriyel Mutfak Ekipmanları', caption: 'Yüksek Kalite Mutfak Sistemleri' },
    
    // Logo
    { loc: `${baseUrl}/`, image: `${baseUrl}/parslanmaz-logo.jpeg`, title: 'Pars Endüstriyel Mutfak Logo', caption: 'Parslanmaz Endüstriyel Mutfak' },
    
    // Ürün kategori görselleri
    { loc: `${baseUrl}/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri`, image: `${baseUrl}/endustriyel-mutfak-ekipmanlari.jpeg`, title: 'Endüstriyel Mutfak Ekipmanları', caption: 'Paslanmaz Çelik Tezgah, Dolap, Raf ve Evye Modelleri' },
    { loc: `${baseUrl}/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri`, image: `${baseUrl}/acik-bufe.jpeg`, title: 'Açık Büfe Ekipmanları', caption: 'Servis Üniteleri ve Paslanmaz Çelik Büfe Tezgahları' },
    { loc: `${baseUrl}/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri`, image: `${baseUrl}/ekmek-unlu-mamul.jpeg`, title: 'Ekmek ve Unlu Mamuller Dolapları', caption: 'Paslanmaz Çelik Fırın Vitrin ve Tezgah Modelleri' },
    { loc: `${baseUrl}/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/pasta.jpeg`, title: 'Pasta ve Şarküteri Dolapları', caption: 'Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri' },
    { loc: `${baseUrl}/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri`, image: `${baseUrl}/waffle.jpeg`, title: 'Waffle ve Kumpir Dolapları', caption: 'Paslanmaz Çelik Tezgah, Vitrin ve Dolap Modelleri' },
    { loc: `${baseUrl}/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/cikolata.jpeg`, title: 'Çikolata ve Lokum Dolapları', caption: 'Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri' },
    { loc: `${baseUrl}/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/borek.jpeg`, title: 'Börek ve Baklava Dolapları', caption: 'Paslanmaz Çelik Vitrin, Tezgah ve Dolap Modelleri' },
    
    // Endüstriyel mutfak ürün görselleri
    { loc: `${baseUrl}/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri`, image: `${baseUrl}/endustriyel-mutfak-urun-kategori/endustriyel-1.jpeg`, title: 'Endüstriyel Mutfak Ekipmanı 1', caption: 'Paslanmaz Çelik Mutfak Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri`, image: `${baseUrl}/endustriyel-mutfak-urun-kategori/endustriyel-2.jpeg`, title: 'Endüstriyel Mutfak Ekipmanı 2', caption: 'Paslanmaz Çelik Mutfak Dolabı' },
    { loc: `${baseUrl}/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri`, image: `${baseUrl}/endustriyel-mutfak-urun-kategori/endustriyel-3.jpeg`, title: 'Endüstriyel Mutfak Ekipmanı 3', caption: 'Paslanmaz Çelik Mutfak Rafı' },
    { loc: `${baseUrl}/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri`, image: `${baseUrl}/endustriyel-mutfak-urun-kategori/endustriyel-4.jpeg`, title: 'Endüstriyel Mutfak Ekipmanı 4', caption: 'Paslanmaz Çelik Evye' },
    { loc: `${baseUrl}/urun-kategori/endustriyel-mutfak-ekipmanlari-paslanmaz-celik-tezgah-dolap-raf-ve-evye-modelleri`, image: `${baseUrl}/endustriyel-mutfak-urun-kategori/endustriyel-5.jpeg`, title: 'Endüstriyel Mutfak Ekipmanı 5', caption: 'Paslanmaz Çelik Mutfak Sistemi' },
    
    // Açık büfe ürün görselleri
    { loc: `${baseUrl}/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri`, image: `${baseUrl}/acik-bufe-urun-kategori/acik-bufe-1.jpeg`, title: 'Açık Büfe Ekipmanı 1', caption: 'Paslanmaz Çelik Büfe Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri`, image: `${baseUrl}/acik-bufe-urun-kategori/acik-bufe-2.jpeg`, title: 'Açık Büfe Ekipmanı 2', caption: 'Servis Ünitesi' },
    { loc: `${baseUrl}/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri`, image: `${baseUrl}/acik-bufe-urun-kategori/acik-bufe-3.jpeg`, title: 'Açık Büfe Ekipmanı 3', caption: 'Paslanmaz Çelik Vitrin' },
    { loc: `${baseUrl}/urun-kategori/acik-bufe-ekipmanlari-servis-uniteleri-paslanmaz-celik-bufe-tezgah-ve-vitrin-modelleri`, image: `${baseUrl}/acik-bufe-urun-kategori/acik-bufe-4.jpeg`, title: 'Açık Büfe Ekipmanı 4', caption: 'Büfe Servis Tezgahı' },
    
    // Pasta ürün görselleri
    { loc: `${baseUrl}/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/pasta-urun-kategori/pasta-1.jpeg`, title: 'Pasta Dolabı 1', caption: 'Paslanmaz Çelik Pasta Vitrini' },
    { loc: `${baseUrl}/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/pasta-urun-kategori/pasta-2.jpeg`, title: 'Pasta Dolabı 2', caption: 'Şarküteri Dolabı' },
    { loc: `${baseUrl}/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/pasta-urun-kategori/pasta-3.jpeg`, title: 'Pasta Dolabı 3', caption: 'Pasta Teşhir Dolabı' },
    { loc: `${baseUrl}/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/pasta-urun-kategori/pasta-4.jpeg`, title: 'Pasta Dolabı 4', caption: 'Paslanmaz Çelik Pasta Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/pasta-sarkuteri-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/pasta-urun-kategori/pasta-5.jpeg`, title: 'Pasta Dolabı 5', caption: 'Pasta Dolabı Modeli' },
    
    // Waffle ürün görselleri
    { loc: `${baseUrl}/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri`, image: `${baseUrl}/waffle-urun-kategori/waffle-1.jpeg`, title: 'Waffle Dolabı 1', caption: 'Paslanmaz Çelik Waffle Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri`, image: `${baseUrl}/waffle-urun-kategori/waffle-2.jpeg`, title: 'Waffle Dolabı 2', caption: 'Kumpir Dolabı' },
    { loc: `${baseUrl}/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri`, image: `${baseUrl}/waffle-urun-kategori/waffle-3.jpeg`, title: 'Waffle Dolabı 3', caption: 'Waffle Vitrini' },
    { loc: `${baseUrl}/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri`, image: `${baseUrl}/waffle-urun-kategori/waffle-4.jpeg`, title: 'Waffle Dolabı 4', caption: 'Kumpir Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/waffle-kumpir-dolaplari-paslanmaz-celik-tezgah-vitrin-ve-dolap-modelleri`, image: `${baseUrl}/waffle-urun-kategori/waffle-5.jpg`, title: 'Waffle Dolabı 5', caption: 'Waffle Kumpir Dolabı' },
    
    // Unlu mamuller ürün görselleri
    { loc: `${baseUrl}/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri`, image: `${baseUrl}/unlu-mamul-urun-kategori/unlu-1.jpeg`, title: 'Ekmek Dolabı 1', caption: 'Paslanmaz Çelik Ekmek Vitrini' },
    { loc: `${baseUrl}/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri`, image: `${baseUrl}/unlu-mamul-urun-kategori/unlu-2.jpeg`, title: 'Ekmek Dolabı 2', caption: 'Unlu Mamuller Dolabı' },
    { loc: `${baseUrl}/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri`, image: `${baseUrl}/unlu-mamul-urun-kategori/unlu-3.jpeg`, title: 'Ekmek Dolabı 3', caption: 'Fırın Vitrini' },
    { loc: `${baseUrl}/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri`, image: `${baseUrl}/unlu-mamul-urun-kategori/unlu-4.jpeg`, title: 'Ekmek Dolabı 4', caption: 'Ekmek Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/ekmek-unlu-mamuller-dolaplari-paslanmaz-celik-firin-vitrin-ve-tezgah-modelleri`, image: `${baseUrl}/unlu-mamul-urun-kategori/unlu-5.jpeg`, title: 'Ekmek Dolabı 5', caption: 'Unlu Mamuller Vitrini' },
    
    // Börek ürün görselleri
    { loc: `${baseUrl}/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/borek-urun-kategori/borek-1.jpeg`, title: 'Börek Dolabı 1', caption: 'Paslanmaz Çelik Börek Vitrini' },
    { loc: `${baseUrl}/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/borek-urun-kategori/borek-2.jpeg`, title: 'Börek Dolabı 2', caption: 'Baklava Dolabı' },
    { loc: `${baseUrl}/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/borek-urun-kategori/borek-3.jpeg`, title: 'Börek Dolabı 3', caption: 'Börek Tezgahı' },
    { loc: `${baseUrl}/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/borek-urun-kategori/borek-4.jpeg`, title: 'Börek Dolabı 4', caption: 'Baklava Vitrini' },
    { loc: `${baseUrl}/urun-kategori/borek-baklava-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/borek-urun-kategori/borek-5.jpeg`, title: 'Börek Dolabı 5', caption: 'Börek Baklava Dolabı' },
    
    // Lokum ürün görselleri
    { loc: `${baseUrl}/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/lokum-urun-kategori/lokum-1.jpeg`, title: 'Lokum Dolabı 1', caption: 'Paslanmaz Çelik Lokum Vitrini' },
    { loc: `${baseUrl}/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/lokum-urun-kategori/lokum-2.jpeg`, title: 'Lokum Dolabı 2', caption: 'Çikolata Dolabı' },
    { loc: `${baseUrl}/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/lokum-urun-kategori/lokum-3.jpeg`, title: 'Lokum Dolabı 3', caption: 'Lokum Teşhir Dolabı' },
    { loc: `${baseUrl}/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/lokum-urun-kategori/lokum-4.jpeg`, title: 'Lokum Dolabı 4', caption: 'Çikolata Vitrini' },
    { loc: `${baseUrl}/urun-kategori/cikolata-lokum-dolaplari-paslanmaz-celik-vitrin-tezgah-ve-dolap-modelleri`, image: `${baseUrl}/lokum-urun-kategori/lokum-5.jpeg`, title: 'Lokum Dolabı 5', caption: 'Çikolata Lokum Dolabı' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(item => `  <url>
    <loc>${item.loc}</loc>
    <image:image>
      <image:loc>${item.image}</image:loc>
      <image:title>${item.title}</image:title>
      <image:caption>${item.caption}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

