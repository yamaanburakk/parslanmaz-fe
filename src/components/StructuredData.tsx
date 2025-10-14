interface StructuredDataProps {
  type: 'Organization' | 'Product' | 'Service' | 'LocalBusiness';
  data?: Record<string, unknown>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Pars Endüstriyel Mutfak',
    description: 'Paslanmaz çelik ekipman üretiminde uzmanlaşmış, yenilikçi tasarım ve kaliteli üretim anlayışıyla sektörde fark yaratan lider firmadır.',
    url: 'https://parslanmaz-fe.vercel.app',
    logo: 'https://parslanmaz-fe.vercel.app/parslanmaz-logo.jpeg',
    sameAs: [
      'https://www.facebook.com/parslanmaz',
      'https://www.instagram.com/parslanmaz',
      'https://www.linkedin.com/company/parslanmaz',
    ],
  };

  let structuredData;

  switch (type) {
    case 'Organization':
      structuredData = {
        ...baseData,
        '@type': 'Organization',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'TR',
          addressLocality: 'İstanbul',
          addressRegion: 'İstanbul',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+90-xxx-xxx-xxxx',
          contactType: 'customer service',
          areaServed: 'TR',
          availableLanguage: 'Turkish',
        },
        foundingDate: '2020',
        numberOfEmployees: '50-100',
        industry: 'Endüstriyel Mutfak Ekipmanları',
        description: 'Pars Endüstriyel Mutfak, restoran, otel, kafe, fırın ve catering işletmeleri için profesyonel mutfak çözümleri sunan lider firmadır.',
      };
      break;

    case 'LocalBusiness':
      structuredData = {
        ...baseData,
        '@type': 'LocalBusiness',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Adres Bilgisi',
          addressLocality: 'İstanbul',
          addressRegion: 'İstanbul',
          postalCode: '34000',
          addressCountry: 'TR',
        },
        openingHours: 'Mo-Fr 08:00-18:00',
        telephone: '+90-xxx-xxx-xxxx',
        priceRange: '$$',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
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
