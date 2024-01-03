import styles from "./Navbar.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Layout";

export default function Navbar() {
  const { state } = useContext(ThemeContext);
  const basketCount = state.cart.length;

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.linkWrapper}>
          <Link to="/">
            Innovate<span className={styles.logo}>Edge</span>
          </Link>
          <ul>
            <li>
              <Link to="/checkout" className={styles.basket}>
                <ShoppingBasketIcon className={styles.basketIcon} />
                {basketCount > 0 && (
                  <div className={styles.basketCountBackground}>
                    <span className={styles.basketCount}>{basketCount}</span>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
