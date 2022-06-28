import React from "react";
import Ico1 from "../../../assets/img/step_home1.svg";
import Ico2 from "../../../assets/img/step_home2.svg";
import Ico3 from "../../../assets/img/step_home3.svg";

const Prems3 = () => {
  return (
    <div className="service-home">
      <div className="row service3 ">
        <div className="col-12 m-col-12 xs-col-4">
          <div className="head2 ta_c">
            <span className="italic">Наши</span>&nbsp; преимущества
          </div>
          <div className="d_f jc_sb steps">
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico1} alt="" />
              </div>
              <div className="d_f fd_c step-wrapper">
                <div className="title">
                  Запчасти по всей <span>России</span>
                </div>
                <div className="desc">
                  Наличие собственных запасных частей по всей территории
                  Российской Федерации
                </div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico2} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">
                  Нет расходов <span>на хранение</span>
                </div>
                <div className="desc">
                  Цена на наши запчасти ниже, чем у конкурентов, так как мы
                  храним запчасти на собственных складах
                </div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico3} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Доставка</div>
                <div className="desc">
                  Осуществляем доставку деталей жд вагонов в любую точку РФ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prems3;
