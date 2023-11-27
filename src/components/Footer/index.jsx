import Section from "../Section";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Section color={"#161616"}>
      <div className={styles.footer}>
        <p>
          Innovate<span className={styles.logo}>Edge</span>
        </p>
        <div>
          <p>
            <span>&copy;</span> All rights reserved
          </p>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </Section>
  );
}
