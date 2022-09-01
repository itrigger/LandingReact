import React, { useEffect, useState } from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import Slider from "../components/home/Slider/Slider";
import TwoBlocks from "../components/home/TwoBlocks/TwoBlocks";
import Cats from "../components/home/Cats/Cats";
import Seo from "../components/home/Seo/Seo";
import RowsWrapper from "../components/Table/Rows-wrapper";
import { PARTS } from "../utility/constants";
import { MemoizedMap } from "../components/home/Map/Map";
import Prems3 from "../components/home/Inner/Prems3";
import ReviewHome from "../components/home/Inner/ReviewHome";
import PremsParts from "../components/home/Inner/PremsParts";

const IndexPage = () => {
  const [isDesktop, setDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1023 : null
  );

  const updateMedia = () => {
    setDesktop(typeof window !== "undefined" ? window.innerWidth > 1023 : null);
  };
  useEffect(() => {
    return () =>
      typeof window !== "undefined"
        ? window.removeEventListener("resize", updateMedia)
        : null;
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Вагон Трейд - Покупка и продажа вагонов. Аренда. Запасные части.
        </title>
        <link rel="canonical" href="https://vagontrade.ru" />
        <link rel="icon" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F5DF4D" />
      </Helmet>
      <Layout>
        <Slider />
        <TwoBlocks />
        {/*<Cats />*/}

        <div className="homemap">
          <MemoizedMap />
          <RowsWrapper type={1} limit={10} dropdown={PARTS} />
        </div>
        <div className="service-home">
          <PremsParts />
        </div>
        <ReviewHome />
        <div className="homeseo">
          <div className="row">
            <div className="col-12 m-col-12 xs-col-4 bl br bt | left">
              <div className="head">
                <span className="italic">Наша</span> команда
              </div>
            </div>
            <Seo man1 man2 man3 man4 man5 count="5" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;

//ToDO:
//  Скачать прайс?
//  Страница Скупка Вагонов поделена на несколько частей. В меню это 4 пункта. Че там делать? скролить по странице просто?
//  баг на странице продажи вагонов, при клике на категории, а потом на фильтр, потом категории не работают
// Номера телефонов чуваков сделать через адинку
