import styles from "./Product.module.css";
import PriceTag from "../PriceTag";
import Price from "../Price";
import { Link } from "react-router-dom";

export default function Product({ image, title, price, discountedPrice, id }) {
  return (
    <div>
      <div className={styles.productImage}>
        <img src={image} alt={title} />
        <PriceTag price={price} discountedPrice={discountedPrice} />
      </div>
      <p className={styles.productTitle}>{title}</p>
      <Price price={price} discountedPrice={discountedPrice} />
      <Link to={`/product/${id}`} className={styles.detailsButton}>
        View product
      </Link>
    </div>
  );
}
