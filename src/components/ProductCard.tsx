import Image from 'next/image';
import { ReactNode } from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  children?: ReactNode;
}

export default function ProductCard({
  title,
  price,
  image,
  children,
}: ProductCardProps) {
  return (
    <div className="card h-100 shadow-sm">
      <div style={{ position: 'relative', height: 180 }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-fit-cover rounded-top"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="fw-semibold">{title}</h6>
        <p className="text-primary fw-bold">${price.toFixed(2)}</p>
        <button className="btn btn-outline-primary mt-auto">Add to Cart</button>
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
}
// This component is a reusable product card that displays the product image, title, price, and an "Add to Cart" button.
// It can also accept additional children elements, allowing for customization.