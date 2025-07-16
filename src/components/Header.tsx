'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemCount = 2; // You may replace or get from context/state

  return (
    <header className="border-bottom bg-white shadow-sm sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-3 flex-wrap">
        {/* Logo */}
        <Link href="/" className="text-decoration-none fw-bold fs-4 text-primary" aria-label="Go to homepage">
          Laceup
        </Link>

        {/* TODO: Add mobile hamburger menu here */}

        {/* Search bar */}
        <input
          type="search"
          placeholder="Search for shoes..."
          className="form-control w-50 mx-3 my-2 my-md-0"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          aria-label="Search for shoes"
        />

        {/* Icons */}
        <nav aria-label="User navigation" className="d-flex align-items-center gap-3">
          <Link href="/wishlist" aria-label="Wishlist">
            <a className="text-dark">
              <FaHeart size={20} />
            </a>
          </Link>
          <Link href="/profile" aria-label="Profile">
            <a className="text-dark">
              <FaUser size={20} />
            </a>
          </Link>
          <Link href="/cart" aria-label={`Shopping cart with ${cartItemCount} items`}>
            <a className="text-dark position-relative">
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                  aria-live="polite"
                >
                  {cartItemCount}
                </span>
              )}
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
