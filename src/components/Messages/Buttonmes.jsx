import React from 'react';
import styles from "../../Pages/messages.module.css"
import {Button} from "../Button/Button";





function Buttonmes(props) {
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

export default Buttonmes;