# 🏗️ Estructura SEO - Flor Del Valle

## 📊 Diagrama de Arquitectura SEO

```
🌐 FLOR DEL VALLE (www.flordelvallej.com)
│
├── 📄 ROOT LAYOUT (src/app/layout.js)
│   ├── ✅ Metadatos Base
│   │   ├── Título: "Flor Del Valle | Jardinero en Madrid..."
│   │   ├── Description con keywords
│   │   ├── Keywords: [jardinero en Madrid, podas, ...]
│   │   ├── Open Graph (Facebook, WhatsApp)
│   │   └── Twitter Cards
│   │
│   └── ✅ Schema.org LocalBusiness
│       ├── Información de contacto (⚠️ COMPLETAR)
│       ├── Dirección y geolocalización (⚠️ COMPLETAR)
│       ├── Horarios de apertura
│       ├── Catálogo de servicios
│       │   ├── Mantenimiento de Jardines
│       │   ├── Podas Profesionales
│       │   └── Diseño de Jardines
│       └── Valoraciones (⚠️ COMPLETAR cuando tengas reseñas reales)
│
├── 🛠️ UTILIDADES SEO (src/lib/seo-utils.js)
│   ├── generatePageMetadata() → Metadatos dinámicos
│   ├── generateServiceSchema() → Schema para servicios
│   ├── generateFAQSchema() → Schema para preguntas frecuentes
│   ├── generateArticleSchema() → Schema para blog
│   └── generateBreadcrumbSchema() → Schema para navegación
│
├── 🗺️ SITEMAP (next-sitemap.config.js)
│   ├── ✅ Generación automática en build
│   ├── ✅ Prioridades personalizadas
│   │   ├── Homepage: 1.0 (máxima)
│   │   ├── Servicios: 0.9 (alta)
│   │   └── Otras: 0.7 (media)
│   ├── ✅ Changefreq configurado
│   └── 📍 Output: public/sitemap.xml
│
├── 🤖 ROBOTS.TXT (auto-generado)
│   ├── ✅ Permite Googlebot
│   ├── ✅ Permite Googlebot-Image
│   ├── ✅ Bloquea /api/ y /admin/
│   └── ✅ Incluye URL del sitemap
│
├── ⚙️ NEXT.JS CONFIG (next.config.mjs)
│   ├── ✅ Compresión activada
│   ├── ✅ Headers de seguridad
│   ├── ✅ Optimización de imágenes (AVIF, WebP)
│   └── ✅ Sin X-Powered-By header
│
└── 📦 COMPONENTES
    └── StructuredData.js → Wrapper para JSON-LD
```

---

## 🎯 Flujo de Generación de SEO

```
USUARIO CREA PÁGINA
        ↓
Importa utilidades de seo-utils.js
        ↓
Usa generatePageMetadata({
    title: "...",
    description: "...",
    keywords: [...],
    path: "/ruta"
})
        ↓
Next.js genera metadatos automáticamente
        ↓
Opcionalmente: Añade Schema específico
(FAQ, Service, Article, Breadcrumb)
        ↓
npm run build
        ↓
next-sitemap genera:
├── sitemap.xml
└── robots.txt
        ↓
Google rastrea:
├── Metadatos (título, descripción)
├── Schema.org (datos estructurados)
├── Sitemap (todas las URLs)
└── Robots.txt (reglas de rastreo)
        ↓
INDEXACIÓN EN GOOGLE 🎉
```

---

## 📁 Estructura de Archivos del Proyecto

