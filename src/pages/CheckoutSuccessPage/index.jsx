import Section from "../../components/Section";
import { Link } from "react-router-dom";
import styles from "./CheckoutSuccessPage.module.css";

export default function CheckoutSuccessPage() {
  return (
    <Section>
      <div className={styles.checkoutSuccess}>
        <h1>Thank You for Your Purchase!</h1>
        <p>
          Thank you for shopping with us. We're excited to get your items on
          their way to you. You'll receive a confirmation email shortly with
          your order details and tracking information.
        </p>
        <p>
          Need help or have questions? Our customer service team is here for
          you.
        </p>
        <p>Happy shopping and see you again soon!</p>
        <Link to="/">Go back to store</Link>
      </div>
    </Section>
  );
}
