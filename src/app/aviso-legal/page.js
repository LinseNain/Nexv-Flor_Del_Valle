import Link from 'next/link';
import { Scale, ArrowLeft, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Flor Del Valle - Información legal sobre el uso del sitio web.',
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Scale className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Aviso Legal</h1>
              <p className="text-white/80 mt-2">Condiciones de uso del sitio web</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          
          {/* Identificación */}
          <section className="bg-green-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datos Identificativos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de 
              la Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
            </p>
            <div className="space-y-3 bg-white rounded-lg p-4">
              <p className="text-gray-700"><strong>Titular:</strong> Flor Del Valle (Trabajador Autónomo)</p>
              <p className="text-gray-700"><strong>Actividad:</strong> Servicios de jardinería, podas y mantenimiento de jardines</p>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>Email:</strong> jdra.flordelvalle@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>Teléfono:</strong> +34 665 764 488</p>
              </div>
              <p className="text-gray-700"><strong>Domicilio:</strong> Alcobendas, Madrid (28100)</p>
              <p className="text-gray-700"><strong>Web:</strong> www.flordelvallej.com</p>
            </div>
          </section>

          {/* Objeto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objeto</h2>
            <p className="text-gray-700 leading-relaxed">
              El presente aviso legal regula el uso y utilización del sitio web <strong>www.flordelvallej.com</strong>, 
              del que es titular <strong>Flor Del Valle</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena 
              y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir 
              modificaciones.
            </p>
          </section>

          {/* Uso del Sitio */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de Uso</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través 
              del sitio web y a no emplearlos para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo o de apología del terrorismo.</li>
              <li>Provocar daños en los sistemas físicos y lógicos del titular, sus proveedores o terceras personas.</li>
              <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas que puedan causar daños.</li>
              <li>Intentar acceder y utilizar las cuentas de correo electrónico de otros usuarios.</li>
            </ul>
          </section>

          {/* Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Exclusión de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El titular no se hace responsable de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>La continuidad y disponibilidad de los contenidos.</li>
              <li>La ausencia de errores en dichos contenidos ni de la corrección de cualquier defecto.</li>
              <li>La ausencia de virus y/o demás componentes dañinos.</li>
              <li>Los daños o perjuicios que cause cualquier persona que vulnere los sistemas de seguridad.</li>
            </ul>
          </section>

          {/* Propiedad Intelectual */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual e Industrial</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, diseño, código fuente, etc.) 
              son propiedad de <strong>Flor Del Valle</strong> o de terceros a los que se ha obtenido autorización para su uso, 
              y están protegidos por derechos de Propiedad Intelectual e Industrial.
            </p>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700">
                <strong>Queda prohibido:</strong> Reproducir, copiar, distribuir, transformar o modificar los contenidos 
                sin autorización expresa del titular, salvo para uso personal y privado.
              </p>
            </div>
          </section>

          {/* Enlaces */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Enlaces a Terceros</h2>
            <p className="text-gray-700 leading-relaxed">
              Este sitio web puede contener enlaces a sitios web de terceros. El titular no asume ninguna responsabilidad 
              derivada de la conexión o contenidos de los enlaces de terceros a los que se hace referencia.
            </p>
          </section>

          {/* Protección de Datos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Protección de Datos Personales</h2>
            <p className="text-gray-700 leading-relaxed">
              Para conocer cómo tratamos sus datos personales, consulte nuestra{' '}
              <Link href="/politica-privacidad" className="text-green-600 hover:underline font-semibold">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Política de Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Este sitio web utiliza cookies. Puede consultar toda la información en nuestra{' '}
              <Link href="/politica-cookies" className="text-green-600 hover:underline font-semibold">
                Política de Cookies
              </Link>.
            </p>
          </section>

          {/* Legislación */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Legislación Aplicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier 
              conflicto derivado de la interpretación o aplicación de las presentes condiciones, las partes se 
              someten a los Juzgados y Tribunales de Madrid.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-green-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para cualquier duda o sugerencia sobre este Aviso Legal, puede contactar con nosotros:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">📧 Email: jdra.flordelvalle@gmail.com</p>
              <p className="text-gray-700">📞 Teléfono: +34 665 764 488</p>
            </div>
          </section>

          {/* Footer Links */}
          <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
            <Link href="/politica-privacidad" className="text-green-600 hover:underline font-semibold text-sm">
              Política de Privacidad
            </Link>
            <Link href="/politica-cookies" className="text-green-600 hover:underline font-semibold text-sm">
              Política de Cookies
            </Link>
            <Link href="/" className="text-green-600 hover:underline font-semibold text-sm">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
