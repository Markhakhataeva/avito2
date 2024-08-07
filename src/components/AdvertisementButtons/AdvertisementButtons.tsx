import React, {FC} from 'react';
import styles from "../../styles/AdvertisementButtons.module.scss"
import {Button} from "../Button/Button";
import hrt from "../../assets/hrt.svg"
import filt from '../../assets/hrt.svg'



export const AdvertisementButtons:FC = () => {
    return (
        <div className={styles.buttons_cont}>
            <Button text={"Добавить в избранное"} color={"white"} width="200px" icon={hrt}/>

            <Button text={"Сравнить"}  color={"white"} width="200px" icon={filt}/>

        </div>
    );
}
