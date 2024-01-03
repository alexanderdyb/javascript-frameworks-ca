import { ThemeContext } from "../../Layout";
import { useContext } from "react";
import Section from "../../components/Section";
import CartItem from "../../components/CartItem";
import styles from "./CheckoutPage.module.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const { state, dispatch } = useContext(ThemeContext);
  const items = state.cart;
  const total = state.total.toFixed(2);
  return (
    <Section>
      <div className={styles.cart}>
        <h1 className={styles.cartHeader}>Shopping Cart</h1>
        {items.length > 0 ? (
          <>
            <div className={styles.cartItems}>
              {items.map((item) => (
                <CartItem
                  image={item.imageUrl}
                  title={item.title}
                  price={item.discountedPrice}
                  quantity={item.quantity}
                  key={item.id}
                />
              ))}
            </div>
            <div className={styles.totalPrice}>
              <h2>Total</h2>
              <p>{total} NOK</p>
            </div>
            <div className={styles.cartCheckout}>
              <Link to="/checkout-success">
                <Button
                  title="Checkout"
                  onClick={() => {
                    dispatch({ type: "clearCart" });
                  }}
                />
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.cartMessage}>
            <p>Cart is empty</p>
            <Link to="/">Go to products</Link>
          </div>
        )}
      </div>
    </Section>
  );
}
