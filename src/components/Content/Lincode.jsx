import React from 'react';
import {Logo} from "./Logo/Logo";
import styles from "./content.module.css";
import {Search} from "./Search/Search";
import {Services} from "./Services/Services";
import {Recommended} from "./Recommended/Recommended";



export const Lincode = (props) => {
    return (
        <div>
            <Services/>
            <Recommended/>
        </div>
    );
}
