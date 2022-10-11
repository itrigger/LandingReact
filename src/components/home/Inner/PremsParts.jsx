import React from "react";
import Ico4 from "../../../assets/img/step4.svg";
import Ico7 from "../../../assets/img/step7.svg";
import Ico8 from "../../../assets/img/step8.svg";
import Ico9 from "../../../assets/img/step9.svg";
import Ico10 from "../../../assets/img/step10.svg";

const PremsParts = (props) => {
  return (
    <div>
      <div className="row service3 premparts">
        <div className="col-12 m-col-12 xs-col-4">
          <div className="head2 ta_c">
            <span className="italic">Наши</span> преимущества
          </div>
          <div className={`d_f jc_sb steps ${props.cl && props.cl}`}>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico7} alt="" />
              </div>
              <div className="d_f fd_c step-wrapper">
                <div className="title">Скорость</div>
                <div className="desc">Высокая скорость обработки запросов</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico4} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Выгода</div>
                <div className="desc">
                  Продажа только собственных вагонов и запчастей
                </div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico9} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Доставка</div>
                <div className="desc">Доставка запчастей на любую станцию</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico10} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Удобство</div>
                <div className="desc">Наличие запчастей по всей сети «РЖД»</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico8} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Гарантия</div>
                <div className="desc">
                  Гарантийные обязательства по договору поставки
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremsParts;
