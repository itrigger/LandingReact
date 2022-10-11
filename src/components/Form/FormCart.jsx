import React, { useContext, useEffect, useState } from "react";
import { useNotification } from "../ui/Notify/NotifyProvider";
import qs from "qs";
import axios from "axios";
import { Link, navigate } from "gatsby";
import InputMask from "react-input-mask";
import { CartContext } from "../../context/CartContext";

const FormCart = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [depo, setDepo] = useState("");
  const [cartContent, setCartContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [depoError, setDepoError] = useState(false);
  const [cartItems, setCartItems] = useContext(CartContext);

  const dispatch = useNotification();

  const handleNewNotification = (TYPE, message, title) => {
    dispatch({
      type: TYPE,
      message: message,
      title: title,
    });
  };

  const submitHandler = async (target) => {
    setLoading(true);
    target.classList.add("btn-loading");

    if (cartItems && cartItems.length > 0) {
      let temp = [];
      cartItems.map((item) =>
        temp.push([
          item.name,
          "Кол-во: " + item.quantity,
          "Цена: " + item.price,
        ])
      );
      setCartContent(temp);
    }

    const data = {
      username: name,
      usertel: phone,
      useremail: email,
      userdepo: depo,
      usercart: JSON.stringify(cartContent),
    };
    const qsdata = qs.stringify(data);
    const instance = axios.create({
      baseURL:
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1411/feedback",
      timeout: 3000,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    if (name === "") {
      handleNewNotification("ERROR", "Укажите своё имя", "Ошибка");
      setTimeout(() => setLoading(false), 1000);
      target.classList.remove("btn-loading");
      setNameError(true);
      return false;
    }
    if (phone.includes("_") || phone === "") {
      handleNewNotification(
        "ERROR",
        "Неправильно указан номер телефона",
        "Ошибка"
      );
      setTimeout(() => setLoading(false), 1000);
      target.classList.remove("btn-loading");
      setPhoneError(true);
      return false;
    }
    await instance
      .post(
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1411/feedback",
        qsdata
      )
      .then(function (response) {
        setNameError(false);
        setPhoneError(false);

        if (response.data.status === "validation_failed") {
          if (response.data.invalid_fields) {
            response.data.invalid_fields.map((field) => {
              if (field.error_id === "-ve-username") {
                setNameError(true);
                handleNewNotification("ERROR", "Укажите имя", "Ошибка");
                setTimeout(() => setLoading(false), 1000);
                target.classList.remove("btn-loading");
              }
              if (field.error_id === "-ve-usertel") {
                setPhoneError(true);
                handleNewNotification(
                  "ERROR",
                  "Укажите номер телефона",
                  "Ошибка"
                );
                setTimeout(() => setLoading(false), 1000);
                target.classList.remove("btn-loading");
              }
            });
          }
        } else {
          handleNewNotification(
            "SUCCESS",
            "Ваше сообщение успешно отправлено!",
            "Успех"
          );
          setName("");
          setPhone("");
          setDepo("");
          setEmail("");
          setTimeout(() => {
            setLoading(false);
            //clean cart
            setCartItems([]);
            navigate("/success");
          }, 1000);
          target.classList.remove("btn-loading");
          if (props.setTrigger !== undefined) {
            setTimeout(() => {
              props.setTrigger(false);
            }, 1000);
          }
        }
      })
      .catch(function (error) {
        handleNewNotification(
          "ERROR",
          "Ошибка сервера. Попробуйте еще раз",
          "Ошибка"
        );
        target.classList.remove("btn-loading");
      });
  };

  useEffect(() => {
    setNameError(false);
  }, [name]);
  useEffect(() => {
    setPhoneError(false);
  }, [phone]);
  useEffect(() => {
    setEmailError(false);
  }, [email]);
  useEffect(() => {
    setDepoError(false);
  }, [depo]);

  return (
    <>
      <div className="row-8">
        <div className="col-1 m-col-1 xs-col-0"></div>
        <div className="col-2 m-col-2 xs-col-8 fcol1">
          <span className="input_wrapper">
            <input
              className={nameError ? "error" : ""}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
            />
          </span>
        </div>
        <div className="col-2 m-col-2 xs-col-8 fcol2">
          <span className="input_wrapper">
            <InputMask
              mask="+7 (999) 999-99-99"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className={phoneError ? "error" : ""}
              placeholder={"Номер телефона"}
            />
          </span>
        </div>
        <div className="col-2 m-col-2 xs-col-8 fcol3">
          <span className="input_wrapper">
            <input
              type="text"
              placeholder="Email"
              value={email}
              className={emailError ? "error" : ""}
              onChange={(e) => setDepo(e.target.value)}
            />
          </span>
        </div>
        <div className="col-1 m-col-1 xs-col-0"></div>
      </div>
      <div className="row-8">
        <div className="col-1 m-col-1 xs-col-0"></div>
        <div className="col-6 m-col-6 xs-col-8">
          <input
            type="text"
            placeholder="Адрес доставки"
            value={depo}
            className={depoError ? "error" : ""}
            onChange={(e) => setDepo(e.target.value)}
          />
        </div>
        <div className="col-1 xs-col-0"></div>
      </div>
      <div className="row-8 | bottom">
        <div className="col-1 m-col-1 xs-col-0"></div>
        <div className="col-2 m-col-3 xs-col-8">
          <button
            className="btn-classic"
            onClick={(e) => submitHandler(e.target)}
          >
            <span>Оформить заказ</span>
          </button>
        </div>
        <div className="col-2 m-col-0 xs-col-0"></div>
        <div className="col-2 m-col-3 xs-col-8">
          <div className="disclaimer">
            Нажимая на кнопку, я соглашаюсь с{" "}
            <Link to="/politic">политикой обработки</Link> персональных данных
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCart;
