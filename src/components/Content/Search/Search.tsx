import React, {FC} from 'react';
import {Button} from "../../Button/Button";
import styles from "../../../styles/content.module.scss"
import Input from "../../Input/Input";




export const Search:FC = () => {
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
