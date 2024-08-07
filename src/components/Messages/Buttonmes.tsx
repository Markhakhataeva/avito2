import React, {FC} from 'react';
import styles from "../../styles/messages.module.scss"
import {Button} from "../Button/Button";





export const Buttonmes:FC = () => {
    return (
        <div className={styles.buttons}>
            <div className="all_mes">
                <Button text="Все сообщения" width="250px"  color="white"/>
            </div>
            <div className="filter">
                <Button text="Фильтр" width="250px" color="white"/>
            </div>
            <div className={styles.search}>
                <input type="text" placeholder="Поиск по сообщениям..."/>
            </div>
        </div>
    );
}

