import React from "react";
import { Link } from "gatsby";
import img1 from "../../../assets/img/tb_top_img.png";
import img2 from "../../../assets/img/promo1reverse.png";
import img4 from "../../../assets/img/parts.png";
import img5 from "../../../assets/img/banner.png";

const TwoBlocks = () => {
  return (
    <div className="twoblocks">
      <div className="twoblocks_yellowbg">
        <div className="row">
          <div className="d_f col-12 m-col-12 xs-col-4 | twoblocks_w">
            <div className="d_f tb_top">
              <div className="d_f fd_c">
                <div className="head">
                  <span className="italic">Покупаем</span> вагоны
                </div>
                <div className="mobile_img_wrapper">
                  <img src={img1} alt="image 1" />
                </div>
                <div className="hint">
                  {/*<span className="italic">Уже куплено</span> 3260 вагонов*/}
                </div>
              </div>
              <div className="d_f fd_c tb_top_right">
                <div className="desc">
                  Приобретаем все виды вагонов <b>в любом</b>{" "}
                  <span>
                    <b>состоянии:</b> в рабочем парке, с истекшим
                  </span>{" "}
                  сроком службы, после схода
                </div>
                <Link to="/buy-carriage">
                  <button className="btn black">
                    <span>продать вагоны</span>
                  </button>
                </Link>
                <div className="hint hint22">
                  {/*<span className="italic">Уже куплено</span> 3260 вагонов*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d_f col-12 m-col-12 xs-col-4 | twoblocks_w">
          <div className="tb-left">
            <div>
              <div className="head">
                <span className="italic">Продаем</span> вагоны
              </div>
              <div className="mobile_img_wrapper">
                <img src={img2} alt="image 2" />
              </div>
              <div className="desc">
                Реализуем вагоны рабочего и нерабочего парка{" "}
                <span>(для работы на подъездных путях)</span>
              </div>
              <Link to="/sale-carriage">
                <button className="btn">
                  <span>выбрать вагоны</span>
                </button>
              </Link>
              <div className="hint">
                {/*<span className="italic">Уже продано</span> 2520 вагонов*/}
              </div>
            </div>
          </div>
          <div className="tb-right">
            <div>
              <div className="head">
                <span className="italic">Продаём</span> запчасти
              </div>
              <div className="mobile_img_wrapper">
                <img src={img4} alt="image 3" />
              </div>
              <div className="desc">
                Поставляем запасные части к вагонам.{" "}
                <span>Удобный подбор по интерактивной карте</span>
              </div>
              <Link to="/sale-parts">
                <button className="btn">
                  <span>Купить запчасти</span>
                </button>
              </Link>
              <div className="hint">
                {/*<span className="italic">Уже продано</span> 12030 зап.частей*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="twoblocks_info">
        <div className="row">
          <div className="d_f col-12 m-col-12 xs-col-4 | twoblocks_w">
            <div className="d_f tb_bottom">
              <div className="d_f fd_c">
                <div className="head">
                  <span className="italic">Продаем</span> <span>кассетные</span>{" "}
                  подшипники
                </div>
                <div className="mobile_img_wrapper">
                  <img src={img5} alt="image 5" />
                </div>
                <div className="hint">
                  {/*<span className="italic">Уже куплено</span> 3260 вагонов*/}
                </div>
              </div>
              <div className="d_f fd_c tb_top_right">
                <div className="desc">
                  Всегда в наличии новые и отремонтированные кассетные
                  подшипники типа TBU (SKF, BRENCO, Timken) следующих
                  типоразмеров 130х250х160, 150х250х160 для грузовых и
                  пассажирских вагонов.
                </div>
                <Link to="/sale-special">
                  <button className="btn black">
                    <span>Купить</span>
                  </button>
                </Link>
                <div className="hint hint22">
                  {/*<span className="italic">Уже куплено</span> 3260 вагонов*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoBlocks;
