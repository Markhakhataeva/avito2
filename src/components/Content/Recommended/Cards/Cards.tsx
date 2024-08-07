import React, {FC} from 'react';
import styles from "../../../../styles/cards.module.scss"
import {Card} from "./Card";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";


interface cardsTypes {
    id: number,
    image: string,
    title: string,
    price:number,
    location:any,
    date:number,
    key:number

}
export const Cards:FC = () => {
    const cards = useTypedSelector(state => state.cards.cards);

    return (
        <div className={styles.cards_container}>
            {
                cards.map((card:cardsTypes) => <Card card={card} key={card.id}/> )
            }
        </div>
    );
}
