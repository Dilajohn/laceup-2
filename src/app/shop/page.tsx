import ProductCard from '../../components/ProductCard';

const mockProducts = [
  {
    id: 'p1',
    title: 'Urban Runner Pro',
    price: 129.99,
    image: '/products/runner.jpg',
  },
  {
    id: 'p2',
    title: 'Classic Street',
    price: 89.99,
    image: '/products/classic.jpg',
  },
  {
    id: 'p3',
    title: 'Mountain Grip',
    price: 149.99,
    image: '/products/mountain.jpg',
  },
];

export default function ShopPage() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">Shop All Shoes</h2>
      <div className="row g-4">
        {mockProducts.map((product) => (
          <div className="col-sm-6 col-md-4" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
