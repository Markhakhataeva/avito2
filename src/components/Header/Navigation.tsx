import React, {FC} from 'react';
import heart from "../../assets/heart.svg"
import mes from "../../assets/mes.svg"
import link from "../../assets/link.png"
import styles from "../../styles/header.module.scss"
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";
import DropDown from "../DropDown";



export const Navigation:FC = () => {
    const [show, setShow] = React.useState(false);

    return (
      <div className={styles.navig}>
        <div className={styles.heart}>
          <img src={heart} alt="heart" />
        </div>

        <div className={styles.mes}>
          <Link to="/message">
            <img src={mes} alt="mes" />
          </Link>
        </div>

        <div className={styles.announc}>
            <Link to="/my/advertisement">
                Мои объявления
            </Link>
            </div>

        <div className={styles.ellipse}  onClick={()=> setShow(!show)}>
          <div className={styles.ava}>
            <img src={link} alt="ellipse" />
          </div>
          <p>Lincode</p>
            {
                show ? (
                    <div className={styles.absolute}><DropDown/></div>
                ):""
            }
        </div>
          <Link to="/add/advertisement">
              <Button color={"white"} text={"Разместить объявление"} width="200px" />
          </Link>
      </div>
    );
}
