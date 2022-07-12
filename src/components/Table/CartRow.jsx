import React, { useEffect, useState } from "react";

const CartRow = ({
  data,
  calculateTotal,
  cartPlus,
  cartMinus,
  cartDeleteItem,
}) => {
  const isBrowser = () => typeof window !== "undefined";
  const [inputValue, setInputValue] = useState(data.quantity);
  const [total, setTotal] = useState("0");
  const [quantityMax, setQuantityMax] = useState(data.stock ? data.stock : 1);
  const [maxErr, setMaxErr] = useState(false);
  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 1023
  );

  let price4 = parseInt(data.price.replace("₽", "").replace(/ /g, ""));

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth > 1023);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", updateMedia);
    return () =>
      isBrowser() && window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    setTotal(
      new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      }).format(inputValue * price4)
    );
  }, [inputValue, price4]);

  const stepUpHandler = () => {
    if (inputValue >= quantityMax) {
      setMaxErr(true);
    } else {
      setInputValue(inputValue + 1);
      cartPlus(data.id);
    }
  };

  const stepDownHandler = () => {
    setMaxErr(false);
    inputValue > 1 ? setInputValue(inputValue - 1) : setInputValue(1);
    cartMinus(data.id);
  };

  return (
    <>
      {isDesktop ? (
        <div className="row | table-cart">
          <div className="col-8 m-col-4 name | td">
            {data.name}
            <div className="description d_f">
              {data.year ? <div>Год выпуска: {data.year}</div> : ""}
              {data.location ? <div>Местонахождение: {data.location}</div> : ""}
              {data.telezhka ? <div>Тип оси: {data.telezhka}</div> : ""}
              {data.tolshhinaOboda ? (
                <div>Толщина обода: {data.tolshhinaOboda}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-1 m-col-2  ta_c price | td">
            {data.price ? data.price : "---"}
          </div>
          <div className="col-1 m-col-1 ta_c count | td">
            <div className="inputCountWrap">
              <button
                className="stepper-step down"
                aria-label="Step down"
                onClick={() => stepDownHandler()}
              ></button>
              <input
                type="number"
                min="1"
                disabled
                value={inputValue.toString()}
                className="inputCount inputCount-1"
              />
              <button
                className="stepper-step up"
                aria-label="Step up"
                onClick={() => stepUpHandler()}
              ></button>
              <div className={maxErr ? "max-msg active" : "max-msg"}>
                В наличии: {quantityMax}
              </div>
            </div>
          </div>
          <div className="col-1 m-col-2  ta_c subtotal | td">{total}</div>
          <div className="col-1 m-col-1 ta_c del | td">
            <button
              className="d_f jc_c delete-row"
              onClick={() => cartDeleteItem(data.id)}
            >
              <span className="ico ico-del-cart"></span>
            </button>
          </div>
        </div>
      ) : (
        <div className="row | table-cart table-cart-mobile">
          <div className="xs-col-4 name | td">
            <div className="th">Наименование</div>
            {data.name}
            <button
              className="d_f jc_end delete-row"
              aria-label="Delete row"
              onClick={() => cartDeleteItem(data.id)}
            >
              <span className="ico ico-del-cart"></span>
            </button>
          </div>
          <div className="xs-col-4  price | td">
            <div className="th">Цена</div>
            {data.price ? data.price : "---"}
          </div>
          <div className="xs-col-4  count | td">
            <div className="th">Кол-во</div>
            <div className="inputCountWrap">
              <button
                className="stepper-step down"
                aria-label="Step down"
                onClick={() => stepDownHandler()}
              ></button>
              <input
                type="number"
                min="1"
                disabled
                value={inputValue.toString()}
                className="inputCount inputCount-1"
              />
              <button
                className="stepper-step up"
                aria-label="Step up"
                onClick={() => stepUpHandler()}
              ></button>
              <div className={maxErr ? "max-msg active" : "max-msg"}>
                В наличии: {quantityMax}
              </div>
            </div>
          </div>
          <div className="xs-col-4  subtotal | td">
            <div className="th">Стоимость</div>
            {total}
          </div>
        </div>
      )}
    </>
  );
};

export default CartRow;
