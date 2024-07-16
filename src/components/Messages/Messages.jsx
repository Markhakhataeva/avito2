import React from 'react';
import styles from "../../Pages/messages.module.css"
import Chats from "../Chats/Chats"
import Buttonmes from "./Buttonmes";


function Messages(props) {
    return (
        <div className={styles.messages}>
            <span>Сообщения</span>
            <Buttonmes/>
            <Chats/>

        </div>

    );
}

export default Messages;