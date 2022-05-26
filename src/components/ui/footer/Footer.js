import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";
import { Link } from "gatsby";

const Footer = () => {
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [telCall, setTelCall] = useState("");

  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setAddress(data.posts.nodes[0].acfcontent.address);
      setTel(data.posts.nodes[0].acfcontent.telFront);
      setTelCall(data.posts.nodes[0].acfcontent.telCall);
    }
  }, [data]);

  return (
    <div className="footer">
      <div className="line1">
        <div className="row">
          <div className="col-4 xs-col-4 | col1">
            <span className="italic">Не нашли то, что искали</span>
          </div>
          <div className="col-4 xs-col-4 | col2">
            Свяжитесь с нами и мы постараемся помочь
          </div>
          <div className="col-4 xs-col-4 | col3">
            <div className="form">
              <div className="head">
                <span className="italic">Заполните</span> форму
              </div>
              <form action="">
                <div className="d_f fd_c">
                  <span className="input_wrapper">
                    <input type="text" placeholder="Имя" />
                  </span>
                  <span className="input_wrapper">
                    <input type="text" placeholder="Телефон" />
                  </span>
                  <span className="input_wrapper">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Сообщение"
                    ></textarea>
                  </span>
                  <input
                    type="submit"
                    className="btn-yellow"
                    value="Отправить запрос"
                  />
                  <div className="disclaimer">
                    Нажимая на кнопку, я соглашаюсь с{" "}
                    <a href="/politic">политикой обработки</a> персональных
                    данных
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="line2">
        <div className="row">
          <div className="col-4 xs-col-4 | col1">
            <div className="foot-logo"></div>
            <div className="foot-text">
              Продажа грузовых вагонов б/у, поставка новых и б/у запчастей для
              железнодорожных вагонов.
              <div className="copy">©2012 -2022 ООО «Вагон Трейд»</div>
            </div>
            <div className="foot-policy">
              <Link to="/policy">Политика конфиденциальности сайта</Link>
            </div>
          </div>
          <div className="col-4 xs-col-4 | col2">
            <div className="head italic">Услуги</div>
            <ul>
              <li>
                <Link to="/buy-carriage">Покупка лома</Link>
              </li>
              <li>
                <Link to="/buy-carriage">Продажа б/у вагонов</Link>
              </li>
              <li>
                <Link to="/buy-carriage">Покупка б/у вагонов</Link>
              </li>
              <li>
                <Link to="/buy-carriage">Продажа запчастей</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 xs-col-4 | col3">
            <div className="head italic">Контакты</div>
            <a href={"tel:" + telCall} className="phone">
              {tel}
            </a>
            <div className="foot-btn">
              <a href="https://wt.com/" className="btn-wt">
                <span className="ico ico-left ico-wt"></span>
                Написать в WhatsApp
              </a>
            </div>
            <div className="foot-address">{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
