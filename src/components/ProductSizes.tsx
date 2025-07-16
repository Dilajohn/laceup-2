'use client';

import { useState } from 'react';

interface ProductSizesProps {
  sizes: string[];
}

export default function ProductSizes({ sizes }: ProductSizesProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <>
      <label htmlFor="size-select" className="form-label mt-3">
        Select Size
      </label>
      <div className="d-flex flex-wrap gap-2 mb-4" role="list" aria-label="Available sizes">
        {sizes.map((size) => (
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
    </>
  );
}
