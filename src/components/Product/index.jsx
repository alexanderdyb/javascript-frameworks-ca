import styles from "./Product.module.css";

export default function Product({ image, title, price, discountedPrice }) {
  const discount = (price, discountedPrice) => {
    if (price > discountedPrice) {
      return true;
    }
  };

  const calculateDiscount = (price, discountedPrice) => {
    if (price > discountedPrice) {
      const discount = price - discountedPrice;
      const discountPercentage = (discount / price) * 100;
      return Math.round(discountPercentage);
    }
    return 0;
  };

  const isDiscounted = discount(price, discountedPrice);
  const isCalculateDiscount = calculateDiscount(price, discountedPrice);
  console.log(isDiscounted);
  console.log(isCalculateDiscount);

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
