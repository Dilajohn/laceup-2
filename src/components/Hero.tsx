'use client';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="position-relative text-white" style={{ height: '60vh' }}>
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        className="object-fit-cover z-0"
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center z-1">
        <h1 className="fw-bold display-4">Step into Style</h1>
        <p>Discover the perfect blend of comfort and fashion</p>
        <Button variant="primary">Shop Now</Button>
      </div>
    </div>
  );
}
