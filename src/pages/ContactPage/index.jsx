import Form from "../../components/Form/Form";
import Section from "../../components/Section";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <Section>
      <div className={styles.contact}>
        <h1 className={styles.contactHeader}>Contact us</h1>
        <Form />
      </div>
    </Section>
  );
}
