import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Row_pre = ({ data, addToCart, wtClickHandler }) => {
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

  const cartDeleteItem = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== id));
    }
  };

  return (
    <>
      {isDesktop ? (
        <tr className="result-row-2">
          <td className="name-w">
            <div className="name">{data.name}</div>
          </td>

          <td>
            <div
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              className="description"
            ></div>
          </td>
          <td>
            <div>По всей России</div>
          </td>
          <td className=" price_block ">
            <div className="btn-w">
              {
                <button
                  className={"btn-wt-green"}
                  onClick={() => wtClickHandler()}
                >
                  <span className="ico ico-left ico-wt-white"></span>Запросить
                  цену
                </button>
              }
            </div>
          </td>
        </tr>
      ) : (
        /*mobile*/
        <tr className="result-row-2 card-mobile">
          <td className="name-w">
            <div className="name">{data.name}</div>
          </td>

          <td className="td_description">
            <span
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              className="description"
            ></span>
            {data.productsKP.mestonahozhdenie && (
              <>, {data.productsKP.mestonahozhdenie}</>
            )}
          </td>

          <td className=" price_block twocol">
            <div className="width50">
              <div className="price">{data.price ? data.price : "---"}</div>
            </div>
            <div className="width50">
              <div className="btn-w">
                {data.price && data.price === "999 999₽" ? (
                  <button
                    className={"btn-wt-green"}
                    onClick={() => wtClickHandler()}
                  >
                    <span className="ico ico-left ico-wt-white"></span>Подробнее
                  </button>
                ) : cartItems.find((x) => x.id === data.id) ? (
                  <button
                    onClick={() => cartDeleteItem(data.id)}
                    className={"btn-classic active"}
                  >
                    <span>Убрать</span>
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
                        telezhka: data.productsKP.telezhka
                          ? data.productsKP.telezhka
                          : null,
                        tolshhinaOboda: data.productsKP.tolshhinaOboda
                          ? data.productsKP.tolshhinaOboda
                          : null,
                      })
                    }
                    className={"btn-classic"}
                  >
                    <span>Заказать</span>
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

export default Row_pre;
