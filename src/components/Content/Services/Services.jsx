import React from 'react';
import styles from "../content.module.css"



export const Services = (props) => {
    return (
        <div className={styles.services}>
            <div>Авто</div>
            <div>Работа</div>
            <div>Запчасти</div>
            <div>Товары для детей</div>
            <div>Недвижимость</div>
            <div>Услуги</div>
            <div>Животные</div>
            <div>Красота и здоровье</div>
        </div>
    );
}