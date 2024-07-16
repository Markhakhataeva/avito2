import React from 'react';
import styles from "../../Pages/messages.module.css"



function MenuRating(props) {
    return (
        <div className={styles.raiting}>
            <span>5,0</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>

        </div>
    );
}

export default MenuRating;