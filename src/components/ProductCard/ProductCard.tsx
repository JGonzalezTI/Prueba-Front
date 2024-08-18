import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  discount: number;
  rating: number;
  reviews_number: number;
  summary: string;
  image: string;
};

const ProductCard: React.FC<Product> = ({ id, name, price, discount, rating, reviews_number, summary, image }) => {
  return (
    <div key={id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', width: '200px' }}>
      <Link href={`/product/${id}`}>

          <img src={image} alt={name} style={{ width: '100%' }} />
          <h3>{name}</h3>
          <p>Price: ${price}</p>
          <p>Discount: {discount}%</p>
          <p>Rating: {rating} stars ({reviews_number} reviews)</p>
        
      </Link>
    </div>
  );
};

export default ProductCard;
