import React, {FC} from 'react';
import styles from "../../styles/messages.module.scss"
import link from "../../assets/link.png"

export const MenuLogo:FC = () => {
    return (
        <div className={styles.menu_logo}>
            <img src={link}  alt="logo" />
        </div>
    );
}