```
web-flor_del_valle/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Homepage.js
│   │   │   ├── Footer.js
│   │   │   └── ✨ StructuredData.js (NUEVO)
│   │   │
│   │   ├── ✨ layout.js (MODIFICADO - SEO + Schema)
│   │   ├── page.js
│   │   └── globals.css
│   │
│   └── lib/
│       ├── supabase.js
│       └── ✨ seo-utils.js (NUEVO - Utilidades SEO)
│
├── public/
│   ├── c-1.jpg ... c-7.jpg
│   ├── inicio.jpg
│   ├── logo_green.png
│   ├── ⚠️ og-image.jpg (CREAR - 1200x630px)
│   ├── 🤖 sitemap.xml (auto-generado)
│   └── 🤖 robots.txt (auto-generado)
│
├── ✨ next-sitemap.config.js (NUEVO)
├── ✨ next.config.mjs (MODIFICADO)
├── ✨ package.json (MODIFICADO - script postbuild)
├── .gitignore (MODIFICADO)
│
└── 📚 DOCUMENTACIÓN SEO (NUEVA)
    ├── SEO-CONFIG.md
    ├── EJEMPLO-PAGINA-SEO.md
    ├── VERIFICACION-SEO.md
    ├── RESUMEN-SEO.md
    └── ESTRUCTURA-SEO.md (este archivo)
```

---

## 🔄 Workflow de Desarrollo con SEO

### 1. Crear Nueva Página de Servicio

```javascript
// src/app/servicios/podas/page.js
import { generatePageMetadata, generateServiceSchema } from '@/lib/seo-utils';

export const metadata = generatePageMetadata({
  title: 'Poda de Árboles en Madrid',
  description: 'Servicio profesional de poda...',
  keywords: ['poda de árboles', 'poda Madrid'],
  path: '/servicios/podas',
});

export default function PodasPage() {
  const schema = generateServiceSchema({
    name: 'Poda de Árboles',
    description: 'Servicio profesional...',
    path: '/servicios/podas',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <h1>Poda de Árboles en Madrid</h1>
        {/* Contenido... */}
      </main>
    </>
  );
}
```

### 2. Build y Deploy

```bash
# Desarrollo local
npm run dev

# Build (genera sitemap + robots)
npm run build

# Preview de producción
npm start

# Deploy (Vercel/Netlify)
git push origin main
```

### 3. Verificación Post-Deploy

```
1. Verificar metadatos:
   └─ Ver código fuente (Ctrl+U)
   
2. Validar Schema.org:
   └─ https://validator.schema.org/
   
3. Probar Rich Results:
   └─ https://search.google.com/test/rich-results
   
4. Verificar rendimiento:
   └─ https://pagespeed.web.dev/
   
5. Google Search Console:
   └─ Enviar sitemap
   └─ Solicitar indexación
```

---

## 🎯 Keywords Targeting

### Keywords Principales (Objetivo: Top 5)
- 🎯 jardinero en Madrid
- 🎯 podas Madrid
- 🎯 mantenimiento de jardines Madrid
- 🎯 diseño de jardines Madrid

### Keywords Secundarias (Objetivo: Top 10)
- poda de árboles Madrid
- jardinería Madrid
- paisajismo Madrid
- cuidado de jardines
- poda de setos

### Long-tail Keywords (Objetivo: Top 3)
- jardinero profesional en Madrid norte
- servicio de poda de árboles económico Madrid
- mantenimiento integral de jardines Madrid
- diseño de jardines con piscina Madrid

---

## 📊 Distribución de Keywords por Página

```
HOMEPAGE (/)
├── Keyword principal: "jardinero en Madrid"
├── H1: "Jardinero Profesional en Madrid"
└── Menciones: podas, mantenimiento, diseño

/servicios/podas
├── Keyword principal: "poda de árboles Madrid"
├── H1: "Poda de Árboles Profesional en Madrid"
└── Menciones: poda de setos, poda de frutales

/servicios/mantenimiento
├── Keyword principal: "mantenimiento de jardines Madrid"
├── H1: "Mantenimiento de Jardines en Madrid"
└── Menciones: cuidado de césped, limpieza de jardines

/servicios/diseno-jardines
├── Keyword principal: "diseño de jardines Madrid"
├── H1: "Diseño de Jardines y Paisajismo en Madrid"
└── Menciones: paisajismo, jardines personalizados
```

---

## 🚀 Plan de Contenido SEO

### Fase 1 - Base (Semana 1-2)
- [x] Configuración técnica (HECHO)
- [ ] Completar datos de contacto
- [ ] Crear og-image.jpg
- [ ] Escribir contenido homepage (300+ palabras)

