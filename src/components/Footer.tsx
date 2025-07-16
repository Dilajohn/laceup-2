'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <section className="col-md-3 mb-4" aria-labelledby="footer-about-heading">
            <h6 id="footer-about-heading" className="fw-bold">About Us</h6>
            <p>Your premier destination for stylish and comfortable footwear.</p>
          </section>

          {/* Quick Links */}
          <nav className="col-md-3 mb-4" aria-labelledby="footer-links-heading">
            <h6 id="footer-links-heading" className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="/shop" legacyBehavior>
                  <a className="text-light text-decoration-none">Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-light text-decoration-none">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-light text-decoration-none">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/faqs" legacyBehavior>
                  <a className="text-light text-decoration-none">FAQs</a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="col-md-3 mb-4" aria-label="Contact Information">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1">📧 <a href="mailto:support@laceup.com" className="text-light text-decoration-none">support@laceup.com</a></p>
            <p>📞 <a href="tel:+15551234567" className="text-light text-decoration-none">+1 (555) 123-4567</a></p>
          </address>

          {/* Social */}
          <section className="col-md-3 mb-4" aria-labelledby="footer-social-heading">
            <h6 id="footer-social-heading" className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-light" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-light" aria-label="Twitter" rel="noopener noreferrer" target="_blank">
                <FaTwitter size={20} />
              </a>
            </div>
          </section>
        </div>

        <div className="text-center border-top border-light pt-3 mt-4">
          <small>&copy; 2025 Laceup. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

