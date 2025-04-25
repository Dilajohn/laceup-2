import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../store/AuthContext';
import { CartProvider } from '../store/CartContext';

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
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

// // This is the root layout of the application. It includes the header, footer, and wraps the main content with the AuthProvider.
// // The AuthProvider manages the authentication state and provides it to the rest of the application. 
