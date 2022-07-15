import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/ui/layout/Layout";
import img404 from "../assets/img/404.png";

// markup
const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Страница не найдена | Вагон Трейд - Покупка и продажа вагонов. Аренда.
          Запасные части.
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
                    <Link to="/">Главная</Link>
                  </li>
                  <li>404 - Страница не найдена</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">404</span> страница не найдена
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end"></div>
          </div>
        </div>
        <div className="row bl br middle-border-12 middle-border-12-over-bg service3">
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
        </div>
        <div className="row bl br middle-border-12 middle-border-12-over-bg">
          <div className="col-12 m-col-12 xs-col-4">
            <div className="layout ta_c">
              <img src={img404} alt="Page not found" className="img404" />
              <h1 className="head404">
                <span className="italic">Ошибка 404</span>{" "}
                <div>такой страницы</div> не существует
              </h1>
              <Link to="/" className="btn yellow">
                <span>На главную</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row bl br middle-border-12 middle-border-12-over-bg service3">
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
