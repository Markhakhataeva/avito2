import React, {FC} from 'react';
import styles from "../../styles/TitleAndPrice.module.scss"

interface TitleAndPriceProps {
    item:{
        title: string,
        price: number,
    }
}

export const TitleAndPrice:FC<TitleAndPriceProps> = ({item}:TitleAndPriceProps) => {
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
