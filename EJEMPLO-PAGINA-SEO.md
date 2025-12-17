# 📄 Ejemplo: Cómo crear una página con SEO optimizado

## Estructura de carpetas para nuevas páginas

```
src/app/
├── servicios/
│   ├── podas/
│   │   └── page.js          ← Página de podas
│   ├── mantenimiento/
│   │   └── page.js          ← Página de mantenimiento
│   └── page.js              ← Página principal de servicios
```

---

## 🎯 Ejemplo 1: Página de Servicios de Podas

Crea el archivo: `src/app/servicios/podas/page.js`

```javascript
import { generatePageMetadata, generateServiceSchema } from '@/lib/seo-utils';

// Metadatos de la página (obligatorio para SEO)
export const metadata = generatePageMetadata({
  title: 'Poda de Árboles Profesional en Madrid | Poda de Setos',
  description: 'Servicio profesional de poda de árboles, setos y arbustos en Madrid. Técnicas expertas para el cuidado y salud de tus plantas. Presupuesto sin compromiso.',
  keywords: [
    'poda de árboles Madrid',
    'poda de setos',
    'poda de arbustos',
    'jardinero poda',
    'poda profesional',
  ],
  path: '/servicios/podas',
  image: '/servicios/podas-og.jpg', // Opcional: imagen específica
});

export default function PodasPage() {
  // Schema para el servicio
  const serviceSchema = generateServiceSchema({
    name: 'Poda de Árboles y Setos',
    description: 'Servicio profesional de poda de árboles, setos y arbustos en Madrid con técnicas especializadas.',
    path: '/servicios/podas',
  });

  return (
    <div className="min-h-screen">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Contenido de la página */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* H1 - MUY IMPORTANTE para SEO */}
        <h1 className="text-4xl font-bold mb-6">
          Poda de Árboles Profesional en Madrid
        </h1>

        {/* Contenido principal - mínimo 400 palabras */}
        <div className="prose lg:prose-xl">
          <p>
            En <strong>Flor Del Valle</strong> somos especialistas en{' '}
            <strong>poda de árboles en Madrid</strong> con más de 25 años de experiencia.
            Nuestro servicio de poda profesional garantiza la salud y estética de tus árboles,
            setos y arbustos.
          </p>

          <h2>¿Por qué es importante la poda?</h2>
          <p>
            La poda de árboles no es solo una cuestión estética. Una poda profesional:
          </p>
          <ul>
            <li>Mejora la salud del árbol eliminando ramas enfermas</li>
            <li>Previene caídas de ramas peligrosas</li>
            <li>Estimula el crecimiento adecuado</li>
            <li>Mantiene la forma y estética deseada</li>
          </ul>

          <h2>Nuestros Servicios de Poda</h2>
          
          <h3>1. Poda de Árboles Ornamentales</h3>
          <p>
            Especialistas en poda de árboles ornamentales respetando su forma natural.
            Utilizamos técnicas profesionales que garantizan el crecimiento saludable.
          </p>

          <h3>2. Poda de Setos y Arbustos</h3>
          <p>
            Mantenimiento y formación de setos para delimitar espacios y crear
            diseños personalizados en tu jardín.
          </p>

          <h3>3. Poda de Frutales</h3>
          <p>
            Poda especializada en árboles frutales para maximizar la producción
            de frutos y mantener la salud del árbol.
          </p>

          <h2>¿Cuándo es el mejor momento para podar?</h2>
          <p>
            En Madrid, las mejores épocas para la poda son:
          </p>
          <ul>
            <li><strong>Invierno</strong> (Diciembre-Febrero): Ideal para árboles de hoja caduca</li>
            <li><strong>Primavera</strong> (Marzo-Abril): Para dar forma a setos y arbustos</li>
            <li><strong>Verano</strong> (Junio-Julio): Poda de mantenimiento ligera</li>
          </ul>

          <h2>Presupuesto sin Compromiso</h2>
          <p>
            Solicita tu presupuesto gratuito para servicios de poda en Madrid.
            Nos adaptamos a las necesidades de tu jardín.
          </p>

          {/* Call to Action */}
          <div className="bg-green-100 p-6 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas un Jardinero Profesional?
            </h3>
            <p className="mb-4">
              Contacta con nosotros para un presupuesto personalizado de poda en Madrid.
            </p>
            <a
              href="tel:+34XXXXXXXXX"
              className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-green-700"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
```

