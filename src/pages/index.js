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
import { CartContext } from "../context/CartContext";

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
        <Slider />
        <TwoBlocks />
        <Cats />
        <div className="homemap">
          <MemoizedMap />
          <RowsWrapper type={1} dropdown={PARTS} />
        </div>
        <Prems3 />
        <ReviewHome />
        <Seo />
      </Layout>
    </div>
  );
};

export default IndexPage;

//ToDO:
//  Скачать прайс?
//  Страница Скупка Вагонов поделена на несколько частей. В меню это 4 пункта. Че там делать? скролить по странице просто?
//  баг на странице продажи вагонов, при клике на категории, а потом на фильтр, потом категории не работают
