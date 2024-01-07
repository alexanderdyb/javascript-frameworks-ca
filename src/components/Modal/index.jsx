import { Link } from "react-router-dom";
import Button from "../Button";
import styles from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.modal}>
      <p className={styles.modalText}>Product added to cart</p>
      <div className={styles.buttons}>
        <Link to="/">
          <Button title="Shop more" />
        </Link>
        <Link to="/checkout">
          <Button title="Checkout" />
        </Link>
      </div>
    </div>
  );
}
