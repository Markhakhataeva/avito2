import React from 'react';
import styles from "../../Pages/messages.module.css"
import iconn from "../../assets/iconn.png"

export const Chat = ({chat}) =>{
    return (
        <div className={styles.chat}>
            <div className={styles.user}>
                <img src={iconn} alt="logo"/>
            </div>
            <div className={styles.chat1}>
                <div className={styles.name}>
                    <p>{chat.userName}</p>
                </div>
                <div className={styles.title}>
                    <p>{chat.nameOfAdvertisement}</p>
                </div>
                <div className={styles.mes}>
                    <p>{chat.message}</p>
                </div>
            </div>
        </div>
    )
}