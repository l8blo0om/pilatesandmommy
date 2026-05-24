import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pilates & Mommy — Movement for Every Stage of Motherhood',
  description:
    'Pilates classes, postpartum wellness, LA certification training, and a community for moms — based in Columbia, SC.',
  keywords: 'pilates, mommy, postpartum, pilates certification, Columbia SC, prenatal pilates, LA pilates',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
