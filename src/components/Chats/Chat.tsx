import React, {FC} from 'react';
import styles from "../../styles/messages.module.scss"
import iconn from "../../assets/iconn.png"

interface chatProps{
    chat:{
        userName:string,
        nameOfAdvertisement:string,
        message:string
    }
}


export const Chat:FC<chatProps> = ({chat}:chatProps) =>{
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