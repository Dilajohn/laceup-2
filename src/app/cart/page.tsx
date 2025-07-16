'use client';

import CartItemCard from '../../components/CartItemCard';
import Link from 'next/link';
import { useState } from 'react';

const initialMockCart = [
  {
    id: '1',
    title: 'Urban Runner Pro',
    price: 129.99,
    quantity: 1,
    image: '/products/runner.jpg',
  },
  {
    id: '2',
    title: 'Classic Street',
    price: 89.99,
    quantity: 2,
    image: '/products/classic.jpg',
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialMockCart);
  const [toast, setToast] = useState<string | null>(null);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return; // prevent zero quantity
    setCart((curr) =>
      curr.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string) => {
    setCart((curr) => curr.filter((item) => item.id !== id));
    setToast('Item removed from cart.');
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section className="container py-5 fade-in">
      <h2 className="fw-bold mb-4">Your Cart</h2>

      {toast && (
        <div role="alert" className="toast-notification mb-3">
          {toast}
        </div>
      )}

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row g-4 mb-4">
            {cart.map((item) => (
              <div className="col-12" key={item.id}>
                <CartItemCard
                  {...item}
                  onQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
                  onRemove={() => handleRemove(item.id)}
                />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-3">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link href="/checkout" className="btn btn-primary" aria-label="Proceed to checkout">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .toast-notification {
          background-color: #e0f7fa;
          color: #00796b;
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-align: center;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

