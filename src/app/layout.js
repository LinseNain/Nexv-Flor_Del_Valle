import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VerdeMaestro | Diseño de Jardines y Paisajismo en Madrid',
  description: 'Transformamos tus espacios exteriores con diseño de jardines, podas expertas y mantenimiento integral. Más de 25 años de experiencia en Madrid.',
  keywords: ['paisajismo', 'diseño de jardines', 'poda de árboles', 'mantenimiento de jardines', 'Madrid', 'jardinería', 'piscinas naturales'],
  authors: [{ name: 'VerdeMaestro' }],
  creator: 'VerdeMaestro',
  publisher: 'VerdeMaestro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'VerdeMaestro | Diseño de Jardines y Paisajismo',
    description: 'Expertos en transformar espacios ordinarios en experiencias extraordinarias. Diseño, ejecución y mantenimiento de jardines en Madrid.',
    url: 'https://www.verdemaestro.com',
    siteName: 'VerdeMaestro',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VerdeMaestro Paisajismo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VerdeMaestro | Paisajismo Exclusivo',
    description: 'Diseño y mantenimiento de jardines premium en Madrid.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}