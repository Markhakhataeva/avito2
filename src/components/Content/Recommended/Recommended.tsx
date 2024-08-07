import React, {FC} from 'react';
import styles from "../../../styles/content.module.scss"
import {Cards} from "./Cards/Cards";


export const Recommended:FC = () => {
    return (
        <div className={styles.recom}>
            <h1>Рекомендации для вас</h1>
            <Cards/>
        </div>
    );
}
