import type { Metadata } from 'next';
import Script from 'next/script';
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
        url: '/logo-icon-pink-bg.png',
        width: 1024,
        height: 1024,
        alt: 'Pilates & Mommy — felted kangaroo and joey logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilates & Mommy — Movement for Every Stage of Motherhood',
    description: 'Pilates classes, postpartum wellness, certification, and community for moms — Columbia, SC.',
    images: ['/logo-icon-pink-bg.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.pilatesandmommy.com/#website',
      url: 'https://www.pilatesandmommy.com',
      name: 'Pilates & Mommy',
      publisher: { '@id': 'https://www.pilatesandmommy.com/#organization' },
    },
    {
      '@type': ['Organization', 'HealthClub'],
      '@id': 'https://www.pilatesandmommy.com/#organization',
      name: 'Pilates & Mommy',
      url: 'https://www.pilatesandmommy.com',
      logo: 'https://www.pilatesandmommy.com/logo.png',
      description:
        'Pilates classes, postpartum wellness, certification training, and a community for moms.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Columbia',
        addressRegion: 'SC',
        addressCountry: 'US',
      },
      founder: { '@id': 'https://www.pilatesandmommy.com/#niia' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.pilatesandmommy.com/#niia',
      name: 'Dr. Niia Bishop',
      url: 'https://www.pilatesandmommy.com/about',
      jobTitle: 'Founder & Comprehensive Pilates Instructor',
      description:
        'PhD, Alvin Ailey scholar, NDI certified dance educator, creator of Mamilates — one of the country’s first Mommy & Me Pilates formats — and founder of Pilates & Mommy.',
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Amherst College' },
        { '@type': 'CollegeOrUniversity', name: 'University of Michigan' },
      ],
      worksFor: { '@id': 'https://www.pilatesandmommy.com/#organization' },
    },
    {
      '@type': 'Course',
      name: 'Pilates & Mommy Certification',
      url: 'https://www.pilatesandmommy.com/certification',
      description:
        'A maternal wellness Pilates certification — prenatal and postpartum anatomy, pelvic floor training, trimester programming, and teaching methodology. Fully online and self-paced.',
      provider: { '@id': 'https://www.pilatesandmommy.com/#organization' },
      educationalCredentialAwarded: 'Certified Maternal Pilates Specialist',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        instructor: { '@id': 'https://www.pilatesandmommy.com/#niia' },
      },
      offers: [
        {
          '@type': 'Offer',
          price: '497',
          priceCurrency: 'USD',
          category: 'Self-Study',
        },
        {
          '@type': 'Offer',
          price: '897',
          priceCurrency: 'USD',
          category: 'Mentored',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <SplashScreen />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
      <Script
        src="https://gc.zgo.at/count.js"
        data-goatcounter="https://pilatesandmommy.goatcounter.com/count"
        strategy="afterInteractive"
      />
    </html>
  );
}
