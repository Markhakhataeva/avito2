import React from "react";
import styles from "./Advertisement.module.css";
import img from "../../assets/img.png";

function Advertisement(props) {
  return (
    <div className={styles.adver}>
      <h1>Мои объявления</h1>
      <br />
      <br />

      <div className={styles.border}>
        <div className={styles.brothers}>
          <span className={styles.actived}>Активные</span>
          <span className={styles.archiv}>Архив</span>
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.img}>
          <img src={img} alt={img} />
        </div>

        <div className={styles.text}>
          <p className={styles.cource}>Курсы программирования (Frontend-разработка)</p>
          <p className={styles.price}>35.000₽ за услугу</p>
          <p className={styles.location}>Чеченская Республика, Грозный</p>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
