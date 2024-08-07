import React, {FC} from "react";

export const Footer:FC = () => {
  return (
      <div style={{marginTop:"100px"}}>
          <div className="container">
              <div className="footer_top">
                  <ul>
                      <li>Разместить объявление</li>
                      <li>Объявления</li>
                      <li>Помощь</li>
                      <li>Безопасность</li>
                      <li>Реклама на сайте</li>
                      <li>О компании</li>
                      <li>Карьера</li>
                      <li>Lincode-Авито Журнал</li>
                      <li>Блог</li>
                      <li>Мобильное приложение</li>
                  </ul>
              </div>
              <div className="footer_bot">
                  <p>Lincode-Авито — Продукт от Lincode, аналог сайта объявлении (Авито). © ООО «Lincode Corporation»
                      2022–2023.</p>
              </div>
          </div>
      </div>
  );
}

