import type {Metadata} from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import ScrollProgressBar from '@/src/components/motion/ScrollProgressBar';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luxe Fantasy Vacations | Personalized Travel Planning & Boutique Escapes',
  description: 'Your next escape, personally planned. Custom luxury vacations, Caribbean getaways, all-inclusive resorts, and cruise experiences curated by an expert travel advisor.',
  keywords: [
    'Luxe Fantasy Vacations',
    'Travel Advisor',
    'Personalized Vacation Planning',
    'Caribbean Vacations',
    'All-Inclusive Getaways',
    'Luxury Cruises',
    'Honeymoon Planner',
    'Custom Itineraries'
  ],
  openGraph: {
    title: 'Luxe Fantasy Vacations | Personalized Travel Planning',
    description: 'You bring the dream. Luxe Fantasy helps plan the journey. Tailored Caribbean, cruise, and all-inclusive getaways.',
    type: 'website',
    url: 'https://luxefantasyvacations.com',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1815] selection:bg-[#E6DCce] selection:text-[#1C1815]" suppressHydrationWarning>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}

