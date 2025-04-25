import Image from 'next/image';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartItemCard({ title, price, quantity, image }: CartItemProps) {
  return (
    <div className="d-flex align-items-center border p-3 rounded shadow-sm bg-white">
      <div style={{ width: 100, height: 100, position: 'relative' }} className="me-3">
        <Image src={image} alt={title} fill className="object-fit-cover rounded" />
      </div>
      <div className="flex-grow-1">
        <h6 className="mb-1 fw-bold">{title}</h6>
        <p className="mb-0">Quantity: {quantity}</p>
      </div>
      <div className="text-end">
        <p className="fw-bold mb-0">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
