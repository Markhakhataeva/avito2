import React from 'react';
import styles from './messages.module.css';
import Menu from "../components/Menu/Menu";
import Messages from "../components/Messages/Messages";



function Message(props) {
    return (
        <div className={styles.container}>
            <Menu/>
            <Messages/>


        </div>
    );
}

export default Message;