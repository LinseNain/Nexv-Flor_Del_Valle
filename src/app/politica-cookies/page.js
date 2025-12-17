import Link from 'next/link';
import { Cookie, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en el sitio web de Flor Del Valle.',
};

export default function PoliticaCookies() {
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
              <Cookie className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Política de Cookies</h1>
              <p className="text-white/80 mt-2">Última actualización: Diciembre 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          
          {/* ¿Qué son las cookies? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario 
              (ordenador, tablet o móvil) cuando navega por Internet. Permiten al sitio web recordar información sobre 
              tu visita, como tu idioma preferido y otras opciones, lo que facilita tu próxima visita y hace que el 
              sitio te resulte más útil.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Las cookies desempeñan un papel muy importante y contribuyen a tener una mejor experiencia de navegación.
            </p>
          </section>

          {/* Tipos de Cookies */}
          <section className="bg-green-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-6">
              {/* Necesarias */}
              <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 text-xs font-black text-green-700">✓</span>
                  Cookies Necesarias (Técnicas)
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Finalidad:</strong> Son esenciales para el funcionamiento del sitio web. Sin ellas, 
                  ciertos servicios no pueden prestarse.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Cookies utilizadas:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• <strong>cookieConsent:</strong> Almacena las preferencias de cookies del usuario</li>
                  <li>• <strong>session:</strong> Identificador de sesión del usuario</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Duración:</strong> 12 meses | <strong>Proveedor:</strong> Propio
                </p>
                <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600">
                  ⚠️ Estas cookies NO pueden desactivarse ya que son necesarias para el funcionamiento del sitio.
                </div>
              </div>

              {/* Analíticas */}
              <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies Analíticas</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Finalidad:</strong> Permiten cuantificar el número de usuarios y realizar análisis 
                  estadísticos de la utilización que hacen los usuarios. Se analizan la navegación en nuestro 
                  sitio web con el fin de mejorarlo.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Cookies utilizadas:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• <strong>_ga:</strong> Google Analytics - Distingue usuarios únicos</li>
                  <li>• <strong>_ga_*:</strong> Google Analytics - Mantiene el estado de la sesión</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Duración:</strong> 2 años | <strong>Proveedor:</strong> Google LLC
                </p>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-gray-600">
                  ℹ️ Estas cookies se utilizan de forma anónima y pueden desactivarse.
                </div>
              </div>

              {/* Marketing */}
              <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies de Marketing</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Finalidad:</strong> Permiten la gestión de espacios publicitarios en función de 
                  criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Cookies potenciales (no activas actualmente):</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• <strong>_fbp:</strong> Facebook Pixel (si se implementa)</li>
                  <li>• <strong>_gcl_*:</strong> Google Ads (si se implementa)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Duración:</strong> Variable | <strong>Proveedor:</strong> Meta/Google
                </p>
                <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-gray-600">
                  ℹ️ Actualmente NO utilizamos cookies de marketing. Si en el futuro las implementamos, 
                  te pediremos consentimiento explícito.
                </div>
              </div>
            </div>
          </section>

          {/* Gestionar Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. ¿Cómo Gestionar las Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración 
              de tu navegador web. A continuación te facilitamos enlaces a las instrucciones de los navegadores 
              más utilizados:
            </p>
            <div className="bg-gray-50 rounded-lg p-5 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="text-green-600 hover:underline font-semibold">
                  Google Chrome
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener" className="text-green-600 hover:underline font-semibold">
                  Mozilla Firefox
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener" className="text-green-600 hover:underline font-semibold">
                  Safari (Mac)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" className="text-green-600 hover:underline font-semibold">
                  Microsoft Edge
                </a>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Importante:</strong> Si desactivas todas las cookies, algunas funcionalidades del sitio 
                pueden no estar disponibles y tu experiencia de usuario puede verse afectada.
              </p>
            </div>
          </section>

          {/* Consentimiento */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consentimiento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al navegar y continuar en nuestro sitio web, estarás consintiendo el uso de las cookies antes 
              enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Puedes modificar tus preferencias de cookies en cualquier momento haciendo clic en el botón de 
              configuración de cookies que aparece en la parte inferior de cada página, o eliminándolas directamente 
              desde tu navegador.
            </p>
          </section>

          {/* Actualización */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Actualización de la Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Flor Del Valle puede modificar esta Política de Cookies en función de exigencias legislativas, 
              reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la 
              Agencia Española de Protección de Datos. Cuando se produzcan cambios significativos, se notificará 
              a los usuarios mediante un aviso en el sitio web.
            </p>
          </section>

          {/* Más Información */}
          <section className="bg-green-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Más Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para cualquier duda sobre el uso de cookies en nuestro sitio web, puedes contactarnos:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">📧 <strong>Email:</strong> jdra.flordelvalle@gmail.com</p>
              <p className="text-gray-700">📞 <strong>Teléfono:</strong> +34 665 764 488</p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              También puedes consultar más información sobre cookies en:{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noopener" className="text-green-600 hover:underline font-semibold">
                Agencia Española de Protección de Datos (AEPD)
              </a>
            </p>
          </section>

          {/* Footer Links */}
          <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
            <Link href="/politica-privacidad" className="text-green-600 hover:underline font-semibold text-sm">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="text-green-600 hover:underline font-semibold text-sm">
              Aviso Legal
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
