import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";
import { Link } from "gatsby";
import FormFooter from "../../Form/FormFooter";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { CartContext } from "../../../context/CartContext";

const Footer = () => {
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [telCall, setTelCall] = useState("");
  const [telWt, setTelWt] = useState("");

  const clickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };

  const value = React.useContext(CartContext);

  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setAddress(data.posts.nodes[0].acfcontent.address);
      setTel(data.posts.nodes[0].acfcontent.telFront);
      setTelCall(data.posts.nodes[0].acfcontent.telCall);
      setTelWt(data.posts.nodes[0].acfcontent.telWt);
    }
  }, [data]);

  return (
    <div className="footer">
      <div className="line1">
        <div className="row">
          <div className="col-4 m-col-4 xs-col-4 | col1">
            <div className="foot-logo"></div>

            <div className="foot-text">
              Продажа грузовых вагонов б/у, поставка новых и б/у запчастей для
              железнодорожных вагонов.
              <div className="copy">©2012 -2022 ООО «Вагон Трейд»</div>
            </div>
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col2">
            <ul>
              <li>
                <AnchorLink to="/buy-carriage" title="Скупка вагонов">
                  Скупка вагонов
                </AnchorLink>
              </li>
              <li>
                <Link to="/sale-carriage">Продажа вагонов</Link>
              </li>
              <li>
                <Link to="/sale-parts">Продажа запчастей</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col3">
            <a href={"tel:" + telCall} className="phone">
              {tel}
            </a>
            <div className="foot-btn">
              <button onClick={() => clickHandler()} className="btn-wt">
                <span className="ico ico-left ico-wt"></span>
                WhatsApp
              </button>
            </div>
            <div className="foot-address">{address}</div>
          </div>
        </div>
      </div>
      <div className="line2">
        <div className="row">
          <div className="col-4 m-col-4 xs-col-4 | col1">
            {/*  <div className="foot-text">
              Продажа грузовых вагонов б/у, поставка новых и б/у запчастей для
              железнодорожных вагонов.
              <div className="copy">©2012 -2022 ООО «Вагон Трейд»</div>
            </div>
            <div className="foot-policy">
              <Link to="/politic">Политика конфиденциальности сайта</Link>
            </div>*/}
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col2">
            {/*<div className="head italic">Услуги</div>*/}
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col3">
            <div className="foot-version">Версия 1.050623</div>
          </div>
        </div>
      </div>
      {value && value[0] !== undefined && value[0].length > 0 ? (
        <div className="fixed_block">
          <Link to="/cart">
            Оформить заказ <span>{value[0].length}</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

const array = [
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE3OTA=",
    node: {
      id: "cHJvZHVjdDoxNzkw",
      name: "12-1303-01",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-150x150.png 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-300x300.png 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-100x100.png 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c.png 432w",
        __typename: "MediaItem",
      },
      price: "6 500 000₽",
      productsKP: {
        godVypuska: "2018-2019",
        mestonahozhdenie: "В работе.",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 27,
      shortDescription: "<p>Рабочий парк.</p>\n",
      productTags: {
        nodes: [],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Полувагоны",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE3ODg=",
    node: {
      id: "cHJvZHVjdDoxNzg4",
      name: "23-925",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-150x150.png 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-300x300.png 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-450x450.png 450w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-100x100.png 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1.png 455w",
        __typename: "MediaItem",
      },
      price: "1 500 000₽",
      productsKP: {
        godVypuska: "1997",
        mestonahozhdenie: "В работе.",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 5,
      shortDescription: "<p>Рабочий парк.</p>\n",
      productTags: {
        nodes: [],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Лесовозы",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE3ODc=",
    node: {
      id: "cHJvZHVjdDoxNzg3",
      name: "13-198",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-150x150.png 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-300x300.png 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-450x450.png 450w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-100x100.png 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1.png 455w",
        __typename: "MediaItem",
      },
      price: "3 300 000₽",
      productsKP: {
        godVypuska: "2012",
        mestonahozhdenie: "ОКТ, СЕВ",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 50,
      shortDescription: "<p>Рабочий парк.</p>\n",
      productTags: {
        nodes: [
          {
            name: "ОКТЖД",
            __typename: "ProductTag",
          },
          {
            name: "СЕВЖД",
            __typename: "ProductTag",
          },
        ],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Лесовозы",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE3NDE=",
    node: {
      id: "cHJvZHVjdDoxNzQx",
      name: "12-132",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-150x150.png 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-300x300.png 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-100x100.png 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c.png 432w",
        __typename: "MediaItem",
      },
      price: "1 250 000₽",
      productsKP: {
        godVypuska: "2001",
        mestonahozhdenie: "Ю-УР",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 10,
      shortDescription: "<p>Истек срок службы.</p>\n",
      productTags: {
        nodes: [
          {
            name: "ЮУРЖД",
            __typename: "ProductTag",
          },
        ],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Полувагоны",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE2NTk=",
    node: {
      id: "cHJvZHVjdDoxNjU5",
      name: "11-270",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-150x150.png 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-300x300.png 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c-100x100.png 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-krytyi-592e32387ac49785cf1f8a3acd45576c.png 432w",
        __typename: "MediaItem",
      },
      price: "2 500 000₽",
      productsKP: {
        godVypuska: "1993",
        mestonahozhdenie: "В работе.",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 2,
      shortDescription: "<p>Рабочий парк.</p>\n",
      productTags: {
        nodes: [],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Крытые вагоны",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE2NTc=",
    node: {
      id: "cHJvZHVjdDoxNjU3",
      name: "16-3001",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/depositphotos_118944964-stock-illustration-cargo-wagon-sketch-icon-150x150.webp 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/depositphotos_118944964-stock-illustration-cargo-wagon-sketch-icon-300x300.webp 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/depositphotos_118944964-stock-illustration-cargo-wagon-sketch-icon-450x450.webp 450w, https://api.vagontrade.ru/wp-content/uploads/2022/07/depositphotos_118944964-stock-illustration-cargo-wagon-sketch-icon-100x100.webp 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/depositphotos_118944964-stock-illustration-cargo-wagon-sketch-icon.webp 600w",
        __typename: "MediaItem",
      },
      price: "1 500 000₽",
      productsKP: {
        godVypuska: "1988",
        mestonahozhdenie: "З-СИБ",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 1,
      shortDescription:
        "<p>Разоборудован. Отсутствуют аккумуляторные батареи и дизельная установка.</p>\n",
      productTags: {
        nodes: [
          {
            name: "ЗСБЖД",
            __typename: "ProductTag",
          },
        ],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Вагон сопровождения",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
  {
    cursor: "YXJyYXljb25uZWN0aW9uOjE2NTM=",
    node: {
      id: "cHJvZHVjdDoxNjUz",
      name: "31-673",
      image: {
        srcSet:
          "https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-150x150.png 150w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-300x300.png 300w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-450x450.png 450w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1-100x100.png 100w, https://api.vagontrade.ru/wp-content/uploads/2022/07/vag-dumpcar-8b4ee57e79756ccb773a4f901c864dbd-1.png 455w",
        __typename: "MediaItem",
      },
      price: "1 700 000₽",
      productsKP: {
        godVypuska: "1989-1991",
        mestonahozhdenie: "З-СИБ",
        telezhka: null,
        tolshhinaOboda: null,
        __typename: "Product_Productskp",
      },
      stockQuantity: 7,
      shortDescription: "<p>Рабочий парк.</p>\n",
      productTags: {
        nodes: [
          {
            name: "ЗСБЖД",
            __typename: "ProductTag",
          },
        ],
        __typename: "ProductToProductTagConnection",
      },
      productCategories: {
        nodes: [
          {
            name: "Думпкары",
            __typename: "ProductCategory",
          },
        ],
        __typename: "ProductToProductCategoryConnection",
      },
      __typename: "SimpleProduct",
    },
    __typename: "RootQueryToProductConnectionEdge",
  },
];

export default Footer;
