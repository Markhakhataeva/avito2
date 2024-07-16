import React from "react";
import styles from "../Pages/messages.module.css";
import Menu from "../components/Menu";
import Advertisement from "../components/Advertisement/Advertisement";



function Myadvertisement(props) {
  return (
    <div className={styles.container}>
      <Menu />
        <Advertisement/>
    </div>
  );
}

export default Myadvertisement;
