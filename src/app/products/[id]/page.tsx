import { notFound } from 'next/navigation';
import AddToCartButton from '../../../components/AddToCartButton';
import ProductImages from '../../../components/ProductImages';
import ProductSizes from '../../../components/ProductSizes';

// Define Params type locally (Next.js does not export it)
type Params = { [key: string]: string | string[] };

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

type PageProps = {
  params: Params;
};

export default function ProductDetailPage({ params }: PageProps) {
  // Type narrowing, get string id (use first if array)
  const productId = Array.isArray(params.id) ? params.id[0] : params.id;
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <ProductImages images={product.images} title={product.title} />
        </div>

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

