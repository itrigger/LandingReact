import * as React from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import Seo from "../components/home/Seo/Seo";
import { CARRIAGES, PARTS } from "../utility/constants";
import { useRef, useState } from "react";
import Form from "../components/Form/Form";
import Lytebox from "../components/ui/Lytebox/Lytebox";
import RowsWrapperCarriage from "../components/Table/Rows-wrapper-carriage";
import RowsWrapperPre from "../components/Table/Rows-wrapper-pre";
import PremsParts from "../components/home/Inner/PremsParts";

const SaleCarriage = ({ location }) => {
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
          Продажа кассетных подшипников | Вагон Трейд - Покупка и продажа
          вагонов. Запасные части.
        </title>
        <link rel="canonical" href="https://vagontrade.ru" />
        <link rel="icon" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
                  <li>Продажа кассетных подшипников</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row  bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Продажа</span> кассетных{" "}
                <span>подшипников</span>
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end page_header_btn"></div>
          </div>
        </div>

        <div className="anchor" ref={myRef2}>
          <RowsWrapperPre type={1} limit={10} dropdown={PARTS} />
        </div>

        <PremsParts />
        <div className="homeseo saleparts_page">
          <div className="row">
            <div className="col-4 m-col-4 xs-col-4 bl  | left">
              <div className="head">
                <span className="italic">Остались</span> вопросы?
              </div>
              <Seo man3 />
            </div>

            <div className="col-8 m-col-8 xs-col-4 | rightside">
              <div className="promo promo-cutted slide1">
                <div className="sticker">
                  <b>дороже рынка</b> на 10-20%
                </div>
                <div className="picture"></div>
                <div className="head">
                  <span className="italic">Выкуп</span> вагонов{" "}
                  <i className="only-desktop">дорого</i>
                  <i className="only-mobile">дороже рынка на 10-20%</i>
                </div>
                <ul>
                  <li>В любом состоянии</li>
                  <li>по всей территории России и странам СНГ</li>
                  <li>по 100% предоплате</li>
                </ul>
                <button
                  className="btn yellow"
                  onClick={() => slideClickHandler()}
                >
                  <span>Продать вагон</span>
                </button>
                <div className="hint">
                  {/*<span className="italic">Уже продано</span> 3260 вагонов*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SaleCarriage;
