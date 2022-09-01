import React from "react";
import Ico1 from "../../../assets/img/step1.svg";
import Ico2 from "../../../assets/img/step2.svg";
import Ico3 from "../../../assets/img/step3.svg";
import Ico4 from "../../../assets/img/step4.svg";
import Ico5 from "../../../assets/img/step5.svg";
import Ico6 from "../../../assets/img/step6.svg";

const Prems = (props) => {
  return (
    <div>
      <div className="row service3 bl br middle-border-12">
        <div className="col-12 m-col-12 xs-col-4">
          <div className="head2">
            <div className="italic">Процедура</div>
            выкупа вагонов
          </div>
          <div className={`d_f jc_sb steps ${props.cl && props.cl}`}>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico1} alt="" />
              </div>
              <div className="d_f fd_c step-wrapper">
                <div className="title">Заявка</div>
                <div className="desc">Отправляете заявку на оценку вагонов</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico2} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Оценка</div>
                <div className="desc">Получаете выгодное предложение</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico5} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Осмотр</div>
                <div className="desc">
                  Осматриваем вагоны по станциям нахождения
                </div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico3} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Договор</div>
                <div className="desc">Заключаем договор поставки</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico4} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Оплата</div>
                <div className="desc">Получаете предоплату</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico6} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Отправка</div>
                <div className="desc">
                  Отправляем вагоны на станцию разделки или отстоя
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prems;
