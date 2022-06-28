import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Card = ({ data, addToCart }) => {
  const [cartItems, setCartItems] = useContext(CartContext);

  return (
    <div className="card bt">
      <div className="d_f fd_c">
        <div className="img">
          <img srcSet={data.image ? data.image.srcSet : ""} alt="" />
        </div>
        <div className="name-w">
          <div className="name">{data.name}</div>
          <div
            dangerouslySetInnerHTML={{ __html: data.shortDescription }}
            className="description"
          ></div>
        </div>
      </div>
      <div className="col-4 m-col-4 | minirow-w">
        <div className="d_f | minirow">
          <div className="left">Наличие</div>
          <div className="right">
            {data.stockQuantity > 0
              ? "В наличии: " + data.stockQuantity
              : "Нет в наличии"}
          </div>
        </div>
        {data.productsKP.godVypuska ? (
          <div className="d_f | minirow">
            <div className="left">Год выпуска</div>
            <div className="right">{data.productsKP.godVypuska}</div>
          </div>
        ) : (
          ""
        )}
        {data.productsKP.telezhka ? (
          <div className="d_f | minirow">
            <div className="left">Тип оси</div>
            <div className="right">{data.productsKP.telezhka}</div>
          </div>
        ) : (
          ""
        )}
        {data.productsKP.mestonahozhdenie ? (
          <div className="d_f | minirow">
            <div className="left">Местонахождение</div>
            <div className="right">{data.productsKP.mestonahozhdenie}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="col-4 m-col-4 d_f jc_sb ai_c | price_block">
        <div className="price">{data.price ? data.price : "---"}</div>
        <div className="btn-w">
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
        </div>
      </div>
    </div>
  );
};

export default Card;
