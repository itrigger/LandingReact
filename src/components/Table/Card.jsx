import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Card = ({ data, addToCart, wtClickHandler }) => {
  const isBrowser = () => typeof window !== "undefined";
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 1023
  );

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth > 1023);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", updateMedia);
    return () =>
      isBrowser() && window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <tr className="card bt">
          <td className="">
            <div className="name-w">
              <div className="name">{data.productCategories.nodes[0].name}</div>
            </div>
          </td>

          <td>
            <div className="model">{data.name}</div>
          </td>

          <td className="">
            <div className="right">
              {data.stockQuantity > 0 ? data.stockQuantity : "Нет в наличии"}
            </div>
          </td>
          {data.productsKP.godVypuska ? (
            <td className="year">
              <div className="right">{data.productsKP.godVypuska}</div>
            </td>
          ) : (
            <td></td>
          )}
          {data.productsKP.mestonahozhdenie ? (
            <td className="">
              <div className="right">{data.productsKP.mestonahozhdenie}</div>
            </td>
          ) : (
            <td></td>
          )}

          <td>
            <div
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              className="description"
            ></div>
          </td>

          <td className="| price_block">
            <div className="price">
              {data.price
                ? data.price !== "999 999₽"
                  ? data.price
                  : "Договорная"
                : "---"}
            </div>
          </td>
          <td>
            <div className="btn-w">
              {data.price && data.price === "999 999₽" ? (
                <button
                  className={"btn-wt-green"}
                  onClick={() => wtClickHandler()}
                >
                  <span className="ico ico-left ico-wt-white"></span>Уточнить
                </button>
              ) : (
                <button
                  onClick={() =>
                    addToCart({
                      id: data.id,
                      price: data.price,
                      name: data.name,
                      image: data.image.srcSet,
                      stock: data.stockQuantity,
                      year: data.productsKP.godVypuska
                        ? data.productsKP.godVypuska
                        : null,
                      location: data.productsKP.mestonahozhdenie
                        ? data.productsKP.mestonahozhdenie
                        : null,
                    })
                  }
                  className={
                    cartItems.find((x) => x.id === data.id)
                      ? "btn-classic active"
                      : "btn-classic"
                  }
                >
                  <span>
                    {cartItems.find((x) => x.id === data.id)
                      ? "Уже в заказе"
                      : "Заказать"}
                  </span>
                </button>
              )}
            </div>
          </td>
        </tr>
      ) : (
        /*mobile*/
        <tr className="card card-mobile bt">
          <td className="d_f">
            <div className="left">
              <div className="name-w">
                <div className="card-title">Тип</div>
                <div className="name">
                  {data.productCategories.nodes[0].name}
                </div>
              </div>
            </div>
            <div className="right">
              <div className="card-title">Модель</div>
              <div className="model">{data.name}</div>
            </div>
          </td>

          <td className={"d_f"}>
            <div className="left">
              <div className="card-title">Кол-во</div>
              {data.stockQuantity > 0 ? data.stockQuantity : "Нет в наличии"}
            </div>
            <div className="right">
              {data.productsKP.godVypuska ? (
                <>
                  <div className="card-title">Г.в.</div>
                  {data.productsKP.godVypuska}
                </>
              ) : (
                ""
              )}
            </div>
          </td>

          {data.productsKP.mestonahozhdenie ? (
            <td className="">
              <div className="card-title">Местонахождение</div>
              {data.productsKP.mestonahozhdenie}
            </td>
          ) : (
            <td></td>
          )}

          <td>
            <div className="card-title">Состояние</div>
            <div
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              className="description"
            ></div>
          </td>

          <td className="| price_block twocol">
            <div className="width50">
              <div className="price">
                {data.price
                  ? data.price !== "999 999₽"
                    ? data.price
                    : "Договорная"
                  : "---"}
              </div>
            </div>
            <div className="width50">
              <div className="btn-w">
                {data.price && data.price === "999 999₽" ? (
                  <button
                    className={"btn-wt-green"}
                    onClick={() => wtClickHandler()}
                  >
                    <span className="ico ico-left ico-wt-white"></span>Уточнить
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      addToCart({
                        id: data.id,
                        price: data.price,
                        name: data.name,
                        image: data.image.srcSet,
                        stock: data.stockQuantity,
                        year: data.productsKP.godVypuska
                          ? data.productsKP.godVypuska
                          : null,
                        location: data.productsKP.mestonahozhdenie
                          ? data.productsKP.mestonahozhdenie
                          : null,
                      })
                    }
                    className={
                      cartItems.find((x) => x.id === data.id)
                        ? "btn-classic active"
                        : "btn-classic"
                    }
                  >
                    <span>
                      {cartItems.find((x) => x.id === data.id)
                        ? "Уже в заказе"
                        : "Заказать"}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Card;
