import React from 'react';
import styles from "../../styles/messages.module.scss"
import {FC} from "react";




export const MenuTitle:FC = () => {
    return (
        <div className={styles.menu_title}>
            <span>Lincode</span>
        </div>
    );
}

