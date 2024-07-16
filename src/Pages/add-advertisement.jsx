import React from 'react';
import Input from "../components/Input/Input";
import styles from "./AddAdvertisement.module.css";
import {Button} from "../components/Button/Button";



function AddAdvertisement(props) {
  return (
    <div className="container">
      <h1>Разместить объявление</h1>
      <div className={styles.title}>
        <span>Название объявления</span>
        <Input placeholder="Название объявления" width="800px" />
      </div>
      <div className={styles.photo}>
        <span>Картинка объявления</span>
        <Input placeholder="Картинка объявления" width="800px" />
      </div>
      <div className={styles.description}>
        <span>Описание</span>
        <textarea />
      </div>
        <div className={styles.price}>
            <span>Цена</span>
            <select>
                <option disabled>цена от</option>
                <option value="1000p">1000p</option>
                <option value="2000p">2000p</option>
                <option value="3000p">3000p</option>
                <option value="4000p">4000p</option>
                <option value="5000p">5000p</option>
                <option value="6000p">6000p</option>
                <option value="7000p">7000p</option>
                <option value="8000p">8000p</option>
                <option value="9000p">9000p</option>
            </select>
            <p>или введите свою цену</p>

            <Input placeholder="Введите цену" type="number" width="800px"/>

            <div className={styles.button}>
                <Button text="Отправить" color={"white"} width="250px"/>
            </div>
        </div>
    </div>
  );
}

export default AddAdvertisement;