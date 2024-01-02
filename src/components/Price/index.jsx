import Discount from "../Discount";
import styles from "./Price.module.css";

export default function Price({ price, discountedPrice }) {
  const isDiscounted = Discount(price, discountedPrice);
  return (
    <>
      <div className={styles.prices}>
        <p className={styles.productPrice}>
          {isDiscounted ? discountedPrice : price} NOK
        </p>
        {isDiscounted && <p className={styles.discountedPrice}>{price} NOK</p>}
      </div>
    </>
  );
}
