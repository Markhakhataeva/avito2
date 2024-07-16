import React from 'react';
import styles from "./cards.module.css"
import {Card} from "./Card";


export const Cards = (props) => {
    const cards=[
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        },
        {
            image:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",
            title:"ИПОТЕКА",
            price:"Цена договорная",
            location:"Грозный",
            date:"3 июля 23:41"
        }
    ]
    return (
        <div className={styles.cards_container}>
            {
                cards.map((card) => <Card card={card}/> )
            }
        </div>
    );
}
