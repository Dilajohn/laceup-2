import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Laceup | Step into Style',
  description: 'Premium footwear for every occasion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

