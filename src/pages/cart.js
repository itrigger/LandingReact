import React, { useContext, useEffect, useState } from "react";
import { useNotification } from "../components/ui/Notify/NotifyProvider";
import { Helmet } from "react-helmet";
import Layout from "../components/ui/layout/Layout";
import BossImg from "../assets/img/boss2.png";
import { CartContext } from "../context/CartContext";
import CartRow from "../components/Table/CartRow";
import FormCart from "../components/Form/FormCart";
import { Link } from "gatsby";

const Cart = () => {
  const [total, setTotal] = useState("0");
  const [isDesktop, setDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1023 : null
  );
  const [cartItems, setCartItems] = useContext(CartContext);
  const value = React.useContext(CartContext);

  const updateMedia = () => {
    setDesktop(typeof window !== "undefined" ? window.innerWidth > 1023 : null);
  };

  useEffect(() => {
    return () =>
      typeof window !== "undefined"
        ? window.removeEventListener("resize", updateMedia)
        : null;
  });

  const calculateTotal = () => {
    let subtotal = value[0].reduce(
      (sum, obj) =>
        parseInt(obj.price.replace("₽", "").replace(/ /g, "")) * obj.quantity +
        sum,
      0
    );
    setTotal(
      new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      }).format(subtotal)
    );
  };

  useEffect(() => {
    let subtotal = value[0].reduce(
      (sum, obj) =>
        parseInt(obj.price.replace("₽", "").replace(/ /g, "")) * obj.quantity +
        sum,
      0
    );
    setTotal(
      new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      }).format(subtotal)
    );
  }, [cartItems]);

  useEffect(() => {
    function EsLintSolve() {
      if (value && value[0].length > 0) {
        calculateTotal();
      }
    }

    EsLintSolve();
  }, []);

  /* Notification */
  const dispatch = useNotification();
  const handleNewNotification = (TYPE, message, title) => {
    dispatch({
      type: TYPE,
      message: message,
      title: title,
    });
  };

  const cartPlus = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    setCartItems(
      cartItems.map((x) =>
        x.id === id ? { ...exist, quantity: exist.quantity + 1 } : x
      )
    );
    calculateTotal();
  };

  const cartMinus = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    const existQuantity = exist.quantity;
    if (exist && existQuantity > 1) {
      setCartItems(
        cartItems.map((x) =>
          x.id === id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
    calculateTotal();
  };

  const cartDeleteItem = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== id));
    }
    calculateTotal();
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Корзина | Вагон Трейд - Покупка и продажа вагонов. Запасные части.
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
                  <li>Оформить заказ</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Оформить</span> заказ
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end"></div>
          </div>
        </div>

        {value[0] && value[0].length > 0 ? (
          <>
            <div className="row">
              <div className="col-12 m-col-12 xs-col-4">
                <div className="cart_head">
                  Наименований в заказе - {value[0].length}
                </div>
              </div>
            </div>
            {isDesktop ? (
              <div className="row | table-cart">
                <div className="col-8 m-col-4 | th">наименование</div>
                <div className="col-1 m-col-2 ta_c | th">цена</div>
                <div className="col-1 m-col-1 ta_c | th">кол-во</div>
                <div className="col-1 m-col-2 ta_c | th">стоимость</div>
                <div className="col-1 m-col-1 ta_c | th br">удалить</div>
              </div>
            ) : null}

            {value[0].map((item) => (
              <CartRow
                key={item.id}
                data={item}
                cartPlus={cartPlus}
                cartMinus={cartMinus}
                calculateTotal={calculateTotal}
                cartDeleteItem={cartDeleteItem}
              />
            ))}

            <div className="row | table-cart">
              <div className="col-8 m-col-4 xs-col-0 name | td"></div>
              <div className="col-4 m-col-6 xs-col-4 ta_c price | td">
                <div className="d_f jc_sb">
                  <div className="total-text">Итого:</div>
                  <div className="total-price">{total}</div>
                </div>
              </div>
            </div>
            <div className="row cart-form">
              <div className="col-8 m-col-8 xs-col-4 form bg-dark">
                <div className="row-8">
                  <div className="col-1 m-col-1 xs-col-0"></div>
                  <div className="col-6 m-col-6 xs-col-8">
                    <div className="cart_head">Контактные данные</div>
                  </div>
                  <div className="col-1 m-col-1 xs-col-0"></div>
                </div>
                <FormCart />
              </div>
              <div className="col-4 m-col-4 xs-col-4 bg-dark bl-light">
                <div className="d_f fd_c ai_c jc_c | boss">
                  <img src={BossImg} width="262" height="262" alt="директор" />
                  <div className="title">
                    Руководитель отдела продаж запчастей
                  </div>
                  <div className="name">Овчинников Михаил</div>
                  <div className="text">
                    Мы вам перезвоним через 15 минут{" "}
                    <span>для подтверждения заказа</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row middle-border-12 bl br">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="cart_head">Корзина пуста</div>
              <Link to="/" className="btn-classic">
                <span>На главную</span>
              </Link>
            </div>
          </div>
        )}

        <div className="row service3 middle-border-12 br bl">
          <div className="col-8 m-col-8 xs-col-0  spacer"></div>
          <div className="col-4 m-col-4 xs-col-0  spacer"></div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
