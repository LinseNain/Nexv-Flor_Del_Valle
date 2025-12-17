# ✅ CHECKLIST DE VERIFICACIÓN SEO - Flor Del Valle

## 🎯 Estado de Implementación

### ✅ **COMPLETADO AUTOMÁTICAMENTE**

#### 1. Configuración Técnica
- [x] Next.js 16 configurado con App Router
- [x] `next-sitemap` instalado y configurado
- [x] Build script con generación automática de sitemap
- [x] Compresión activada
- [x] Headers de seguridad configurados
- [x] Optimización de imágenes (AVIF, WebP)
- [x] `X-Powered-By` header removido

#### 2. Metadatos SEO
- [x] Meta título optimizado: "Flor Del Valle | Jardinero en Madrid - Podas y Mantenimiento de Jardines"
- [x] Meta descripción con keywords principales
- [x] Keywords configuradas: jardinero en Madrid, podas, mantenimiento de jardines, etc.
- [x] Open Graph (Facebook, WhatsApp, LinkedIn)
- [x] Twitter Cards
- [x] Canonical URLs automáticas
- [x] Template para títulos dinámicos
- [x] Language tag: es_ES

#### 3. Schema.org (Datos Estructurados)
- [x] LocalBusiness Schema en layout principal
- [x] Servicios estructurados (hasOfferCatalog)
- [x] Horarios de apertura (openingHoursSpecification)
- [x] Área de servicio (Madrid)
- [x] Utilidades para schemas dinámicos creadas
- [x] Funciones para FAQ Schema
- [x] Funciones para Article Schema
- [x] Funciones para Breadcrumb Schema
- [x] Funciones para Service Schema

#### 4. Sitemap y Robots.txt
- [x] `next-sitemap.config.js` configurado
- [x] Generación automática en cada build
- [x] Prioridades personalizadas (1.0 para home, 0.9 para servicios)
- [x] Changefreq configurado
- [x] Robots.txt optimizado para Googlebot
- [x] Robots.txt permite Googlebot-Image
- [x] Exclusión de /api/ y /admin/
- [x] Sitemap URL incluida en robots.txt

#### 5. Archivos de Utilidad
- [x] `src/lib/seo-utils.js` - Funciones reutilizables
- [x] `src/app/components/StructuredData.js` - Componente para JSON-LD
- [x] `SEO-CONFIG.md` - Documentación completa
- [x] `EJEMPLO-PAGINA-SEO.md` - Ejemplos prácticos
- [x] `.gitignore` actualizado

---

## ⚠️ **PENDIENTE - DEBES COMPLETAR**

### 📍 A. Información de Contacto (PRIORIDAD ALTA)

**Archivo:** `src/app/layout.js` (líneas 79-92)

```javascript
// ACTUAL (placeholder)
telephone: '+34-XXX-XXX-XXX',
email: 'info@flordelvallej.com',
address: {
  streetAddress: '',
  postalCode: '',
}
geo: {
  latitude: 40.4168,
  longitude: -3.7038,
}
```

**ACCIÓN REQUERIDA:**
1. Reemplaza `+34-XXX-XXX-XXX` con tu número real
2. Verifica o cambia el email `info@flordelvallej.com`
3. Añade tu dirección completa en `streetAddress`
4. Añade tu código postal
5. Obtén tus coordenadas exactas en Google Maps y actualiza `latitude` y `longitude`

---

### 🌐 B. Redes Sociales (PRIORIDAD MEDIA)

**Archivo:** `src/app/layout.js` (líneas 118-122)

```javascript
// ACTUAL (comentado)
sameAs: [
  // 'https://www.facebook.com/flordelvalle',
  // 'https://www.instagram.com/flordelvalle',
]
```

**ACCIÓN REQUERIDA:**
1. Crea perfiles en redes sociales si no los tienes
2. Descomenta y añade las URLs reales:
   - Facebook
   - Instagram
   - Twitter/X (opcional)
   - LinkedIn (opcional)

---

### ⭐ C. Valoraciones y Reseñas (PRIORIDAD MEDIA)

**Archivo:** `src/app/layout.js` (líneas 151-155)

```javascript
// ACTUAL (valores de ejemplo)
aggregateRating: {
  ratingValue: '5',
  reviewCount: '10',
}
```

