import React from 'react';
import styles from "../../Pages/messages.module.css"
import {Chat} from "./Chat"
import {useSelector} from "react-redux";


function Chats(props) {
    const chats=useSelector(state => state.chats.chats);

    return (
        <div className={styles.chats}>
            {
                chats.map((chat) => <Chat chat={chat}/>)
            }
        </div>
    );
}

export default Chats;