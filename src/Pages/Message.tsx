import React, {FC} from 'react';
import styles from '../styles/messages.module.scss';
import {Menu} from "../components/Menu/Menu";
import {Messages} from "../components/Messages/Messages";



export const Message:FC = () => {
    return (
        <div className={styles.container}>
            <Menu/>
            <Messages/>
        </div>
    );
}

