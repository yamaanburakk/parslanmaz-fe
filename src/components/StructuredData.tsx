interface StructuredDataProps {
  type: 'Organization' | 'Product' | 'Service' | 'LocalBusiness' | 'FAQ' | 'BreadcrumbList' | 'WebSite' | 'ItemList';
  data?: Record<string, unknown>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Pars Endüstriyel Mutfak',
    description: 'Paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır.',
    url: 'https://www.parslanmaz.com',
    logo: 'https://www.parslanmaz.com/parslanmaz-logo.jpeg',
    image: 'https://www.parslanmaz.com/og-image.jpg',
    sameAs: [
      'https://www.facebook.com/parslanmaz',
      'https://www.instagram.com/parslanmaz',
      'https://www.linkedin.com/company/parslanmaz',
      'https://www.youtube.com/@parslanmaz',
    ],
  };

  let structuredData;

  switch (type) {
    case 'Organization':
      structuredData = {
        ...baseData,
        '@type': 'Organization',
        '@id': 'https://www.parslanmaz.com/#organization',
        legalName: 'Pars Endüstriyel Mutfak',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Maltepe Mah. Gümüşsuyu Cad. Hacıoğlu Sanayi Sitesi No: 51',
          addressLocality: 'Zeytinburnu',
          addressRegion: 'İstanbul',
          postalCode: '34010',
          addressCountry: 'TR',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+90-541-228-83-66',
            contactType: 'sales',
            areaServed: 'TR',
            availableLanguage: ['Turkish', 'English'],
            contactOption: 'TollFree',
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
          },
          {
            '@type': 'ContactPoint',
            telephone: '+90-541-228-83-66',
            contactType: 'customer support',
            areaServed: 'TR',
            availableLanguage: 'Turkish',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+90-541-228-83-66',
            contactType: 'technical support',
            areaServed: 'TR',
            availableLanguage: 'Turkish',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ayşe Yılmaz',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Mutfak ekipmanları çok kaliteli ve hızlı teslimat yapıldı. Teşekkürler!',
            datePublished: '2023-10-26',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Mehmet Demir',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Profesyonel hizmet ve kaliteli ürünler. Restoranımız için mükemmel çözümler sundular.',
            datePublished: '2023-11-15',
          },
        ],
        foundingDate: '2010',
        numberOfEmployees: '50-100',
        slogan: 'Paslanmaz Çelik Ekipman Üretiminde Uzman',
        knowsAbout: [
          'Endüstriyel Mutfak Ekipmanları',
          'Paslanmaz Çelik Üretimi',
          'Mutfak Tasarımı',
          'Profesyonel Mutfak Çözümleri',
        ],
        areaServed: {
          '@type': 'Country',
          name: 'Turkey',
        },
        description: 'Pars Endüstriyel Mutfak, restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunan lider firmadır.',
      };
      break;

    case 'LocalBusiness':
      structuredData = {
        ...baseData,
        '@type': 'LocalBusiness',
        '@id': 'https://www.parslanmaz.com/#localbusiness',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Maltepe Mah. Gümüşsuyu Cad. Hacıoğlu Sanayi Sitesi No: 51',
          addressLocality: 'Zeytinburnu',
          addressRegion: 'İstanbul',
          postalCode: '34010',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '41.0082',
          longitude: '28.9784',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '14:00',
          },
        ],
        telephone: '+90-541-228-83-66',
        priceRange: '₺₺₺',
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Check'],
        currenciesAccepted: 'TRY, EUR, USD',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
        },
      };
      break;

    case 'Product':
      structuredData = {
        ...baseData,
        '@type': 'Product',
        name: data?.name || 'Paslanmaz Çelik Mutfak Ekipmanı',
        description: data?.description || 'Yüksek kaliteli paslanmaz çelik mutfak ekipmanları',
        brand: {
          '@type': 'Brand',
          name: 'Pars Endüstriyel Mutfak',
        },
        category: 'Endüstriyel Mutfak Ekipmanları',
        material: 'Paslanmaz Çelik 304',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Pars Endüstriyel Mutfak',
          },
        },
      };
      break;

    case 'Service':
      structuredData = {
        ...baseData,
        '@type': 'Service',
        name: 'Endüstriyel Mutfak Çözümleri',
        description: 'Restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri',
        provider: {
          '@type': 'Organization',
          name: 'Pars Endüstriyel Mutfak',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Turkey',
        },
        serviceType: 'Endüstriyel Mutfak Tasarımı ve Üretimi',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Mutfak Ekipmanları',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Paslanmaz Çelik Tezgahlar',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Endüstriyel Buzdolapları',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mutfak Dolapları',
              },
            },
          ],
        },
      };
      break;

    default:
      structuredData = baseData;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
