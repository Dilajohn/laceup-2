import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
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
      </div>
    </div>
  );
}
