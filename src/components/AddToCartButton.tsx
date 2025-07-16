'use client';

import { useCart } from '../context/CartContext';

interface Props {
  productId: string;
  title: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ productId, title, price, image }: Props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id: productId, title, price, image }, 1);
    // Optionally, show toast notification here
  };

  return (
    <button onClick={handleAdd} className="btn btn-primary w-100" aria-label={`Add ${title} to cart`}>
      Add to Cart
    </button>
  );
}
