'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const saved = JSON.parse(consent);
      setPreferences(saved);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const savePreferences = (prefs) => {
    setPreferences(prefs);
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);

    // Here you would initialize analytics/marketing scripts based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics or similar
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing pixels
      console.log('Marketing enabled');
    }
  };

  const handleCustomSave = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay for settings modal */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              onClick={() => setShowSettings(false)}
            />
          )}

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className={`fixed ${showSettings ? 'bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[500px]' : 'bottom-0 left-0 right-0'} bg-white shadow-2xl border-t-4 border-green-500 z-[9999] ${showSettings ? 'rounded-2xl' : 'rounded-t-2xl md:rounded-2xl md:bottom-4 md:left-4 md:right-4 md:max-w-lg md:mx-auto'}`}
          >
            <div className="p-5 md:p-6">
              {!showSettings ? (
                // Simple Banner
                <>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        🍪 Usamos cookies
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia. 
                        Las cookies necesarias son esenciales para el funcionamiento del sitio.{' '}
                        <a href="/politica-privacidad" className="text-green-600 hover:underline font-medium">
                          Más información
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <button
                      onClick={acceptAll}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Aceptar todas
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200"
                    >
                      Solo necesarias
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="flex-1 sm:flex-initial border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Configurar</span>
                    </button>
                  </div>
                </>
              ) : (
                // Settings Panel
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <h3 className="text-lg font-bold text-gray-900">
                        Configuración de cookies
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-4 max-h-[60vh] overflow-y-auto">
                    {/* Necessary Cookies */}
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">
                            Cookies necesarias
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Esenciales para el funcionamiento del sitio. No se pueden desactivar.
                          </p>
                        </div>
                        <div className="ml-3">
                          <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                            <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Incluye: sesión, preferencias de cookies, seguridad.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">
                            Cookies analíticas
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Nos ayudan a entender cómo interactúas con el sitio.
                          </p>
                        </div>
                        <div className="ml-3">
                          <button
                            onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                            className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 px-1 ${
                              preferences.analytics ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                            }`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Incluye: Google Analytics (anónimo), estadísticas de uso.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">
                            Cookies de marketing
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Permiten mostrar publicidad relevante.
                          </p>
                        </div>
                        <div className="ml-3">
                          <button
                            onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                            className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 px-1 ${
                              preferences.marketing ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                            }`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Incluye: Facebook Pixel, Google Ads (si los usamos en el futuro).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t">
                    <button
                      onClick={handleCustomSave}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md"
                    >
                      Guardar preferencias
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200"
                    >
                      Aceptar todas
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
