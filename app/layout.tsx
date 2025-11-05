import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';
import { CookieBanner } from '@/components/ui/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karen K Sanctuaries - Dubai Luxury Interior Design Transformation',
  description: 'Wake up in your dream sanctuary and watch your property value soar. Luxury interior transformations in 5-45 days. Average 35% property value increase.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden`}>
      <body className="font-sans antialiased bg-off-white overflow-x-hidden max-w-full">
        <Navigation />
        <main className="min-h-screen pb-20 lg:pb-0 overflow-x-hidden w-full max-w-full">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <CookieBanner />
      </body>
    </html>
  );
}

