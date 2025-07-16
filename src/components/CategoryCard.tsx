'use client';

import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
  onClick?: () => void;
  href?: string;
}

export default function CategoryCard({ title, image, onClick, href }: CategoryCardProps) {
  const cardContent = (
    <>
      <Image
        src={image}
        alt={`Category image for ${title}`}
        fill
        className="object-fit-cover"
      />
      <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-2 text-center">
        <h5 className="mb-0">{title}</h5>
      </div>
      <style jsx>{`
        div:focus-visible {
          outline: 3px solid #0d6efd;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="position-relative rounded overflow-hidden d-block"
        style={{ width: 280, height: 200, cursor: 'pointer' }}
        tabIndex={0}
        aria-label={`Navigate to ${title} category`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick && onClick()}
      className="position-relative rounded overflow-hidden"
      style={{ width: 280, height: 200, cursor: 'pointer' }}
      aria-label={`Select category ${title}`}
    >
      {cardContent}
    </div>
  );
}

