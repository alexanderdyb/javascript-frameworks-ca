import styles from "./Product.module.css";
import Discount from "../Discount";
import CalculateDiscount from "../CalculateDiscount";

export default function Product({ image, title, price, discountedPrice }) {
  const isDiscounted = Discount(price, discountedPrice);
  const isCalculateDiscount = CalculateDiscount(price, discountedPrice);

  return (
    <div>
      <div className={styles.productImage}>
        <img src={image} />
        {isDiscounted && (
          <p className={styles.calculatedDiscount}>-{isCalculateDiscount}%</p>
        )}
      </div>
      <p className={styles.productTitle}>{title}</p>
      <div className={styles.prices}>
        <p className={styles.productPrice}>
          kr {isDiscounted ? discountedPrice : price}
        </p>
        {isDiscounted && <p className={styles.discountedPrice}>kr {price}</p>}
      </div>
    </div>
  );
}
