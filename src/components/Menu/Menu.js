import React from 'react';
import styles from "../../Pages/messages.module.css"
import MenuLogo from "./MenuLogo";
import MenuTitle from "./MenuTitle";
import MenuRating from "./MenuRating";



function Menu(props) {
    return (
        <div className={styles.menu}>
            <MenuLogo/>
            <MenuTitle/>
            <MenuRating/>
            <hr/>
            <ul>
                <li className={styles.active}>Мои объявления</li>
                <li>Заказы</li>
                <li>Мои отзывы</li>
                <li>Избранное</li>
                <li>Резюме</li>
            </ul>
            <hr/>

            <ul>
                <li className={styles.active}>Сообщения</li>
                <li>Уведомления</li>
            </ul>
            <hr/>


            <ul>
                <li>Кошелек</li>
                <li>Платные услуги</li>
                <li>Для профессионалов</li>
                <li>Спецпредложения</li>
            </ul>
            <hr/>

            <ul>
                <li>Управление профилем</li>
                <li>Защита профиля </li>
                <li>Настройки</li>
                <li>Lincode-Авито доставка</li>
            </ul>

        </div>
    );
}

export default Menu;