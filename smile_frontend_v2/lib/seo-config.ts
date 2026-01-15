/**
 * SEO Configuration for Smile Organization
 * Contains all SEO constants, structured data generators, and metadata helpers
 */

// ==================== SITE CONSTANTS ====================
export const SITE_CONFIG = {
  name: 'Smile Organization',
  legalName: 'Smile Organization Cameroon',
  tagline: 'Bringing Smiles to Children in Cameroon',
  description: 'Smile Organization is a trusted African charity based in Bamenda, Cameroon, dedicated to helping children access education, clean water, food, and healthcare. Join us in making a difference.',
  url: 'https://smileorganization.org',
  locale: 'en_US',
  type: 'website',
  foundingDate: '2024-01-01',

  // Contact Information
  contact: {
    email: 'info@smileorganization.org',
    phone: '+237 XXX XXX XXX',
    address: {
      street: 'Commercial Avenue',
      city: 'Bamenda',
      region: 'North West Region',
      postalCode: '',
      country: 'Cameroon',
      countryCode: 'CM',
    },
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/smileorganization',
    twitter: 'https://twitter.com/smileorg',
    instagram: 'https://instagram.com/smileorganization',
    youtube: 'https://youtube.com/@smileorganization',
    linkedin: 'https://linkedin.com/company/smile-organization',
  },

  // Images
  images: {
    logo: '/gallery/smile-organization.jpg',
    ogImage: '/gallery/smile-organization.jpg',
    favicon: '/favicon.ico',
  },

  // Authors for EEAT
  authors: [
    {
      name: 'Smile Organization Team',
      role: 'Content Team',
      description: 'The dedicated team behind Smile Organization, working to improve lives in Cameroon.',
    },
    {
      name: 'Boris Johnson',
      role: 'Founder & CEO',
      description: 'Founder of Smile Organization with over 10 years of experience in humanitarian work across Africa.',
    },
  ],
};

// ==================== STRUCTURED DATA GENERATORS ====================

/**
 * Generate Organization Schema (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}${SITE_CONFIG.images.logo}`,
      width: 600,
      height: 600,
    },
    image: `${SITE_CONFIG.url}${SITE_CONFIG.images.ogImage}`,
    foundingDate: SITE_CONFIG.foundingDate,
    founder: {
      '@type': 'Person',
      name: 'Boris Johnson',
      jobTitle: 'Founder & CEO',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.region,
      addressCountry: SITE_CONFIG.contact.address.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.email,
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
    },
    sameAs: Object.values(SITE_CONFIG.social),
    nonprofitStatus: '501(c)(3)',
    areaServed: {
      '@type': 'Country',
      name: 'Cameroon',
    },
    knowsAbout: [
      'Child Education',
      'Hunger Relief',
      'Clean Water Access',
      'Healthcare in Africa',
      'Poverty Alleviation',
      'Humanitarian Aid',
    ],
  };
}

/**
 * Generate WebSite Schema (JSON-LD)
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

/**
 * Generate Article Schema for Blog Posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}${article.url}`,
    },
    headline: article.title,
    description: article.description,
    image: article.image.startsWith('http') ? article.image : `${SITE_CONFIG.url}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.images.logo}`,
      },
    },
    articleSection: article.category || 'Charity',
    inLanguage: 'en-US',
  };
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate DonateAction Schema
 */
export function generateDonateActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    agent: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    recipient: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    description: 'Donate to help children in Cameroon access education, food, clean water, and healthcare.',
    url: `${SITE_CONFIG.url}/donation`,
    potentialAction: {
      '@type': 'DonateAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/donation`,
      },
    },
  };
}

/**
 * Generate LocalBusiness Schema for GEO
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NonprofitOrganization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.region,
      addressCountry: SITE_CONFIG.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.9631,
      longitude: 10.1591,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    priceRange: 'Free',
    areaServed: {
      '@type': 'Country',
      name: 'Cameroon',
    },
  };
}

// ==================== METADATA GENERATORS ====================

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

/**
 * Generate page metadata object for Next.js
 */
export function generateMetadata(page: PageMetadata) {
  const fullTitle = page.title.includes(SITE_CONFIG.name)
    ? page.title
    : `${page.title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description: page.description,
    keywords: page.keywords?.join(', '),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: page.noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: page.canonical || SITE_CONFIG.url,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: page.canonical || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: page.ogImage || SITE_CONFIG.images.ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: (page.ogType || 'website') as 'website' | 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: page.description,
      images: [page.ogImage || SITE_CONFIG.images.ogImage],
      creator: '@smileorg',
    },
  };
}
