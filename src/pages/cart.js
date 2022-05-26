import React, { useContext, useEffect, useState } from "react";
import NotifyProvider, {
  useNotification,
} from "../components/ui/Notify/NotifyProvider";
import { Helmet } from "react-helmet";
import Layout from "../components/ui/layout/Layout";
import BossImg from "../assets/img/boss.png";
import { CartContext } from "../context/CartContext";
import CartRow from "../components/Table/CartRow";

const Cart = () => {
  const [total, setTotal] = useState("0");
  const [isDesktop, setDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 600 : null
  );
  const [cartItems, setCartItems] = useContext(CartContext);
  const value = React.useContext(CartContext);

  const updateMedia = () => {
    setDesktop(typeof window !== "undefined" ? window.innerWidth > 600 : null);
  };

  useEffect(() => {
    typeof window !== "undefined"
      ? window.addEventListener("resize", updateMedia)
      : null;
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
    if (value && value[0].length > 0) {
      calculateTotal();
    }
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
    } else {
      handleNewNotification(
        "ERROR",
        "Кол-во товара не может быть меньше единицы",
        "Ошибка"
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
          Корзина | Вагон Трейд - Покупка и продажа вагонов. Аренда. Запасные
          части.
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
          <div className="row bl-light br-light">
            <div className="col-12 xs-col-4">
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
          <div className="row bl-light br-light line2">
            <div className="col-8 xs-col-4">
              <h1>
                <span className="italic">Оформить</span> заказ
              </h1>
            </div>
            <div className="col-4 xs-col-4 pos_r zi-2 d_f jc_end"></div>
          </div>
        </div>

        {value[0] && value[0].length > 0 ? (
          <>
            <div className="row">
              <div className="col-12 xs-col-4">
                <div className="cart_head">
                  Наименований в заказе - {value[0].length}
                </div>
              </div>
            </div>
            {isDesktop ? (
              <div className="row | table-cart">
                <div className="col-2 ta_c | th">фото</div>
                <div className="col-6 | th">наименование</div>
                <div className="col-1 ta_c | th">цена</div>
                <div className="col-1 ta_c | th">кол-во</div>
                <div className="col-1 ta_c | th">стоимость</div>
                <div className="col-1 ta_c | th br">удалить</div>
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
              <div className="col-2 xs-col-0 ta_c img | td"></div>
              <div className="col-6 xs-col-0 name | td"></div>
              <div className="col-4 xs-col-4 ta_c price | td">
                <div className="d_f jc_sb">
                  <div className="total-text">Итого:</div>
                  <div className="total-price">{total}</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-12 xs-col-4">
              <div className="cart_head">Корзина пуста</div>
            </div>
          </div>
        )}
        <div className="row cart-form">
          <div className="col-8 xs-col-4 form bg-dark">
            <div className="row-8">
              <div className="col-1 xs-col-0"></div>
              <div className="col-6 xs-col-8">
                <div className="cart_head">Контактные данные</div>
              </div>
              <div className="col-1 xs-col-0"></div>
            </div>
            <form action="">
              <div className="row-8">
                <div className="col-1 xs-col-0"></div>
                <div className="col-2 xs-col-8 fcol1">
                  <span className="input_wrapper">
                    <input type="text" placeholder="Имя" />
                  </span>
                </div>
                <div className="col-2 xs-col-8 fcol2">
                  <span className="input_wrapper">
                    <input type="text" placeholder="Телефон" />
                  </span>
                </div>
                <div className="col-2 xs-col-8 fcol3">
                  <span className="input_wrapper">
                    <input type="text" placeholder="Email" />
                  </span>
                </div>
                <div className="col-1 xs-col-0"></div>
              </div>
              <div className="row-8">
                <div className="col-1 xs-col-0"></div>
                <div className="col-6 xs-col-8">
                  <input type="text" placeholder="Адрес депо доставки" />
                </div>
                <div className="col-1 xs-col-0"></div>
              </div>
              <div className="row-8 | bottom">
                <div className="col-1 xs-col-0"></div>
                <div className="col-2 xs-col-8">
                  <input type="submit" value="Оформить заказ" />
                </div>
                <div className="col-2 xs-col-0"></div>
                <div className="col-2 xs-col-8">
                  <div className="disclaimer">
                    Нажимая на кнопку, я соглашаюсь с{" "}
                    <a href="/politic">политикой обработки</a> персональных
                    данных
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4 xs-col-4 bg-dark bl-light">
            <div className="d_f fd_c ai_c jc_c | boss">
              <img src={BossImg} width="262" height="262" alt="директор" />
              <div className="title">Консультант</div>
              <div className="name">Иван Абрамов</div>
              <div className="text">
                Мы вам перезвоним через 15 минут{" "}
                <span>для подтверждения заказа</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row service3">
          <div className="col-8 xs-col-0 bl br spacer"></div>
          <div className="col-4 xs-col-0 br spacer"></div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
