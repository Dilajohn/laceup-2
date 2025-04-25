import Image from 'next/image';
import Link from 'next/link';

export default function OfferBanner() {
  return (
    <div className="row align-items-center bg-warning bg-gradient rounded p-4 shadow-sm">
      <div className="col-md-6 text-white">
        <h3 className="fw-bold">Limited Time Offers</h3>
        <p className="mb-3">Get up to 50% off on selected items</p>
        <Link href="/shop" className="btn btn-light fw-semibold">
          Shop Deals
        </Link>
      </div>
      <div className="col-md-6 position-relative" style={{ height: 220 }}>
        <Image
          src="/offers.jpg"
          alt="Limited Offer"
          fill
          className="object-fit-cover rounded"
        />
      </div>
    </div>
  );
}
