import styles from "./Navbar.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [basketCount, setBasketCount] = useState(1); // State for basket item count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">Store</Link>
        <ul>
          <li>
            <Link to="/checkout" className={styles.basketOne}>
              <ShoppingBasketIcon className={styles.basketIcon} />
              {basketCount > 0 && (
                <div className={styles.basketCountBackground}><span className={styles.basketCount}>{basketCount}</span></div>
              )}
            </Link>
          </li>
        </ul>
        <button className={styles.mobile} onClick={toggleMenu}>
          {!isActive ? (
            <MenuIcon className={styles.hamburger} />
          ) : (
            <CloseIcon className={styles.close} />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className={styles.fullScreenMenu}>
          <ul>
            <li>
              <Link to="/link1">Link 1</Link>
            </li>
            <li>
              <Link to="/link2">Link 2</Link>
            </li>
            <li>
              <Link to="/link3">Link 3</Link>
            </li>
            <li>
              <Link to="/checkout">
                <ShoppingBasketIcon />
                {basketCount > 0 && (
                  <span className={styles.basketCount}>{basketCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
