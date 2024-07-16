import React from 'react';

import styles from "../content.module.css"
import {Cards} from "./Cards/Cards";


export const Recommended = (props) => {
    return (
        <div className={styles.recom}>
            <h1>Рекомендации для вас</h1>
            <Cards/>
        </div>
    );
}
