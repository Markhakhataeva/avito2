import React from 'react';
import styles from "../../styles/messages.module.scss"
import {Chats} from "../Chats/Chats"
import {Buttonmes} from "./Buttonmes";
import {FC} from "react";


export const Messages:FC = () =>{
    return (
        <div className={styles.messages}>
            <span>Сообщения</span>
            <Buttonmes/>
            <Chats/>

        </div>

    );
}

