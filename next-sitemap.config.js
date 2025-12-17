/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.flordelvallej.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*', '/server-sitemap.xml'],
  
  // Configuración del robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Si en el futuro agregas más sitemaps dinámicos
      // 'https://www.flordelvallej.com/server-sitemap.xml',
    ],
  },
  
  // Transformación de URLs para prioridades personalizadas
  transform: async (config, path) => {
    // Prioridad alta para páginas principales
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Prioridad alta para servicios
    if (path.includes('/servicios') || path.includes('/poda') || path.includes('/mantenimiento')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Prioridad media para otras páginas
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
