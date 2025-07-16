'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import AddToCartButton from '../../../components/AddToCartButton';

const mockProducts = [
  {
    id: 'p1',
    title: 'Urban Runner Pro',
    description: 'Sleek, stylish and made for performance.',
    price: 129.99,
    images: ['/products/runner.jpg', '/products/runner_side.jpg', '/products/runner_back.jpg'],
    sizes: ['38', '39', '40', '41', '42'],
  },
  {
    id: 'p2',
    title: 'Classic Street',
    description: 'Everyday classic shoes for urban life.',
    price: 89.99,
    images: ['/products/classic.jpg', '/products/classic_side.jpg'],
    sizes: ['40', '41', '42', '43'],
  },
];

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = mockProducts.find((p) => p.id === params.id);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) return notFound();

  const prevImage = () => setImageIndex((i) => (i - 1 + product.images.length) % product.images.length);
  const nextImage = () => setImageIndex((i) => (i + 1) % product.images.length);

  return (
    <section className="container py-5">
      <div className="row g-4">
        {/* Product Images */}
        <div className="col-md-6">
          <div
            style={{ position: 'relative', width: '100%', height: '450px', cursor: 'zoom-in' }}
            aria-label={`Product images for ${product.title}`}
          >
            <Image
              src={product.images[imageIndex]}
              alt={`${product.title} image ${imageIndex + 1}`}
              fill
              className="rounded object-cover"
              priority
            />
            {/* Carousel Controls */}
            {product.images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={prevImage}
                  className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
                  style={{ zIndex: 10 }}
                >
                  ‹
                </button>
                <button
                  aria-label="Next image"
                  onClick={nextImage}
                  className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
                  style={{ zIndex: 10 }}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">${product.price.toFixed(2)}</h4>

          <label htmlFor="size-select" className="form-label mt-3">
            Select Size
          </label>
          <div className="d-flex flex-wrap gap-2 mb-4" role="list" aria-label="Available sizes">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                id="size-select"
                onClick={() => setSelectedSize(size)}
                className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline-secondary'}`}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>

          <AddToCartButton productId={product.id} />

          <button
            type="button"
            className="btn btn-outline-danger mt-3"
            aria-label="Add to wishlist"
            onClick={() => alert('Added to wishlist!')}
          >
            ♥ Add to Wishlist
          </button>
        </div>
      </div>
    </section>
  );
}

