import React, {FC} from "react";
import styles from "../styles/messages.module.scss";
import Menu from "../components/Menu";
import {Advertisement} from "../components/Advertisement/Advertisement";



export const Myadvertisement:FC = () => {
  return (
    <div className={styles.container}>
        <Menu />
        <Advertisement/>
    </div>
  );
}

