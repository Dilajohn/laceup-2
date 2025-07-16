// src/app/page.tsx

import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import OfferBanner from '../components/OfferBanner';

const categories = [
  { title: 'Sneakers', image: '/categories/sneakers.jpg' },
  { title: 'Boots', image: '/categories/boots.jpg' },
  { title: 'Everyday Kicks', image: '/categories/everyday.jpg' },
];

const featuredProducts = [
  { title: 'Urban Runner Pro', price: 129.99, image: '/products/runner.jpg' },
  { title: 'Classic Street', price: 89.99, image: '/products/classic.jpg' },
  { title: 'Speed Boost Elite', price: 159.99, image: '/products/speed.jpg' },
  { title: 'Daily Comfort Plus', price: 99.99, image: '/products/daily.jpg' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Category Section */}
      <section className="container py-5" aria-label="Shop by category">
        <h2 className="fw-bold text-center mb-4">Shop by Category</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {categories.map(({ title, image }) => (
            <CategoryCard key={title} title={title} image={image} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container py-5" aria-label="Featured products">
        <h2 className="fw-bold text-center mb-4">Featured Products</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {featuredProducts.map(({ title, price, image }) => (
            <div key={title} className="col">
              <ProductCard title={title} price={price} image={image} />
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner Section */}
      <section className="container py-5" aria-label="Special offers">
        <OfferBanner />
      </section>
    </>
  );
}
