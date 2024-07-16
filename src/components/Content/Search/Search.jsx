import React from 'react';
import {Button} from "../../Button/Button";
import styles from "../content.module.css"
import Input from "../../Input/Input";




export const Search = () => {
    return (
        <div className={styles.search}>
            <>
                <Input placeholder="Поиск по объявлениям..." width="1000px"/>
            </>

            <>
                <Button text={"Найти"} color={"white"} width="200px"/>
            </>
        </div>
    );
}
