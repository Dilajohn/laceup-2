'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesProps {
  images: string[];
  title: string;
}

export default function ProductImages({ images, title }: ProductImagesProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => setImageIndex(i => (i - 1 + images.length) % images.length);
  const nextImage = () => setImageIndex(i => (i + 1) % images.length);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '450px', cursor: 'zoom-in' }}
      aria-label={`Product images for ${title}`}
    >
      <Image
        src={images[imageIndex]}
        alt={`${title} image ${imageIndex + 1}`}
        fill
        className="rounded object-cover"
        priority
      />
      {images.length > 1 && (
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
  );
}
