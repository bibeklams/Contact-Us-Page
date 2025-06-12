import logo_img from "../assets/logo.jpg";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={logo_img} alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
