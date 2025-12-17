# 🚀 Configuración SEO Completa - Flor Del Valle

## ✅ **¿Qué se ha implementado automáticamente?**

### 1. **Metadatos Optimizados** ✓
- ✅ Títulos dinámicos con template
- ✅ Descripciones optimizadas con palabras clave
- ✅ Keywords: "jardinero en Madrid", "podas", "mantenimiento de jardines", etc.
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Canonical URLs automáticas
- ✅ Metadatos base configurados en `src/app/layout.js`

### 2. **Schema.org (JSON-LD)** ✓
- ✅ LocalBusiness Schema implementado en layout principal
- ✅ Información de servicios estructurada
- ✅ Horarios de apertura
- ✅ Área de servicio (Madrid)
- ✅ Utilidades para schemas dinámicos en `src/lib/seo-utils.js`

### 3. **Sitemap y Robots.txt** ✓
- ✅ Configuración de `next-sitemap` en `next-sitemap.config.js`
- ✅ Generación automática en cada build
- ✅ Prioridades personalizadas por tipo de página
- ✅ Robots.txt optimizado para Googlebot

### 4. **Optimizaciones Técnicas** ✓
- ✅ Compresión activada
- ✅ Headers de seguridad configurados
- ✅ Imágenes optimizadas (AVIF, WebP)
- ✅ No exponer `X-Powered-By`
- ✅ DNS Prefetch activado

---

## 📝 **TAREAS QUE DEBES COMPLETAR (MÍNIMO REQUERIDO)**

### **A. Información de Contacto** (en `src/app/layout.js` líneas 79-92)

```javascript
telephone: '+34-XXX-XXX-XXX', // ⚠️ REEMPLAZA con tu número real
email: 'info@flordelvallej.com', // ⚠️ Verifica o cambia el email
address: {
  streetAddress: '', // ⚠️ AÑADE tu dirección completa
  postalCode: '', // ⚠️ AÑADE tu código postal
}
geo: {
  latitude: 40.4168, // ⚠️ CAMBIA a tus coordenadas exactas
  longitude: -3.7038, // ⚠️ Usa Google Maps para obtenerlas
}
```

### **B. Redes Sociales** (en `src/app/layout.js` línea 118-121)

```javascript
sameAs: [
  // ⚠️ DESCOMENTA y añade tus URLs reales
  // 'https://www.facebook.com/tuPagina',
  // 'https://www.instagram.com/tuCuenta',
  // 'https://twitter.com/tuCuenta',
]
```

### **C. Reseñas y Valoraciones** (en `src/app/layout.js` líneas 151-155)

```javascript
aggregateRating: {
  ratingValue: '5', // ⚠️ CAMBIA a tu valoración real
  reviewCount: '10', // ⚠️ CAMBIA al número real de reseñas
}
```

### **D. Imagen Open Graph** (CREAR IMAGEN)

📸 **Crea una imagen**: `public/og-image.jpg`
- **Dimensiones**: 1200 x 630 píxeles
- **Contenido sugerido**: Logo + texto "Jardinero en Madrid | Flor Del Valle"
- **Formato**: JPG o PNG
- **Peso**: < 300KB

### **E. Verificación de Motores de Búsqueda** (en `src/app/layout.js` líneas 70-75)

Después de obtener los códigos de verificación:

```javascript
verification: {
  google: 'tu-codigo-aqui', // Google Search Console
  bing: 'tu-codigo-aqui',   // Bing Webmaster Tools
}
```

---

## 🔧 **Instalación de Dependencias**

Ejecuta este comando para instalar `next-sitemap`:

```bash
npm install --save-dev next-sitemap
```

---

## 🚀 **Cómo usar**

### 1️⃣ **Para generar Sitemap y Robots.txt**

```bash
npm run build
```

Esto creará automáticamente:
- `public/sitemap.xml`
- `public/robots.txt`

### 2️⃣ **Para crear páginas con SEO dinámico**

Usa las utilidades en `src/lib/seo-utils.js`:

**Ejemplo: Página de servicios**

```javascript
// src/app/servicios/podas/page.js
import { generatePageMetadata } from '@/lib/seo-utils';

export const metadata = generatePageMetadata({
  title: 'Poda de Árboles Profesional en Madrid',
  description: 'Servicio de poda de árboles, setos y arbustos en Madrid...',
  keywords: ['poda de árboles', 'poda de setos', 'jardinero poda Madrid'],
  path: '/servicios/podas',
});

export default function PodasPage() {
  return <div>Contenido...</div>;
}
```

### 3️⃣ **Para añadir FAQ Schema (muy bueno para SEO)**

