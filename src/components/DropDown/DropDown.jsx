import React from 'react';
import styled from 'styled-components';

const DropStyled = styled.div`
    width: 270px;
    background-color: rgba(216, 216, 216, 1);
    padding: 10px;
    border-radius: 10px;
`
const List=styled.ul`
list-style-type: none;
margin: 0;
padding: 0 0 10px 15px;
    border-bottom: 1px solid gray;
    & li {
        padding: 15px;
        color: rgba(3, 130, 247, 1);
        margin-top: 10px;
    ;
        &:hover{
            background-color: #011765;
            padding-left: 15px;
            width: 230px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
        }
    }
`

function DropDown(props) {
    return (
        <DropStyled>
            <List>
                <li>мои объявления</li>
                <li>Заказы</li>
                <li>мои отзывы</li>
                <li>Избранное</li>
            </List>
            <List>
                <li>Сообщения</li>
                <li>уведомление</li>
            </List>
            <List>
                <li>Кошелек</li>
                <li>Платные услуги</li>
                <li>Спецпредложения</li>
            </List>
            <List>
                <li>Управление профилем</li>
                <li>Защита профиля</li>
                <li>Настройки</li>
                <li>Lincode-Avito доставка</li>
            </List>
        </DropStyled>
    );
}

export default DropDown;