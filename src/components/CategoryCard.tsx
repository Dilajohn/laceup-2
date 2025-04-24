import Image from 'next/image';

interface Props {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: Props) {
  return (
    <div className="text-white text-center rounded overflow-hidden shadow-sm">
      <Image src={image} alt={title} width={300} height={200} className="img-fluid" />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h5 className="fw-bold">{title}</h5>
      </div>
    </div>
  );
}
