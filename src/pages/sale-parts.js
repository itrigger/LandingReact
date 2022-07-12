import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/ui/layout/Layout";
import Seo from "../components/home/Seo/Seo";
import RowsWrapper from "../components/Table/Rows-wrapper";
import { PARTS } from "../utility/constants";
import Form from "../components/Form/Form";
import Lytebox from "../components/ui/Lytebox/Lytebox";

const SaleParts = ({ location }) => {
  let selectedDD = [0];
  let selectedDDJD = null;
  let actived = false;
  const [slide, setSlide] = useState(false);
  const slideClickHandler = () => {
    setSlide(true);
  };
  if (location.state && location.state.chooseCatById !== undefined) {
    selectedDD = [location.state.chooseCatById];
  }
  if (location.state && location.state.jd !== undefined) {
    selectedDDJD = [location.state.jd];
  }

  if (location && location.pathname === "/sale-parts") {
    actived = true;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Продажа запасных частей | Вагон Трейд - Покупка и продажа вагонов.
          Аренда. Запасные части.
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
          <div className="row  bl-light br-light middle-border-12-light middle-border-12-over-bg">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="breadcrumb">
                <ul>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>Продажа запасный частей</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row  bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Продажа</span> запчастей
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end page_header_btn">
              {/*<a href="/price" className="btn yellow">
                <span>Скачать прайс-лист</span>
              </a>*/}
            </div>
          </div>
        </div>

        <RowsWrapper
          type={1}
          dropdown={PARTS}
          selectedDD={selectedDD}
          selectedDDJD={selectedDDJD}
          actived={actived}
          nofilter={false}
          mini={true}
        />

        <div className="promo slide1">
          <div className="row">
            <div className="col-6 m-col-6 xs-col-4 zi-2">
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
            <div className="col-6 m-col-6 xs-col-4 picture"></div>
          </div>
        </div>
        <Lytebox trigger={slide} setTrigger={setSlide}>
          <div className="head3">
            <span className="italic">Выкуп</span> вагонов
          </div>
          <Form setTrigger={setSlide} />
        </Lytebox>
        <Seo />
      </Layout>
    </div>
  );
};

export default SaleParts;
