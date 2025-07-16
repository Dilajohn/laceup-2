
import { notFound } from 'next/navigation';
import AddToCartButton from '../../../components/AddToCartButton';
import ProductImages from '../../../components/ProductImages';
import ProductSizes from '../../../components/ProductSizes';
const mockProducts = [
  {
    id: 'p1',
    title: 'Urban Runner Pro',
    description: 'Sleek, stylish and made for performance.',
    price: 129.99,
    images: ['/products/runner.jpg', '/products/runner_side.jpg', '/products/runner_back.jpg'],
    sizes: ['38', '39', '40', '41', '42'],
  },
  {
    id: 'p2',
    title: 'Classic Street',
    description: 'Everyday classic shoes for urban life.',
    price: 89.99,
    images: ['/products/classic.jpg', '/products/classic_side.jpg'],
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
        {/* Product Images */}
        <div className="col-md-6">
          <ProductImages images={product.images} title={product.title} />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">${product.price.toFixed(2)}</h4>

          <ProductSizes sizes={product.sizes} />

          <AddToCartButton 
            productId={product.id} 
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />

          <button
            type="button"
            className="btn btn-outline-danger mt-3"
            aria-label="Add to wishlist"
            onClick={() => alert('Added to wishlist!')}
          >
            ♥ Add to Wishlist
          </button>
        </div>
      </div>
    </section>
  );
}

