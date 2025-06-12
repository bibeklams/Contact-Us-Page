import styles from "./button.module.css";
const Button = ({ isOutline, icon, text }) => {
  return (
    <button className={isOutline ? styles.isOutline_btn : styles.btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
