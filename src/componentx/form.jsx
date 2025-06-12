import { MdOutlineMessage } from "react-icons/md";
import Button from "./button";
import { MdEmail } from "react-icons/md";
import styles from "./form.module.css";
import { IoCall } from "react-icons/io5";
import picture from "../assets/picture.jpg";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setMessage(e.target.message.value);

    e.target.reset();
  };
  return (
    <section className={styles.validation}>
      <div className={styles.from}>
        <div className={styles.button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FROM"
          icon={<MdEmail fontSize={"24px"} />}
        ></Button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" autoComplete="name" />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" autoComplete="email" />

          <label htmlFor="message">Text:</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="8"
            autoComplete="off"
          ></textarea>

          <button type="submit">SUBMIT</button>
        </form>
        <div className="message">
          {name && (
            <p>
              <strong>Name:</strong> {name}
            </p>
          )}
          {email && (
            <p>
              <strong>Email:</strong> {email}
            </p>
          )}
          {message && (
            <p>
              <strong>Message:</strong> {message}
            </p>
          )}
        </div>
      </div>
      <div className={styles.image}>
        <img src={picture} alt="picture" />
      </div>
    </section>
  );
};

export default Form;
