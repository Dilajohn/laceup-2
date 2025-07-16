'use client';

import ProductCard from '../../components/ProductCard';
import { useState } from 'react';

const mockProducts = [
  {
    id: 'p1',
    title: 'Urban Runner Pro',
    price: 129.99,
    image: '/products/runner.jpg',
  },
  {
    id: 'p2',
    title: 'Classic Street',
    price: 89.99,
    image: '/products/classic.jpg',
  },
  {
    id: 'p3',
    title: 'Mountain Grip',
    price: 149.99,
    image: '/products/mountain.jpg',
  },
];

export default function ShopPage() {
  const [filter, setFilter] = useState('all');

  // Placeholder for future filter logic
  const filteredProducts = mockProducts;

  return (
    <section className="container py-5">
      <h1 className="fw-bold mb-4">Shop All Shoes</h1>

      <div className="mb-3 d-flex align-items-center gap-3 flex-wrap">
        <label htmlFor="category-filter" className="form-label m-0">
          Filter Products:
        </label>
        <select
          id="category-filter"
          className="form-select w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter products by category"
        >
          <option value="all">All</option>
          {/* Add categories as you implement */}
        </select>
      </div>

      <div className="row g-4">
        {filteredProducts.map((product, i) => (
          <div key={product.id} className="col-sm-6 col-md-4 fade-up" style={{ animationDelay: `${i * 150}ms` }}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.5s forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

