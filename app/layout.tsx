import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

export const metadata: Metadata = {
  title: 'Pilates & Mommy — Movement for Every Stage of Motherhood',
  description:
    'Pilates classes, postpartum wellness, certification training, and a community for moms — based in Columbia, SC.',
  keywords: 'pilates, mommy, postpartum, pilates certification, Columbia SC, prenatal pilates, maternal wellness',
  metadataBase: new URL('https://www.pilatesandmommy.com'),
  openGraph: {
    title: 'Pilates & Mommy — Movement for Every Stage of Motherhood',
    description: 'Pilates classes, postpartum wellness, certification, and community for moms — Columbia, SC.',
    url: 'https://www.pilatesandmommy.com',
    siteName: 'Pilates & Mommy',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Pilates & Mommy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilates & Mommy — Movement for Every Stage of Motherhood',
    description: 'Pilates classes, postpartum wellness, certification, and community for moms — Columbia, SC.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SplashScreen />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
