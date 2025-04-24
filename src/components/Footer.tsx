import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">About Us</h6>
            <p>Your premier destination for stylish and comfortable footwear.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link href="/shop" className="text-light text-decoration-none">Shop</Link></li>
              <li><Link href="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link href="/faqs" className="text-light text-decoration-none">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1">📧 support@laceup.com</p>
            <p>📞 +1 (555) 123-4567</p>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><FaFacebook size={20} /></a>
              <a href="#" className="text-light"><FaInstagram size={20} /></a>
              <a href="#" className="text-light"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="text-center border-top border-light pt-3 mt-4">
          <small>&copy; 2025 Laceup. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
