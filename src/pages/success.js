import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/ui/layout/Layout";
import { Link } from "gatsby";
import imgSuccess from "../assets/img/success.png";

const Success = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Спасибо за Ваш заказ | Вагон Трейд - Покупка и продажа вагонов.
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffe500" />
        <meta name="msapplication-TileColor" content="#ffe500" />
        <meta name="theme-color" content="#ffe500" />
      </Helmet>

      <Layout>
        <div className="header-bg hbg1">
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg">
            <div className="col-12 xs-col-4">
              <div className="breadcrumb">
                <ul>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>Спасибо за Ваш заказ</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 xs-col-4">
              <h1>
                <span className="italic">Спасибо</span> за Ваш заказ
              </h1>
            </div>
            <div className="col-4 xs-col-4 pos_r zi-2 d_f jc_end"></div>
          </div>
        </div>
        <div className="row service3 bl br middle-border-12">
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
        </div>
        <div className="row">
          <div className="col-12 xs-col-4 bl br middle-border-12">
            <div className="layout ta_c">
              <img src={imgSuccess} alt="Page not found" className="img404" />
              <h1 className="head404">
                <div>ваш заказ успешно</div> оформлен
              </h1>
              <div className="desc404">
                С вами свяжется менеджер для уточнения деталей
              </div>
              <Link to="/" className="btn yellow">
                <span>На главную</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row service3 bl br middle-border-12">
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
        </div>
      </Layout>
    </>
  );
};

export default Success;
