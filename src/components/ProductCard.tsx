'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
  loading?: boolean;
  children?: ReactNode;
}

export default function ProductCard({
  title,
  price,
  image,
  onAddToCart,
  loading = false,
  children,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(loading);

  const handleAddToCart = () => {
    if (onAddToCart) {
      setIsLoading(true);
      const maybePromise = onAddToCart();
      if (maybePromise instanceof Promise) {
        maybePromise.finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="card h-100 shadow-sm transform-transition" tabIndex={0} aria-label={`Product card for ${title}`}>
      <div style={{ position: 'relative', height: 180 }} className="rounded-top overflow-hidden">
        <Image
          src={image}
          alt={`Image of ${title}`}
          fill
          className="object-fit-cover rounded-top"
          loading="lazy"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="fw-semibold">{title}</h6>
        <p className="text-primary fw-bold">${price.toFixed(2)}</p>
        <button
          className="btn btn-outline-primary mt-auto"
          aria-label={`Add ${title} to cart`}
          onClick={handleAddToCart}
          disabled={isLoading}
          type="button"
        >
          {isLoading ? 'Adding…' : 'Add to Cart'}
        </button>
        {children && <div className="mt-2">{children}</div>}
      </div>

      <style jsx>{`
        .transform-transition {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .transform-transition:hover,
        .transform-transition:focus-visible {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          outline: none;
        }
      `}</style>
    </div>
  );
}
