import React, {FC} from 'react';
import styles from '../../styles/header.module.scss';



export const Menu:FC = () => {
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

