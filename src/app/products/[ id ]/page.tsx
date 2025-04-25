import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '../../../components/AddToCartButton';

const mockProducts = [
  {
    id: 'p1',
    title: 'Urban Runner Pro',
    description: 'Sleek, stylish and made for performance.',
    price: 129.99,
    image: '/products/runner.jpg',
    sizes: ['38', '39', '40', '41', '42'],
  },
  {
    id: 'p2',
    title: 'Classic Street',
    description: 'Everyday classic shoes for urban life.',
    price: 89.99,
    image: '/products/classic.jpg',
    sizes: ['40', '41', '42', '43'],
  },
];

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div style={{ position: 'relative', width: '100%', height: '450px' }}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="rounded object-fit-cover"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">${product.price.toFixed(2)}</h4>

          <label className="form-label mt-3">Select Size</label>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className="btn btn-outline-secondary"
              >
                {size}
              </button>
            ))}
          </div>

          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </section>
  );
}
