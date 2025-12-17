import Link from 'next/link';
import { Shield, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de Flor Del Valle conforme al RGPD.',
};

export default function PoliticaPrivacidad() {
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
              <Shield className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Política de Privacidad</h1>
              <p className="text-white/80 mt-2">Última actualización: Diciembre 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información al Usuario</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Flor Del Valle</strong> (en adelante, "el Responsable") le informa sobre su Política de Privacidad 
              respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser 
              recabados durante la navegación a través del sitio web <strong>www.flordelvallej.com</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En este sentido, el Responsable garantiza el cumplimiento de la normativa vigente en materia de protección 
              de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos 
              Personales y garantía de los derechos digitales (LOPD GDD) y el Reglamento (UE) 2016/679 del Parlamento 
              Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
            </p>
          </section>

          {/* Responsable */}
          <section className="bg-green-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable del Tratamiento</h2>
            <div className="space-y-3">
              <p className="text-gray-700"><strong>Responsable:</strong> Flor Del Valle (Autónomo)</p>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                <p className="text-gray-700"><strong>Email:</strong> jdra.flordelvalle@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-green-600 mt-0.5" />
                <p className="text-gray-700"><strong>Teléfono:</strong> +34 665 764 488</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                <p className="text-gray-700"><strong>Ubicación:</strong> Alcobendas, Madrid (28100)</p>
              </div>
              <p className="text-gray-700"><strong>Sitio web:</strong> www.flordelvallej.com</p>
            </div>
          </section>

          {/* Principios */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Principios Aplicables</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El tratamiento de los datos personales del Usuario se someterá a los siguientes principios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Licitud, lealtad y transparencia:</strong> se requerirá consentimiento del Usuario.</li>
              <li><strong>Limitación de la finalidad:</strong> recogidos con fines determinados, explícitos y legítimos.</li>
              <li><strong>Minimización de datos:</strong> solo los estrictamente necesarios.</li>
              <li><strong>Exactitud:</strong> datos exactos y actualizados.</li>
              <li><strong>Limitación del plazo de conservación:</strong> mantenidos durante el tiempo necesario.</li>
              <li><strong>Integridad y confidencialidad:</strong> tratados de manera segura.</li>
            </ul>
          </section>

          {/* Datos Recogidos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Datos Personales Recogidos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para la prestación de los servicios, el Responsable podrá solicitar los siguientes datos:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-gray-900 mb-2">Formulario de Contacto:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Nombre y apellidos</li>
                <li>Teléfono de contacto</li>
                <li>Correo electrónico</li>
                <li>Mensaje/consulta</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Finalidad:</strong> Responder a sus consultas, gestionar presupuestos y establecer comunicación 
              comercial relacionada con nuestros servicios de jardinería.
            </p>
          </section>

          {/* Base Legal */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base Legal para el Tratamiento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La base legal para el tratamiento de sus datos personales es:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Consentimiento del interesado:</strong> al rellenar el formulario de contacto.</li>
              <li><strong>Ejecución de un contrato:</strong> al solicitar presupuesto o contratar servicios.</li>
              <li><strong>Interés legítimo:</strong> para comunicaciones comerciales de servicios similares.</li>
            </ul>
          </section>

          {/* Conservación */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Conservación de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Los datos personales se conservarán mientras exista una relación comercial o durante el tiempo necesario 
              para cumplir con las obligaciones legales. Los datos proporcionados se conservarán:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Mientras no se solicite su supresión por el interesado.</li>
              <li>Durante los años necesarios para cumplir con obligaciones legales (fiscales, mercantiles).</li>
            </ul>
          </section>

          {/* Derechos */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Derechos del Usuario (ARCOPOL)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales 
              que les conciernan. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Acceso:</strong> derecho a acceder a sus datos personales.</li>
              <li><strong>Rectificación:</strong> derecho a solicitar la rectificación de datos inexactos.</li>
              <li><strong>Supresión (Derecho al olvido):</strong> derecho a solicitar la eliminación de datos.</li>
              <li><strong>Oposición:</strong> derecho a oponerse al tratamiento de datos.</li>
              <li><strong>Limitación:</strong> derecho a solicitar la limitación del tratamiento.</li>
              <li><strong>Portabilidad:</strong> derecho a recibir datos en formato estructurado.</li>
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
              <p className="font-bold text-gray-900 mb-2">¿Cómo ejercer tus derechos?</p>
              <p className="text-gray-700 text-sm">
                Enviando un correo electrónico a <strong>jdra.flordelvalle@gmail.com</strong> con copia de tu DNI 
                o documento identificativo equivalente, indicando el derecho que deseas ejercer.
              </p>
            </div>
            <p className="text-gray-700 text-sm mt-4">
              <strong>Derecho a reclamar:</strong> Si considera que no se han tratado sus datos conforme a la 
              normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos 
              (www.aepd.es).
            </p>
          </section>

          {/* Destinatarios */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Destinatarios de los Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Los datos personales <strong>no se cederán a terceros</strong>, salvo obligación legal. 
              Pueden ser compartidos con:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Proveedores de servicios tecnológicos (hosting, email).</li>
              <li>Administraciones públicas cuando exista obligación legal.</li>
            </ul>
          </section>

          {/* Seguridad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Medidas de Seguridad</h2>
            <p className="text-gray-700 leading-relaxed">
              El Responsable tratará los datos del Usuario en todo momento de forma confidencial y guardando 
              el preceptivo deber de secreto respecto de los mismos, adoptando las medidas técnicas y 
              organizativas necesarias para garantizar la seguridad de sus datos y evitar su alteración, 
              pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Este sitio web utiliza cookies. Puede consultar toda la información sobre las cookies utilizadas 
              en nuestra <Link href="/politica-cookies" className="text-green-600 hover:underline font-semibold">Política de Cookies</Link>.
            </p>
          </section>

          {/* Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificaciones</h2>
            <p className="text-gray-700 leading-relaxed">
              El Responsable se reserva el derecho de modificar la presente política para adaptarla a novedades 
              legislativas o jurisprudenciales. En dichos supuestos, se anunciará en esta página los cambios 
              introducidos con antelación a su puesta en práctica.
            </p>
          </section>

          {/* Footer Links */}
          <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
            <Link href="/aviso-legal" className="text-green-600 hover:underline font-semibold text-sm">
              Aviso Legal
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
