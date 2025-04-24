import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import OfferBanner from '../components/OfferBanner';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-5 container">
        <h3 className="fw-bold text-center mb-4">Shop by Category</h3>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <CategoryCard title="Sneakers" image="/categories/sneakers.jpg" />
          <CategoryCard title="Boots" image="/categories/boots.jpg" />
          <CategoryCard title="Everyday Kicks" image="/categories/everyday.jpg" />
        </div>
      </section>

      <section className="py-5 container">
        <h3 className="fw-bold text-center mb-4">Featured Products</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <ProductCard title="Urban Runner Pro" price={129.99} image="/products/runner.jpg" />
          </div>
          <div className="col">
            <ProductCard title="Classic Street" price={89.99} image="/products/classic.jpg" />
          </div>
          <div className="col">
            <ProductCard title="Speed Boost Elite" price={159.99} image="/products/speed.jpg" />
          </div>
          <div className="col">
            <ProductCard title="Daily Comfort Plus" price={99.99} image="/products/daily.jpg" />
          </div>
        </div>
      </section>

      <section className="py-5 container">
        <OfferBanner />
      </section>
    </>
  );
}
// This is a simple Next.js page that serves as the homepage for an e-commerce site.
// It includes a hero section, a category section, a featured products section, and an offer banner.
// The Hero component displays a promotional banner, while the CategoryCard and ProductCard components are used to display categories and products respectively.
// The OfferBanner component is used to display a special offer or promotion.
// The layout is responsive, using Bootstrap classes to ensure it looks good on all devices.
// The page is styled using Bootstrap for a clean and modern look.