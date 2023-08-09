import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
