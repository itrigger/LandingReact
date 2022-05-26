import * as React from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import Seo from "../components/home/Seo/Seo";
import VagImg from "../assets/img/vag1.png";
import Vag2Img from "../assets/img/vag2.png";
import RowsWrapper from "../components/Table/Rows-wrapper";
import { CARRIAGES } from "../utility/constants";

const SaleCarriage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Продажа б/у вагонов | Вагон Трейд - Покупка и продажа вагонов. Аренда.
          Запасные части.
        </title>
        <link rel="canonical" href="https://vagontrade.ru" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffe500" />
        <meta name="msapplication-TileColor" content="#ffe500" />
        <meta name="theme-color" content="#ffe500" />
      </Helmet>
      <Layout>
        <div className="header-bg hbg1">
          <div className="row bl-light br-light">
            <div className="col-12 xs-col-4">
              <div className="breadcrumb">
                <ul>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>Продажа б/у вагонов</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bl-light br-light line2">
            <div className="col-8 xs-col-4">
              <h1>
                <span className="italic">Продажа</span> бу вагонов
              </h1>
            </div>
            <div className="col-4 xs-col-4 pos_r zi-2 d_f jc_end page_header_btn">
              <a href="/price" className="btn yellow">
                <span>Скачать прайс-лист</span>
              </a>
            </div>
          </div>
        </div>
        <div className="vagon-sale">
          <div className="row">
            <div className="col-4 xs-col-4 bl">
              <div className="head">
                <span className="italic">Какой тип</span> вагона Вас интересует?
              </div>
            </div>
            <div className="col-8 xs-col-4 bl br">
              <div className="vagon-types">
                <div className="d_f | vagon-type empty">
                  <div className="left br bt"></div>
                  <div className="right bt"></div>
                </div>
                <div className="d_f | vagon-type">
                  <div className="left br bt">
                    <img src={VagImg} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Полувагоны</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России, СНГ и
                      Прибалтике, описание, характеристики, типы и модели
                      полувагонов, стоимость полувагонов новых и б/у.
                    </div>
                    <button className="btn yellow">
                      <span>Показать полувагоны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={VagImg} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">ХОППЕРЫ</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России, СНГ и
                      Прибалтике, описание, характеристики, типы и модели
                      полувагонов, стоимость полувагонов новых и б/у.
                    </div>
                    <button className="btn yellow">
                      <span>Показать хопперы</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={Vag2Img} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">ХОППЕРЫ</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России, СНГ и
                      Прибалтике, описание, характеристики, типы и модели
                      полувагонов, стоимость полувагонов новых и б/у.
                    </div>
                    <button className="btn yellow">
                      <span>Показать хопперы</span>
                    </button>
                  </div>
                </div>
                <div className="d_f | vagon-type">
                  <div className="left br bt">
                    <img src={VagImg} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Полувагоны</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России, СНГ и
                      Прибалтике, описание, характеристики, типы и модели
                      полувагонов, стоимость полувагонов новых и б/у.
                    </div>
                    <button className="btn yellow">
                      <span>Показать полувагоны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f | vagon-type">
                  <div className="left br bt">
                    <img src={Vag2Img} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Полувагоны</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России, СНГ и
                      Прибалтике, описание, характеристики, типы и модели
                      полувагонов, стоимость полувагонов новых и б/у.
                    </div>
                    <button className="btn yellow">
                      <span>Показать полувагоны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={VagImg} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">ХОППЕРЫ</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России, СНГ и
                      Прибалтике, описание, характеристики, типы и модели
                      полувагонов, стоимость полувагонов новых и б/у.
                    </div>
                    <button className="btn yellow">
                      <span>Показать хопперы</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RowsWrapper type={2} initialCount={12} dropdown={CARRIAGES} />

        <div className="promo slide1">
          <div className="row">
            <div className="col-6 xs-col-4 zi-2">
              <div className="head">
                <span className="italic">Выкуп</span> вагонов дорого!
              </div>
              <ul>
                <li>Выкуп по договору</li>
                <li>по всей территории России</li>
                <li>по 100% предоплате</li>
              </ul>
              <button className="btn yellow">
                <span>Продать вагон</span>
              </button>
              <div className="hint">
                <span className="italic">Уже продано</span> 1310 вагонов
              </div>
            </div>
            <div className="col-6 picture"></div>
          </div>
        </div>
        <Seo />
      </Layout>
    </div>
  );
};

export default SaleCarriage;
