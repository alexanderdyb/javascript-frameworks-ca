import styles from "./Product.module.css";

export default function Product({ image, title, price }) {
  return (
    <div>
      <div className={styles.productImage}>
        <img src={image} />
      </div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}
