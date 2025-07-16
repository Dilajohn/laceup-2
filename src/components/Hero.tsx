'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      role="region"
      aria-label="Featured Hero Banner"
      className="position-relative text-white d-flex align-items-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      <div className="container">
        <div className="bg-dark bg-opacity-50 p-4 rounded" style={{ maxWidth: 480, animation: 'fadeInUp 1s ease' }}>
          <h1 className="fw-bold display-5 mb-3">Step into Style</h1>
          <p className="lead mb-4">Discover the perfect blend of comfort and fashion</p>
          <Link href="/shop" legacyBehavior>
            <a className="btn btn-primary" aria-label="Shop now">
              Shop Now
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

