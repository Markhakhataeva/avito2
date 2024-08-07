import React from 'react';
import styles from "../../styles/messages.module.scss"
import {Chat} from "./Chat"
import {FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface ChatsP{
    userName:string,
    nameOfAdvertisement:string,
    message:string
}
export const Chats:FC = () => {
    const chats = useTypedSelector(state => state.chats.chats);

    return (
        <div className={styles.chats}>
            {
                chats.map((chat:ChatsP) => <Chat chat={chat}/>)
            }
        </div>
    );
}