```javascript
import { generateFAQSchema } from '@/lib/seo-utils';

const faqs = [
  {
    question: '¿Cuánto cuesta el mantenimiento de jardines?',
    answer: 'Los precios varían según el tamaño...'
  },
  // más preguntas...
];

const faqSchema = generateFAQSchema(faqs);

// En el componente:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

---

## 📊 **Verificación de Indexación**

### **Herramientas que debes usar:**

1. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Verifica tu sitio usando el código de `metadata.verification.google`
   - Envía tu sitemap: `https://www.flordelvallej.com/sitemap.xml`

2. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Prueba tu sitio después del deploy

3. **Schema Markup Validator**
   - URL: https://validator.schema.org/
   - Verifica que tu JSON-LD sea correcto

4. **Rich Results Test (Google)**
   - URL: https://search.google.com/test/rich-results
   - Verifica que Google pueda leer tus datos estructurados

### **Comandos de búsqueda útiles:**

```
site:flordelvallej.com
```
Para ver cuántas páginas están indexadas

```
site:flordelvallej.com "jardinero en Madrid"
```
Para verificar si Google asocia tu keyword con tu sitio

---

## 🎯 **Checklist de Contenido Mínimo**

Para que Google te posicione bien, necesitas:

### ✅ **Página Principal (Home)**
- [ ] H1 con "Jardinero en Madrid" o similar
- [ ] Al menos 300 palabras de contenido único
- [ ] Mención de servicios principales (podas, mantenimiento)
- [ ] Zona de servicio claramente indicada (Madrid)
- [ ] Call-to-action (teléfono, formulario)

### ✅ **Páginas de Servicios** (crear si no existen)
- [ ] `/servicios/podas` - 400+ palabras sobre poda de árboles
- [ ] `/servicios/mantenimiento` - 400+ palabras sobre mantenimiento
- [ ] `/servicios/diseno-jardines` - 400+ palabras sobre diseño

Cada página debe:
- Tener H1 único con keyword
- 400-800 palabras de contenido original
- Imágenes con `alt` descriptivo
- Links internos a otras páginas

### ✅ **Página de Contacto**
- [ ] Dirección física
- [ ] Teléfono
- [ ] Email
- [ ] Horario de atención
- [ ] Mapa de Google Maps embebido

### ✅ **Blog (Opcional pero recomendado)**
Artículos como:
- "Cuándo podar árboles en Madrid"
- "Calendario de mantenimiento de jardines"
- "Plantas ideales para el clima de Madrid"

---

## 🚫 **Problemas Comunes y Soluciones**

### ❌ **Google no indexa mi sitio**

1. Verifica `robots.txt` en: `https://www.flordelvallej.com/robots.txt`
2. Debe permitir Googlebot
3. Envía el sitemap manualmente en Search Console

### ❌ **El sitemap no se genera**

1. Verifica que instalaste `next-sitemap`:
   ```bash
   npm install --save-dev next-sitemap
   ```

2. Ejecuta build:
   ```bash
   npm run build
   ```

### ❌ **Schema.org no es válido**

Usa el validador: https://validator.schema.org/
Copia el HTML generado y pégalo allí.

---

## 📈 **Próximos Pasos para Mejorar el SEO**

1. **Crea contenido de calidad** (lo más importante)
2. **Añade un blog** con artículos sobre jardinería
3. **Consigue backlinks** (directorios locales, asociaciones)
4. **Optimiza velocidad** (usa Next.js Image, lazy loading)
5. **Pide reseñas** en Google My Business
6. **Añade imágenes con alt text** descriptivos
7. **Implementa breadcrumbs** usando `generateBreadcrumbSchema`

---

## 🎉 **Resumen**

### **YA ESTÁ HECHO:**
✅ Metadatos optimizados con keywords
✅ Schema.org (LocalBusiness)
✅ Sitemap.xml automático
✅ Robots.txt optimizado
✅ Headers de seguridad
✅ Optimización de imágenes

### **TÚ DEBES HACER:**
⚠️ Completar datos de contacto (teléfono, dirección)
⚠️ Añadir redes sociales
⚠️ Crear imagen OG (1200x630px)
⚠️ Verificar en Google Search Console
⚠️ Escribir contenido de calidad (300+ palabras por página)

### **Comandos importantes:**

```bash
# Instalar dependencias
npm install --save-dev next-sitemap

# Desarrollo
npm run dev

# Build (genera sitemap y robots.txt)
npm run build

# Preview de producción
npm start
```

---

**¡Todo está configurado para que Google te ame! 🚀**

Ahora solo necesitas completar tus datos y crear buen contenido.