**ACCIÓN REQUERIDA:**
1. Si tienes reseñas reales de Google My Business, úsalas
2. Si no, elimina esta sección temporalmente (Google penaliza datos falsos)
3. Pide reseñas a tus clientes reales

---

### 🖼️ D. Imagen Open Graph (PRIORIDAD ALTA)

**Acción:** Crear imagen `public/og-image.jpg`

**Especificaciones:**
- **Dimensiones:** 1200 x 630 píxeles (exacto)
- **Peso:** Máximo 300KB
- **Formato:** JPG o PNG
- **Contenido sugerido:**
  - Logo de Flor Del Valle
  - Texto: "Jardinero en Madrid"
  - Imagen de fondo: jardín o herramientas
  - Colores: Verde (jardinería) + Blanco

**Herramientas gratuitas:**
- Canva: https://www.canva.com
- Figma: https://www.figma.com
- Adobe Express: https://www.adobe.com/express

---

### 🔍 E. Verificación en Buscadores (PRIORIDAD ALTA)

**Archivo:** `src/app/layout.js` (líneas 70-75)

```javascript
// ACTUAL (sin códigos)
verification: {
  // google: 'tu-codigo-de-verificacion-google',
  // bing: 'tu-codigo-de-verificacion-bing',
}
```

**PASOS:**

#### 1. Google Search Console
1. Ve a: https://search.google.com/search-console
2. Añade tu propiedad: `https://www.flordelvallej.com`
3. Elige método: "Etiqueta HTML"
4. Copia el código que te da Google
5. Pégalo en `verification.google`
6. Haz `npm run build && npm start`
7. Verifica en Google Search Console

#### 2. Bing Webmaster Tools (opcional)
1. Ve a: https://www.bing.com/webmasters
2. Añade tu sitio
3. Obtén el código de verificación
4. Pégalo en `verification.bing`

#### 3. Enviar Sitemap
Después de verificar, envía el sitemap:
- URL: `https://www.flordelvallej.com/sitemap.xml`
- En Google Search Console: Sitemaps → Añadir sitemap

---

### 📝 F. Contenido de Calidad (PRIORIDAD CRÍTICA)

Google necesita contenido para posicionarte. **Mínimo requerido:**

#### Página Principal (/)
- [ ] H1 con "Jardinero en Madrid" o similar
- [ ] Mínimo 300 palabras de contenido único
- [ ] Descripción de servicios principales
- [ ] Mención de "podas", "mantenimiento de jardines"
- [ ] Zona de servicio clara (Madrid)
- [ ] Teléfono visible
- [ ] Call-to-action

#### Páginas de Servicios (crear)
Usa los ejemplos en `EJEMPLO-PAGINA-SEO.md`

**Recomendado crear:**
1. `/servicios/podas` - 400+ palabras
2. `/servicios/mantenimiento` - 400+ palabras
3. `/servicios/diseno-jardines` - 400+ palabras

Cada página debe tener:
- H1 único con keyword
- Contenido original (NO copiado)
- Imágenes con `alt` descriptivo
- FAQ si es posible
- Links internos

---

## 🔍 VERIFICACIÓN POST-IMPLEMENTACIÓN

### 1. Verificar Metadatos

**Abrir en navegador:**
```
https://www.flordelvallej.com
```

**Ver código fuente (Ctrl+U) y buscar:**
- `<title>Flor Del Valle | Jardinero en Madrid`
- `<meta name="description"`
- `<meta property="og:title"`
- `<script type="application/ld+json"` (debe aparecer Schema.org)

---

### 2. Verificar Sitemap y Robots.txt

**URLs a probar:**
```
https://www.flordelvallej.com/sitemap.xml
https://www.flordelvallej.com/robots.txt
```

**El sitemap debe mostrar:**
- Lista de URLs de tu sitio
- Prioridad de cada página
- Fecha de última modificación

**El robots.txt debe mostrar:**
- `User-agent: *`
- `Allow: /`
- `Sitemap: https://www.flordelvallej.com/sitemap.xml`

---

### 3. Validar Schema.org

**Herramienta:** https://validator.schema.org/

**Pasos:**
1. Ir a la URL
2. Pegar el código HTML de tu página
3. Verificar que no haya errores
4. Debe mostrar: "LocalBusiness", "Service", etc.

