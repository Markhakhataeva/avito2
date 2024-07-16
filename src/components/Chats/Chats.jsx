import React from 'react';
import styles from "../../Pages/messages.module.css"
import {Chatss} from "./chat-mock";
import Chat from "./Chat";


function Chats(props) {
    return (
        <div className={styles.chats}>
            {
                Chatss.map((chat) => <Chat chat={chat}/>)
            }
        </div>
    );
}

export default Chats;