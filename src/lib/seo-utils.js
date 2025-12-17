// Utilidad para generar metadatos dinámicos en diferentes páginas
// USO: import { generatePageMetadata } from '@/lib/seo-utils';

export const baseMetadata = {
  siteName: 'Flor Del Valle',
  siteUrl: 'https://www.flordelvallej.com',
  locale: 'es_ES',
  defaultImage: '/og-image.jpg',
};

// Keywords base para SEO
export const baseKeywords = [
  'jardinero en Madrid',
  'podas',
  'mantenimiento de jardines',
  'jardinería Madrid',
  'poda de árboles Madrid',
  'diseño de jardines Madrid',
  'paisajismo Madrid',
  'jardinero profesional',
  'jardinero Alcobendas',
  'podas Alcobendas',
];

/**
 * Genera metadatos dinámicos para páginas específicas
 * @param {Object} params - Parámetros de la página
 * @param {string} params.title - Título de la página
 * @param {string} params.description - Descripción de la página
 * @param {string[]} params.keywords - Keywords adicionales (se combinan con las base)
 * @param {string} params.path - Ruta de la página (ej: '/servicios/podas')
 * @param {string} params.image - Imagen OG personalizada (opcional)
 * @returns {Object} Metadatos completos
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  image = baseMetadata.defaultImage,
}) {
  const fullUrl = `${baseMetadata.siteUrl}${path}`;
  const fullTitle = `${title} | ${baseMetadata.siteName}`;
  const allKeywords = [...baseKeywords, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: baseMetadata.siteName,
      locale: baseMetadata.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/**
 * Genera Schema.org JSON-LD para servicios específicos
 * @param {Object} service - Información del servicio
 * @returns {Object} Schema JSON-LD
 */
export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flor Del Valle',
      url: baseMetadata.siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressCountry: 'ES',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
    },
    description: service.description,
    url: `${baseMetadata.siteUrl}${service.path}`,
  };
}

/**
 * Genera Schema.org para artículos/blog
 * @param {Object} article - Información del artículo
 * @returns {Object} Schema JSON-LD
 */
export function generateArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || baseMetadata.defaultImage,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: baseMetadata.siteName,
      url: baseMetadata.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: baseMetadata.siteName,
      url: baseMetadata.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseMetadata.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseMetadata.siteUrl}${article.path}`,
    },
  };
}

/**
 * Genera FAQ Schema para preguntas frecuentes
 * @param {Array} faqs - Array de objetos {question, answer}
 * @returns {Object} Schema JSON-LD
 */
export function generateFAQSchema(faqs) {
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
 * Genera BreadcrumbList Schema
 * @param {Array} breadcrumbs - Array de objetos {name, path}
 * @returns {Object} Schema JSON-LD
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseMetadata.siteUrl}${item.path}`,
    })),
  };
}
