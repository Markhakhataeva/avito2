import React from 'react';
import styles from './header.module.css';



export const Menu = (props) => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>Для бизнеса</li>
                <li>Lincode Avito Pro</li>
                <li>Вакансии</li>
                <li>Помощь</li>
                <li>Каталоги</li>

            </ul>
        </div>
    );
}

