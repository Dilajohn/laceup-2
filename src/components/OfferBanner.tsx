import { Button } from 'react-bootstrap';
import Image from 'next/image';

export default function OfferBanner() {
  return (
    <div className="bg-warning py-5 px-4 d-flex flex-column flex-md-row justify-content-between align-items-center rounded">
      <div className="text-white mb-3 mb-md-0">
        <h4 className="fw-bold">Limited Time Offers</h4>
        <p>Get up to 50% off on selected items</p>
        <Button variant="light">Shop Deals</Button>
      </div>
      <Image src="/offer.jpg" alt="Offers" width={300} height={200} className="rounded" />
    </div>
  );
}
