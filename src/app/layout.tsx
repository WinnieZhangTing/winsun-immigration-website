import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://www.winsunimmigration.ca';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'WINSUN Immigration Solutions Inc. | Winnipeg Immigration Consultants',
    template: '%s | WINSUN Immigration Solutions',
  },

  description:
    'WINSUN Immigration Solutions Inc. is a professional Canadian immigration consulting firm in Winnipeg, Manitoba. RCIC-authorized. We specialize in Start-Up Visa, Work Permits, Study Permits, Business Immigration, and Permanent Residence. Bilingual English and Mandarin services. 温尼伯专业移民咨询服务。',

  keywords: [
    'Canadian immigration consultant Winnipeg',
    'RCIC Winnipeg',
    'immigration consulting Manitoba',
    'Start-Up Visa Canada',
    'Work Permit Canada',
    'Study Permit Canada',
    'LMIA Winnipeg',
    'Business Immigration Canada',
    'Permanent Residence Canada',
    'MPNP Manitoba',
    '加拿大移民',
    '温尼伯移民顾问',
    '创业签证',
    '工作许可',
    '学习许可',
  ],

  authors: [{ name: 'WINSUN Immigration Solutions Inc.' }],
  creator: 'WINSUN Immigration Solutions Inc.',
  publisher: 'WINSUN Immigration Solutions Inc.',

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'WINSUN Immigration Solutions Inc.',
    title: 'WINSUN Immigration Solutions Inc. | Winnipeg Immigration Consultants',
    description:
      'Professional Canadian immigration consulting firm in Winnipeg, Manitoba. RCIC-authorized. Start-Up Visa, Work Permits, Study Permits, Business Immigration. Bilingual EN/中文.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WINSUN Immigration Solutions Inc. — Winnipeg, Manitoba',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'WINSUN Immigration Solutions Inc. | Winnipeg',
    description:
      'Professional Canadian immigration consulting in Winnipeg. RCIC-authorized. Bilingual EN/中文.',
    images: ['/og-image.png'],
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

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
