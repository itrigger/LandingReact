import * as React from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import Seo from "../components/home/Seo/Seo";
import VagPolu from "../assets/img/vag1.png";
import VagHopper from "../assets/img/vag2.png";
import VagCisterna from "../assets/img/vag-cisterna.png";
import VagDumpcar from "../assets/img/vag-dumpcar.png";
import VagKrytyi from "../assets/img/vag-krytyi.png";
import VagPlatforma from "../assets/img/vag-platform.png";
import RowsWrapper from "../components/Table/Rows-wrapper";
import { CARRIAGES } from "../utility/constants";
import { useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import Form from "../components/Form/Form";
import Lytebox from "../components/ui/Lytebox/Lytebox";

const SaleCarriage = () => {
  const [initialCategory, setInitialCategory] = useState(1);
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const [slide, setSlide] = useState(false);
  const slideClickHandler = () => {
    setSlide(true);
  };

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#F5DF4D" />
        <meta name="msapplication-TileColor" content="#F5DF4D" />
        <meta name="theme-color" content="#F5DF4D" />
      </Helmet>
      <Layout>
        <div className="header-bg hbg1">
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg">
            <div className="col-12 m-col-12 xs-col-4">
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
          <div className="row  bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Продажа</span> бу вагонов
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end page_header_btn">
              {/* <a href="/price" className="btn yellow">
                <span>Скачать прайс-лист</span>
              </a>*/}
            </div>
          </div>
        </div>
        {/*<div className="vagon-sale" ref={myRef}>
          <div className="row">
            <div className="col-4 m-col-4 xs-col-4 bl">
              <StickyBox offsetTop={120}>
                <div className="head">
                  <span className="italic">Какой тип</span> вагона Вас
                  интересует?
                </div>
              </StickyBox>
            </div>
            <div className="col-8 m-col-8 xs-col-4 bl br">
              <div className="vagon-types">
                <div className="d_f | vagon-type empty">
                  <div className="left br bt"></div>
                  <div className="right bt"></div>
                </div>
                <div className="d_f | vagon-type">
                  <div className="left br bt">
                    <img src={VagPolu} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Полувагоны</div>
                    <div className="desc">
                      Продажа полувагонов любых моделей по всей России.
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(25)}
                    >
                      <span>Показать полувагоны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={VagKrytyi} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Крытые вагоны</div>
                    <div className="desc">
                      Продажа крытых вагонов любых моделей по всей России.
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(39)}
                    >
                      <span>Показать крытые вагоны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={VagDumpcar} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Думпкары</div>
                    <div className="desc">
                      Продажа думпкаров любых моделей по всей России
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(41)}
                    >
                      <span>Показать думпкары</span>
                    </button>
                  </div>
                </div>
                <div className="d_f | vagon-type">
                  <div className="left br bt">
                    <img src={VagPolu} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Грузовые вагоны</div>
                    <div className="desc">
                      Продажа грузовых вагонов любых моделей по всей России.
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(36)}
                    >
                      <span>Показать грузовые вагоны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f | vagon-type">
                  <div className="left br bt">
                    <img src={VagCisterna} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Вагоны-цистерны</div>
                    <div className="desc">
                      Продажа вагонов-цистерн любых моделей по всей России.
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(40)}
                    >
                      <span>Показать вагоны-цистерны</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={VagHopper} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Вагоны-хопперы</div>
                    <div className="desc">
                      Продажа вагонов-хопперов любых моделей по всей России.
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(37)}
                    >
                      <span>Показать вагоны-хопперы</span>
                    </button>
                  </div>
                </div>
                <div className="d_f vagon-type">
                  <div className="left br bt">
                    <img src={VagPlatforma} alt="" />
                  </div>
                  <div className="right bt">
                    <div className="name">Вагоны-платформы</div>
                    <div className="desc">
                      Продажа вагонов-платформ любых моделей по всей России.
                    </div>
                    <button
                      className="btn yellow"
                      onClick={() => setInitialCategory(38)}
                    >
                      <span>Показать вагоны-платформы</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        <div className="anchor" ref={myRef2}>
          <RowsWrapper
            type={2}
            initialCount={12}
            initialCategory={initialCategory}
            dropdown={CARRIAGES}
            nofilter={true}
          />
        </div>

        <div className="promo slide1">
          <div className="row">
            <div className="col-6 m-col-8 xs-col-4 zi-2">
              <div className="head">
                <span className="italic">Выкуп</span> вагонов дорого!
              </div>
              <ul>
                <li>Выкуп по договору</li>
                <li>по всей территории России</li>
                <li>по 100% предоплате</li>
              </ul>
              <button
                className="btn yellow"
                onClick={() => slideClickHandler()}
              >
                <span>Продать вагон</span>
              </button>
              <div className="hint">
                <span className="italic">Уже продано</span> 1310 вагонов
              </div>
            </div>
            <div className="col-6 m-col-4 picture"></div>
          </div>
          <Lytebox trigger={slide} setTrigger={setSlide}>
            <div className="head3">
              <span className="italic">Выкуп</span> вагонов
            </div>
            <Form setTrigger={setSlide} />
          </Lytebox>
        </div>
        <Seo />
      </Layout>
    </div>
  );
};

export default SaleCarriage;
