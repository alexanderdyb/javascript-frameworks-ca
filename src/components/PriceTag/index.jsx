import Discount from "../Discount";
import CalculateDiscount from "../CalculateDiscount";
import styles from "./PriceTag.module.css";

export default function PriceTag({ price, discountedPrice }) {
  const isDiscounted = Discount(price, discountedPrice);
  const isCalculateDiscount = CalculateDiscount(price, discountedPrice);

  return (
    <>
      {isDiscounted && (
        <p className={styles.calculatedDiscount}>-{isCalculateDiscount}%</p>
      )}
    </>
  );
}
