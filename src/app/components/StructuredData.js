/**
 * Componente para insertar datos estructurados (Schema.org JSON-LD)
 * Uso: <StructuredData data={jsonLdObject} />
 */
export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
