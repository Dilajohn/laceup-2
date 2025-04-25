import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="position-relative text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      <div className="container d-flex align-items-center h-100">
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-5">Step into Style</h1>
          <p className="lead">Discover the perfect blend of comfort and fashion</p>
          <Link href="/shop" className="btn btn-primary mt-2">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
