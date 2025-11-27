'use client';

import React from 'react';

// Reusamos iconos del original
const LeafIcon = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>);
const PhoneIcon = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
const MailIcon = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const MapPinIcon = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const AwardIcon = () => (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>);

const services = [
  "Podas y Talas Profesionales",
  "Diseño y Creación de Jardines",
  "Mantenimiento de Piscinas",
  "Limpieza de Áreas Verdes"
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(55,65,81)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3.5 mb-5">
              <div className="w-12 h-12 bg-[rgb(120,185,45)] rounded-xl flex items-center justify-center">
                <LeafIcon className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">VerdeMaestro</h3>
                <p className="text-[rgb(156,163,175)] font-medium text-sm">25 años cuidando espacios</p>
              </div>
            </div>
            <p className="text-[rgb(209,213,219)] mb-5 leading-relaxed text-sm max-w-md">
              Empresa líder en servicios integrales de jardinería con más de 25 años de experiencia. Calidad, profesionalismo y pasión por los espacios exteriores.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-[rgb(120,185,45)] rounded-lg flex items-center justify-center">
                <PhoneIcon className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-[rgb(120,185,45)] rounded-lg flex items-center justify-center">
                <MailIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-tight">Servicios</h4>
            <ul className="space-y-2 text-[rgb(209,213,219)] text-sm">
              {services.map((title, i) => (
                <li key={i} className="hover:text-white transition-colors duration-300 cursor-pointer">{title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-tight">Contacto</h4>
            <ul className="space-y-2 text-[rgb(209,213,219)] text-sm">
              <li className="flex items-start space-x-2">
                <MapPinIcon className="w-4 h-4 mt-0.5" />
                <span>Madrid y alrededores</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4" />
                <span>info@verdemaestro.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgb(75,85,99)] pt-6 text-center text-[rgb(156,163,175)] text-sm">
          <p>© 2025 VerdeMaestro. Todos los derechos reservados. • 25 años cuidando espacios con pasión y profesionalidad</p>
        </div>
      </div>
    </footer>
  );
}