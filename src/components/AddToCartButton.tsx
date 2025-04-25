'use client';

interface Props {
  productId: string;
}

export default function AddToCartButton({ productId }: Props) {
  const handleAdd = () => {
    // Later: Connect to cart context or Redux store
    alert(`Product ${productId} added to cart!`);
  };

  return (
    <button onClick={handleAdd} className="btn btn-primary w-100">
      Add to Cart
    </button>
  );
}
// This button will later be connected to the cart context or Redux store
// to manage the cart state. For now, it just shows an alert when clicked.  