### Fase 2 - Servicios (Semana 3-4)
- [ ] Crear `/servicios/podas` (400+ palabras)
- [ ] Crear `/servicios/mantenimiento` (400+ palabras)
- [ ] Crear `/servicios/diseno-jardines` (400+ palabras)
- [ ] Añadir FAQs en cada servicio

### Fase 3 - Expansión (Mes 2)
- [ ] Crear página `/sobre-nosotros`
- [ ] Crear página `/contacto`
- [ ] Crear página `/zonas-servicio`
- [ ] Añadir galería de trabajos

### Fase 4 - Blog (Mes 3+)
- [ ] Artículo: "Cuándo podar árboles en Madrid"
- [ ] Artículo: "Calendario de mantenimiento de jardines"
- [ ] Artículo: "Plantas ideales para Madrid"
- [ ] Artículo: "Cómo diseñar un jardín de bajo mantenimiento"

---

## 🔍 Monitoreo y Métricas

### KPIs Importantes

```
SEMANA 1-2:
├── ✅ Sitio verificado en Search Console
├── ✅ Sitemap enviado
└── ✅ Páginas principales indexadas

MES 1:
├── 📊 Impresiones en Google: 100-500
├── 📊 Clics: 5-20
└── 📊 Posición promedio: 30-50

MES 3:
├── 📊 Impresiones: 1,000-2,000
├── 📊 Clics: 50-100
└── 📊 Posición promedio: 10-20

MES 6:
├── 📊 Impresiones: 3,000-5,000
├── 📊 Clics: 150-300
└── 📊 Posición promedio: 5-10
```

---

## 📞 Checklist de Acción Inmediata

### HOY (Obligatorio):
- [ ] Abrir `src/app/layout.js`
- [ ] Completar teléfono (línea 79)
- [ ] Completar email (línea 80)
- [ ] Completar dirección (líneas 83-86)
- [ ] Completar coordenadas GPS (líneas 89-90)
- [ ] Crear imagen `public/og-image.jpg` (1200x630px)

### ESTA SEMANA (Muy Importante):
- [ ] Ejecutar `npm run build`
- [ ] Verificar sitemap y robots en local
- [ ] Desplegar en producción
- [ ] Registrarse en Google Search Console
- [ ] Verificar sitio y enviar sitemap

### PRÓXIMAS 2 SEMANAS (Recomendado):
- [ ] Escribir contenido para homepage (300+ palabras)
- [ ] Crear 3 páginas de servicios
- [ ] Añadir redes sociales en layout.js
- [ ] Conseguir primeras 3-5 reseñas

---

## ✅ Estado Final

```
CONFIGURACIÓN TÉCNICA:     ✅ 100% COMPLETA
METADATOS:                 ✅ 100% CONFIGURADOS
SCHEMA.ORG:                ✅ 100% IMPLEMENTADO
SITEMAP/ROBOTS:            ✅ 100% AUTOMÁTICO
OPTIMIZACIONES:            ✅ 100% APLICADAS

DATOS DE CONTACTO:         ⚠️  PENDIENTE (TÚ)
IMAGEN OG:                 ⚠️  PENDIENTE (TÚ)
VERIFICACIÓN GOOGLE:       ⚠️  PENDIENTE (TÚ)
CONTENIDO DE CALIDAD:      ⚠️  PENDIENTE (TÚ)
```

---

## 🎉 Conclusión

Tu sitio está **técnicamente perfecto** para SEO. 

**Lo único que falta es:**
1. ✍️ Tus datos reales (contacto, ubicación)
2. 🖼️ Una imagen Open Graph
3. 📝 Contenido de calidad
4. 🔍 Verificación en Google

**Todo lo demás está automatizado y listo para funcionar.**

---

**¿Preguntas?** Revisa la documentación:
- `SEO-CONFIG.md` - Guía completa
- `EJEMPLO-PAGINA-SEO.md` - Ejemplos de código
- `VERIFICACION-SEO.md` - Checklist detallado
- `RESUMEN-SEO.md` - Resumen ejecutivo
