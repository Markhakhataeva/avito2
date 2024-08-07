import React, {FC} from 'react';
import styles from "../../../styles/content.module.scss"



export const Services:FC = () => {
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