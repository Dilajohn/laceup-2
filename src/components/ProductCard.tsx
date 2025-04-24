import { Button } from 'react-bootstrap';
import Image from 'next/image';

interface Props {
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <Image src={image} alt={title} width={300} height={200} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h6>{title}</h6>
          <p className="text-muted">${price.toFixed(2)}</p>
        </div>
        <Button variant="primary">Add to Cart</Button>
      </div>
    </div>
  );
}
