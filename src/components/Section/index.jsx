import styles from "./Section.module.css";

export default function Section({ children, color }) {
  return (
    <section className={styles.section} style={{ backgroundColor: color }}>
      {children}
    </section>
  );
}
