import styles from "./Navbar.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext } from "react";
import { ThemeContext } from "../../Layout";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { state } = useContext(ThemeContext);
  const basketCount = state.cart.length;

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.linkWrapper}>
          <NavLink to="/">
            Innovate<span className={styles.logo}>Edge</span>
          </NavLink>
          <ul className={styles.links}>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return isActive ? { textDecoration: "underline" } : {};
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkout" className={styles.basket}>
                <ShoppingBasketIcon className={styles.basketIcon} />
                {basketCount > 0 && (
                  <div className={styles.basketCountBackground}>
                    <span className={styles.basketCount}>{basketCount}</span>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
