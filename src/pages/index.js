import * as React from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import Slider from "../components/home/Slider/Slider";
import TwoBlocks from "../components/home/TwoBlocks/TwoBlocks";
import Cats from "../components/home/Cats/Cats";
import Seo from "../components/home/Seo/Seo";
import RowsWrapper from "../components/Table/Rows-wrapper";
import { PARTS } from "../utility/constants";

const IndexPage = () => {
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffe500" />
        <meta name="msapplication-TileColor" content="#ffe500" />
        <meta name="theme-color" content="#ffe500" />
      </Helmet>
      <Layout>
        <Slider />
        <TwoBlocks />
        <Cats />
        <RowsWrapper type={1} map={true} dropdown={PARTS} />
        <Seo />
      </Layout>
    </div>
  );
};

export default IndexPage;

//ToDO:
//  Товар добавлен в корзину анимация
//  Скачать прайс?
//  Страница Скупка Вагонов поделена на несколько частей. В меню это 4 пункта. Че там делать? скролить по странице просто?
//  Фотки и описание типов вагонов на странице Продажа вагонов вверху
//  Страница Политики
//  1440 версия внутренних
//  баг на странице продажи вагонов, при клике на категории, а потом на фильтр, потом категории не работают
