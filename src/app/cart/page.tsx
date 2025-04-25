import CartItemCard from '../../components/CartItemCard';
import Link from 'next/link';

const mockCart = [
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
  const total = mockCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>
      {mockCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row g-4 mb-4">
            {mockCart.map((item) => (
              <div className="col-12" key={item.id}>
                <CartItemCard {...item} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link href="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
