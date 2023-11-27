import styles from "./BackgroundImage.module.css";

export default function BackgroundImage() {
  return (
    <div className={styles.imageWrapper}>
      <img src="./product.webp" alt="Dark background of art" />
    </div>
  );
}
