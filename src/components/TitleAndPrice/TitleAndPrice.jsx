import React from 'react';
import styles from "./TitleAndPrice.module.css"



export const TitleAndPrice = ({item}) => {
    return (
        <div className={styles.title_price_cont}>
                        <div className="title">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="price">
                            <p>{item.price}</p>
                        </div>

        </div>
    );
}