---

## 🎯 Ejemplo 2: Página con FAQs (Muy bueno para SEO)

Crea el archivo: `src/app/servicios/mantenimiento/page.js`

```javascript
import { generatePageMetadata, generateFAQSchema } from '@/lib/seo-utils';

export const metadata = generatePageMetadata({
  title: 'Mantenimiento de Jardines en Madrid | Servicio Integral',
  description: 'Servicio completo de mantenimiento de jardines en Madrid. Cuidado profesional de césped, plantas y zonas verdes. Jardinero experto todo el año.',
  keywords: [
    'mantenimiento de jardines Madrid',
    'cuidado de jardines',
    'jardinero mantenimiento',
    'servicio jardinería',
  ],
  path: '/servicios/mantenimiento',
});

export default function MantenimientoPage() {
  // FAQs - Google las muestra en resultados de búsqueda
  const faqs = [
    {
      question: '¿Con qué frecuencia debo mantener mi jardín?',
      answer: 'Recomendamos un mantenimiento quincenal en primavera y verano, y mensual en otoño e invierno. Esto incluye corte de césped, riego, y control de plagas.',
    },
    {
      question: '¿Qué incluye el servicio de mantenimiento de jardines?',
      answer: 'Nuestro servicio incluye corte y abonado de césped, poda de setos, limpieza de hojas, control de malas hierbas, riego, y fertilización según temporada.',
    },
    {
      question: '¿Cuánto cuesta el mantenimiento de un jardín en Madrid?',
      answer: 'El precio varía según el tamaño del jardín y la frecuencia del servicio. Ofrecemos presupuestos personalizados sin compromiso. Contacta con nosotros para más información.',
    },
    {
      question: '¿Trabajan durante todo el año?',
      answer: 'Sí, ofrecemos servicios de mantenimiento de jardines durante todo el año, adaptando las tareas a cada estación para garantizar la salud de tu jardín.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen">
      {/* Schema JSON-LD para FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Mantenimiento de Jardines en Madrid
        </h1>

        <p className="text-xl mb-8">
          Servicio integral de <strong>mantenimiento de jardines en Madrid</strong>.
          Cuidamos tu jardín durante todo el año con profesionalidad y dedicación.
        </p>

        {/* Contenido principal... (400+ palabras) */}

        {/* Sección de FAQs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
```

---

## 🎯 Ejemplo 3: Página con Breadcrumbs

```javascript
import { generateBreadcrumbSchema } from '@/lib/seo-utils';

export default function ServicioDetallePage() {
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Podas', path: '/servicios/podas' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs visibles */}
      <nav className="mb-4">
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            {index > 0 && ' > '}
            <a href={item.path}>{item.name}</a>
          </span>
        ))}
      </nav>

      {/* Resto del contenido... */}
    </div>
  );
}
```

---

## ✅ Checklist para cada nueva página

- [ ] **H1 único** con keyword principal
- [ ] **400-800 palabras** de contenido original
- [ ] **Metadatos** usando `generatePageMetadata`
- [ ] **Schema JSON-LD** apropiado (Service, FAQ, Article)
- [ ] **Imágenes** con atributo `alt` descriptivo
- [ ] **Links internos** a otras páginas relevantes
- [ ] **Call-to-Action** (teléfono, formulario, email)
- [ ] **Keywords** naturalmente integradas en el texto
- [ ] **Breadcrumbs** si es una página profunda

---

## 📊 Estructura de Contenido Ideal

```
H1: Keyword Principal (ej: "Poda de Árboles en Madrid")
  └─ Párrafo introductorio con keyword (150-200 palabras)
  
H2: Beneficios / Por qué es importante
  └─ Lista con viñetas
  
H2: Tipos de Servicio
  └─ H3: Servicio 1
  └─ H3: Servicio 2
  └─ H3: Servicio 3
  
H2: Cómo funciona / Proceso
  
H2: Preguntas Frecuentes (FAQ)
  
H2: Call to Action / Contacto
```

---

## 🚀 Próximos pasos

1. Crea las carpetas de servicios principales
2. Copia estos ejemplos adaptándolos a tu contenido
3. Escribe contenido original y útil (no copies de otros sitios)
4. Usa las keywords naturalmente, no las fuerces
5. Añade imágenes reales de tus trabajos con `alt` descriptivo
