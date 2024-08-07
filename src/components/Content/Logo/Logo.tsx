import React from "react";
import component from "../../../assets/component.svg"
import styles from "../../../styles/content.module.scss"
import {Link} from "react-router-dom";


export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={component} alt="component"/>
            </Link>

        </div>
    );
}
