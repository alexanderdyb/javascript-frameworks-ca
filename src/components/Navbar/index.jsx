import styles from "./Navbar.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Store</Link>
      <ul>
        <li>
          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
