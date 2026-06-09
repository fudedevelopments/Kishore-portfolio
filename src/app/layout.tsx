import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Kishore Ramesh — Digital Marketing Specialist & Software Developer',
  description:
    'Building scalable digital experiences through technology, marketing, and creativity.',
  openGraph: {
    title: 'Kishore Ramesh',
    description: 'Digital Marketing Specialist & Software Developer',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
