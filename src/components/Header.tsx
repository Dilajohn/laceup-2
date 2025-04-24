'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-bottom bg-white shadow-sm sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <Link href="/" className="text-decoration-none fw-bold fs-4 text-primary">
          Laceup
        </Link>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search for shoes..."
          className="form-control w-50 mx-3"
        />

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <Link href="/wishlist" className="text-dark">
            <FaHeart size={20} />
          </Link>
          <Link href="/profile" className="text-dark">
            <FaUser size={20} />
          </Link>
          <Link href="/cart" className="text-dark position-relative">
            <FaShoppingCart size={20} />
            {/* Badge for cart items */}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
// This is a simple header component for an e-commerce website built with Next.js and React.
// It includes a logo, a search bar, and icons for wishlist, user profile, and shopping cart.   