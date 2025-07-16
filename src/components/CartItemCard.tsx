'use client';

import Image from 'next/image';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  onQuantityChange?: (newQty: number) => void;
  onRemove?: () => void;
}

export default function CartItemCard({
  title,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className="d-flex align-items-center border p-3 rounded shadow-sm bg-white gap-3 flex-wrap">
      <div style={{ width: 100, height: 100, position: 'relative' }} className="flex-shrink-0 rounded overflow-hidden">
        <Image src={image} alt={`Image of ${title}`} fill className="object-fit-cover rounded" />
      </div>
      <div className="flex-grow-1">
        <h6 className="mb-1 fw-bold">{title}</h6>
        <p className="mb-1">Price: ${price.toFixed(2)}</p>
        <div className="d-flex align-items-center gap-2">
          <button
            aria-label={`Decrease quantity of ${title}`}
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onQuantityChange && onQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            type="button"
          >
            −
          </button>
          <span aria-live="polite" aria-atomic="true" className="fw-semibold">
            {quantity}
          </span>
          <button
            aria-label={`Increase quantity of ${title}`}
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onQuantityChange && onQuantityChange(quantity + 1)}
            type="button"
          >
            +
          </button>
          <button
            aria-label={`Remove ${title} from cart`}
            className="btn btn-sm btn-outline-danger ms-3"
            onClick={onRemove}
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-end flex-shrink-0">
        <p className="fw-bold mb-0" aria-label={`Total price for ${title}`}>
          ${(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
