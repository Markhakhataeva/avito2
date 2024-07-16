import React from "react";
import styles from "./cards.module.css";
import { Link } from "react-router-dom";

export const Card = ({ card }) => {
  return (
    <>
      <div className={styles.card_body}>
        <Link to="/advertisement">
          <div className={styles.card_image}>
            <img src={card.image} alt="" />
          </div>
          <div className={styles.title}>{card.title}</div>
          <div className={styles.price}>
            <b>{card.price}</b>
          </div>
          <div className={styles.location}>{card.location}</div>
          <div className={styles.date}>{card.date}</div>
        </Link>
      </div>
    </>
  );
};
