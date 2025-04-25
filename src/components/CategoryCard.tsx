import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div
      className="position-relative rounded overflow-hidden"
      style={{ width: 280, height: 200, cursor: 'pointer' }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-fit-cover"
      />
      <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-2 text-center">
        <h5 className="mb-0">{title}</h5>
      </div>
    </div>
  );
}
