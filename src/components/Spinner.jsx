import styles from "./Spinner.module.css";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
