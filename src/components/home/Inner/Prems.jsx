import React from "react";
import Ico1 from "../../../assets/img/step1.svg";
import Ico2 from "../../../assets/img/step2.svg";
import Ico3 from "../../../assets/img/step3.svg";
import Ico4 from "../../../assets/img/step4.svg";

const Prems = () => {
  return (
    <div>
      <div className="row service3 bl br ">
        <div className="col-12 m-col-12 xs-col-4">
          <div className="head2">
            <div className="italic">Процедура</div>
            выкупа вагонов
          </div>
          <div className="d_f jc_sb steps">
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico1} alt="" />
              </div>
              <div className="d_f fd_c step-wrapper">
                <div className="title">Заявка</div>
                <div className="desc">Отправьте заявку на выкуп вагонов</div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico2} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Оценка</div>
                <div className="desc">
                  Наш специалист выезжает на место для профессионального осмотра
                  и оценки
                </div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico3} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Договор</div>
                <div className="desc">
                  После согласования стоимости и всех условий заключаем договор
                  на выкуп вагонов и запчастей
                </div>
              </div>
            </div>
            <div className="ico-wrapper">
              <div className="img">
                <img src={Ico4} alt="" />
              </div>
              <div className="d_f fd_c">
                <div className="title">Оплата</div>
                <div className="desc">
                  Продавец получает предоплату, а покупатель занимается
                  транспортировкой или демонтажом вагонов
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
