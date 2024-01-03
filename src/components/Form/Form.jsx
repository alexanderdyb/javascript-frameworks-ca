import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const data = {
      fullName,
      subject,
      email,
      body,
    };

    console.log(data);

    setSubmissionMessage("Your message has been sent successfully!");

    setFullName("");
    setSubject("");
    setEmail("");
    setBody("");
  }

  function onFullNameChange(event) {
    setFullName(event.target.value);
  }

  function onSubjectChange(event) {
    setSubject(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onBodyChange(event) {
    setBody(event.target.value);
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="full-name">Full name</label>
        <input
          name="full-name"
          type="text"
          value={fullName}
          placeholder="Full name"
          onChange={onFullNameChange}
          required
          minLength="3"
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={onSubjectChange}
          required
          minLength="3"
        />
        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={onEmailChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          type="text"
          value={body}
          placeholder="Message"
          onChange={onBodyChange}
          required
          minLength="3"
        />
        <button>Submit</button>
      </form>
      {submissionMessage && (
        <div className={styles.submissionMessage}>{submissionMessage}</div>
      )}
    </div>
  );
}
