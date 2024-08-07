import React, {FC, useState} from 'react';
import styles from "../styles/AddAdvertisement.module.scss";
import {Button} from "../components/Button/Button";
import {useActions} from "../hooks/useActions";



export const AddAdvertisement:FC = () => {
    const [nameOfAdvertisement, setNameOfAdvertisement] = React.useState("");
    const [image,setImage] = React.useState("");
    const [description,setDescription] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [location,setLocation]=useState("")
    const {SendDate} = useActions()

    const handleSubmit = ():void => {
        (SendDate(nameOfAdvertisement, image, description, price, location))
    }
  return (
    <div className="container">
      <h1>Разместить объявление</h1>
      <div className={styles.title}>
        <span>Название объявления</span>
        <input
               placeholder="Название объявления"
               value={nameOfAdvertisement}
               onChange={(e)=>setNameOfAdvertisement(e.target.value)}
               type="text"
                   />


      </div>
        <div className={styles.photo}>
            <span>Картинка объявления</span>
            <input
            placeholder="Картинка объявления"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
        />
        </div>
        <div className={styles.description}>
            <span>Описание</span>
            <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />
        </div>

        <div className={styles.location}>
            <span>Ваша локация</span>
            <input
                   type="text" value={location}
                   onChange={(e) => setLocation(e.target.value)}/>
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

            <input
                placeholder="Введите цену"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
            />
            <div className={styles.button}>
                <Button text="Отправить" color={"white"} width="250px" onSubmit={handleSubmit} alt={""}/>
            </div>
        </div>
    </div>
  );
}

