import React from 'react';
import styles from "../../Pages/messages.module.css"
import link from "../../assets/link.png"

function MenuLogo(props) {
    return (
        <div className={styles.menu_logo}>
            <img src={link}  alt="logo" />
        </div>
    );
}

export default MenuLogo;