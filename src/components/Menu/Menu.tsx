import React, {FC} from 'react';
import styles from "../../styles/messages.module.scss"
import {MenuLogo} from "./MenuLogo";
import {MenuTitle} from "./MenuTitle";
import {MenuRating} from "./MenuRating";
import {useLocation} from "react-router-dom";



export const Menu:FC = () => {
    const {pathname}=useLocation()

    const label=[
        {
            label: "Мои объявления",
            path:"/my/advertisement"
        },
        {
            label: "Заказы"
        },{
            label: "Мои отзывы"
        },{
            label: "Избранное"
        },{
            label: "Резюме"
        },{
            label: "Сообщения",
            path: "/message"
        },{
            label: "Уведомления"
        },{
            label: "Кошелек"
        },{
            label: "Платные услуги"
        },{
            label: "Для профессионалов"
        },{
            label: "Спецпредложения"
        },{
            label: "Управление профилем"
        },{
            label: "Защита профиля "
        },{
            label: "Настройки"
        },{
            label: "Lincode-Авито доставка"
        }
    ]
    return (
        <div className={styles.menu}>
            <MenuLogo/>
            <MenuTitle/>
            <MenuRating/>

                {
                    label.map((item,index) => (
                        <>
                            <ul key={index}>
                                <li className={`${item.path === pathname ? styles.active  : ""}`} key={index}>
                                    {
                                        item.label
                                    }
                                </li>
                                <hr/>
                            </ul>
                        </>
                    ))
                }


        </div>
    );
}

