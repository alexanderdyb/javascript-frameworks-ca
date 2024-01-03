import styles from "./CartItem.module.css";

export default function CartItem({ image, title, price, quantity }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={image} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{price} NOK</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}
