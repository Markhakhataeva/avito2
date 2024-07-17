import React from 'react';
import styles from "./cards.module.css"
import {Card} from "./Card";
import {useSelector} from "react-redux";


export const Cards = (props) => {
    const cards =useSelector(state => state.cards.cards);

    return (
        <div className={styles.cards_container}>
            {
                cards.map((card) => <Card card={card} key={cards.id}/> )
            }
        </div>
    );
}
