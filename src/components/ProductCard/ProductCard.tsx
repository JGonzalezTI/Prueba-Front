import { useCartStore } from "@/store/cartStore";
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

type ProductCardProps = Product & {
  index: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, discount, rating, reviews_number, summary, image, index }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      name,
      price,
      discount,
      quantity: 1,
      image,
    };
    addItem(productToAdd);
  };

  console.log('index', index)

  const listPrice = discount > 0 ? (price / (1 - discount / 100)).toFixed(2) : '';

  return (
    <div key={id} className={`card-container ${index === 0 ? 'first-card' : ''}`}>
      <div className="linkCard">
        <Link href={`/product/${id}`}>
          <div className='img-wrapper'>
            {discount > 0 && <p className="discount"> {discount}% OFF</p>}
            <img src={image} alt={name} />
          </div>
        </Link>
        {index !== 0 && (
          <div className="hover-icons contentBx">
            <div className="size">
              <div className="size-icon heartIcon" >
                <img src="/heart.svg" alt="Add to favorites" />
              </div>
              <div className="size-icon" onClick={handleAddToCart}>
                <img src="/shoping-cart.svg" alt="Add to cart" />
              </div>
              <div className="size-icon">
                <img src="/regular-eye.svg" alt="View product" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="productContent">
        {index !== 0 && (
          <>
            <h3>{name}</h3>
            <div className="prices">
              {listPrice && <p className="listPrice">${listPrice}</p>}
              <p className="priceRegular">${price}</p>
            </div>
            <div className="responsiveBtn">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </>
        )}

        {index === 0 && (
          <>
            <div className="featureCard-content">
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <img
                    key={i}
                    src="/star.svg"
                    alt="Star"
                    className="star-icon"
                  />
                ))}
                <span className="reviews-number">({reviews_number} reviews)</span>
              </div>
              <h3>{name}</h3>
              <div className="pricesFeature">
                {listPrice && <p className="ftListPrice">${listPrice}</p>}
                <p className="ftPriceRegular">${price}</p>
              </div>
              <p className="summary">{summary}</p>
            </div>
            <div className="allBtn featuredBtn">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </>
        )}

      </div>

    </div>
  );

};

export default ProductCard;

