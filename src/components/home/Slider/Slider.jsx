import React from "react";
import Slide from "../../../assets/img/home_image.jpg";
import { Link } from "gatsby";

const Slider = () => {
  return (
    <div className="slider">
      <div className="cont">
        <img src={Slide} alt="" />
      </div>
      <div className="row">
        <div className="d_f fd_c jc_c col-4 xs-col-4">
          <div>
            <div className="head big-head">
              <span className="italic">Продажа</span> б/у вагонов
            </div>
            <div className="desc">
              Вагоны для работы на подъездные пути, вагоны Б/У готовые к работе,
              полувагоны, крытые, цистерны, платформы, хопперы, думкары
            </div>
            <button className="btn yellow mobile">
              <span>Быстрый подбор вагонов</span>
            </button>
            <Link to="/sale-carriage" className="btn">
              <span>Перейти в раздел</span>
            </Link>
          </div>
        </div>
        <div className="col-4 xs-col-0"></div>
        <div className="d_f ai_c col-4 xs-col-0">
          <div className="form">
            <div className="head">
              <span className="italic">быстрый</span> подбор вагонов
            </div>
            <form action="">
              <div className="d_f fd_c">
                <span className="input_wrapper">
                  <input type="text" placeholder="Ваш телефон" />
                </span>
                <span className="input_wrapper">
                  <input type="text" placeholder="Тип вагона" />
                </span>
                <input
                  type="submit"
                  className="btn-yellow"
                  value="Отправить заявку"
                />
                <div className="disclaimer">
                  Нажимая на кнопку, я соглашаюсь с{" "}
                  <a href="/politic">политикой обработки</a> персональных данных
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
