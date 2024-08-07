import React, {FC} from 'react';
import styles from "../../styles/messages.module.scss"



export const MenuRating:FC = () => {
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

