'use client';

import { useState } from 'react';
import ProductCard from '../../components/ProductCard';

const mockWishlist = [
  {
    id: 'p3',
    title: 'Mountain Grip',
    price: 149.99,
    image: '/products/mountain.jpg',
  },
  {
    id: 'p2',
    title: 'Classic Street',
    price: 89.99,
    image: '/products/classic.jpg',
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(mockWishlist);

  const handleRemove = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-muted">Your wishlist is empty.</p>
      ) : (
        <div className="row g-4">
          {wishlist.map((product) => (
            <div className="col-sm-6 col-md-4" key={product.id}>
              <ProductCard {...product}>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="btn btn-sm btn-outline-danger mt-2"
                >
                  Remove
                </button>
              </ProductCard>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
