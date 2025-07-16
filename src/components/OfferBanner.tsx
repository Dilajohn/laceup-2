'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OfferBanner() {
  return (
    <div
      className="row align-items-center bg-warning bg-gradient rounded p-4 shadow-sm"
      role="region"
      aria-label="Limited time offers banner"
    >
      <div className="col-md-6 text-white">
        <h3 className="fw-bold">Limited Time Offers</h3>
        <p className="mb-3">Get up to 50% off on selected items</p>
        <Link href="/shop" legacyBehavior>
          <a className="btn btn-light fw-semibold" aria-label="Shop deals">
            Shop Deals
          </a>
        </Link>
      </div>
      <div className="col-md-6 position-relative" style={{ height: 220, minWidth: 250 }}>
        <Image
          src="/offer.jpg"
          alt="Limited time offer banner"
          fill
          className="object-fit-cover rounded"
          priority={false} 
          // lazy by default, set priority=true if you want to preload
        />
      </div>
    </div>
  );
}