**Herramienta Google:** https://search.google.com/test/rich-results

1. Ingresa tu URL
2. Espera el análisis
3. Verifica que detecte los datos estructurados

---

### 4. Verificar Rendimiento

**PageSpeed Insights:** https://pagespeed.web.dev/

1. Ingresa: `https://www.flordelvallej.com`
2. Espera el análisis
3. **Objetivo:** Puntuación > 90 en móvil y desktop
4. Si hay problemas, revisa:
   - Optimización de imágenes
   - Lazy loading
   - Compresión

---

### 5. Verificar Mobile-Friendly

**Google Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

1. Ingresa tu URL
2. Verifica que sea "Mobile-friendly"
3. Si no lo es, revisa el diseño responsive

---

## 📊 MONITOREO CONTINUO

### Cada Semana
- [ ] Revisar Google Search Console
- [ ] Verificar errores de rastreo
- [ ] Comprobar páginas indexadas

### Cada Mes
- [ ] Analizar posiciones de keywords
- [ ] Revisar rendimiento del sitio
- [ ] Añadir nuevo contenido (blog)

### Herramientas Recomendadas
1. **Google Search Console** - Gratis, esencial
2. **Google Analytics** - Gratis, para tráfico
3. **Ubersuggest** - Gratis, para keywords
4. **AnswerThePublic** - Gratis, para ideas de contenido

---

## 🚨 ERRORES COMUNES A EVITAR

### ❌ NO HAGAS ESTO:
1. **Copiar contenido** de otras webs (Google te penaliza)
2. **Rellenar keywords** sin sentido (keyword stuffing)
3. **Usar datos falsos** en Schema.org (valoraciones, dirección)
4. **Ignorar el móvil** (60% del tráfico es móvil)
5. **Olvidar el sitemap** en Google Search Console
6. **Tener contenido duplicado** en varias páginas
7. **No optimizar imágenes** (pueden ralentizar el sitio)

### ✅ SÍ HACES ESTO:
1. **Escribe contenido original** y útil
2. **Usa keywords naturalmente** en el texto
3. **Completa todos los datos** de contacto reales
4. **Optimiza todas las imágenes** (usa next/image)
5. **Pide reseñas** a clientes satisfechos
6. **Crea contenido regularmente** (blog mensual)
7. **Monitorea Search Console** semanalmente

---

## 📞 SIGUIENTE PASO INMEDIATO

### Orden de prioridad:

1. **AHORA (Hoy):**
   - [ ] Completar datos de contacto en `layout.js`
   - [ ] Crear imagen `og-image.jpg`
   - [ ] Verificar que el sitio esté desplegado

2. **ESTA SEMANA:**
   - [ ] Verificar en Google Search Console
   - [ ] Enviar sitemap
   - [ ] Escribir contenido para página principal (300+ palabras)

3. **PRÓXIMAS 2 SEMANAS:**
   - [ ] Crear páginas de servicios (podas, mantenimiento, diseño)
   - [ ] Añadir FAQs
   - [ ] Conseguir primeras reseñas

4. **PRIMER MES:**
   - [ ] Crear perfil Google My Business
   - [ ] Registrar en directorios locales
   - [ ] Escribir primer artículo de blog

---

## 🎯 OBJETIVO FINAL

**Posicionarte en Google para:**
- "jardinero en Madrid"
- "poda de árboles Madrid"
- "mantenimiento de jardines Madrid"
- "paisajismo Madrid"

**Meta realista:**
- Mes 1-2: Aparecer en resultados (posición 20-50)
- Mes 3-4: Top 10 para keywords long-tail
- Mes 6+: Top 5 para keywords principales

---

## ✅ CONFIRMACIÓN FINAL

Después de completar todo:

```bash
# 1. Instalar dependencias (ya hecho)
npm install

# 2. Build para generar sitemap
npm run build

# 3. Iniciar servidor
npm start

# 4. Verificar en navegador
# - https://www.flordelvallej.com
# - https://www.flordelvallej.com/sitemap.xml
# - https://www.flordelvallej.com/robots.txt
```

---

**¡Tu sitio está configurado para triunfar en Google! 🚀**

Ahora solo necesitas:
1. Completar tus datos reales
2. Crear contenido de calidad
3. Ser paciente (SEO toma 2-3 meses en mostrar resultados)
