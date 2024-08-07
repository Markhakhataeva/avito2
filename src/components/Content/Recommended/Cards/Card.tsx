import React, {FC} from "react";
import styles from "../../../../styles/cards.module.scss";
import {Link} from "react-router-dom";


interface cardTypes {
    card: {
        id: number,
        image: string,
        title: string,
        price: number,
        location: any,
        date: number,
    }
}

export const Card:FC<cardTypes> = ({card}: cardTypes) => {
    return (
        <>
            <div className={styles.card_body}>
                <Link to={`/advertisement/${card.id}`}>
                    <div className={styles.card_image}>
                        <img src={card.image} alt=""/>
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
