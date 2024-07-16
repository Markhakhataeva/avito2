import React from "react";
import component from "../../../assets/component.svg"
import styles from "../content.module.css"
import {Link} from "react-router-dom";


export const Logo = (props) => {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={component} alt="component"/>
            </Link>

        </div>
    );
}
