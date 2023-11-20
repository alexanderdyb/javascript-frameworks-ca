import styles from "./Navbar.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [basketCount, setBasketCount] = useState(0);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.linkWrapper}>
          <Link to="/">Store</Link>
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
