import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import InputMask from "react-input-mask";
import { useNotification } from "../ui/Notify/NotifyProvider";
import { Link } from "gatsby";

const Form = (props) => {
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

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

    const data = { usertype: type, usertel: phone };
    const qsdata = qs.stringify(data);
    const instance = axios.create({
      baseURL:
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1402/feedback",
      timeout: 3000,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
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
    if (type === "1") {
      handleNewNotification("ERROR", "Выберите тип вагона", "Ошибка");
      setTimeout(() => setLoading(false), 1000);
      target.classList.remove("btn-loading");
      setTypeError(true);
      return false;
    }
    await instance
      .post(
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1402/feedback",
        qsdata
      )
      .then(function (response) {
        setTypeError(false);
        setPhoneError(false);

        if (response.data.status === "validation_failed") {
          if (response.data.invalid_fields) {
            response.data.invalid_fields.map((field) => {
              if (field.error_id === "-ve-usertype") {
                setTypeError(true);
                handleNewNotification("ERROR", "Укажите тип вагона", "Ошибка");
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
          setType("");
          setPhone("");
          setTimeout(() => {
            setLoading(false);
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
    setTypeError(false);
  }, [type]);

  useEffect(() => {
    setPhoneError(false);
  }, [phone]);

  return (
    <div
      className={loading ? "d_f fd_c dark-form loading" : "d_f fd_c dark-form"}
    >
      <span className="input_wrapper">
        <InputMask
          mask="+7 (999) 999-99-99"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className={phoneError ? "error" : ""}
          placeholder={"Ваш телефон"}
        />
      </span>
      <span className="input_wrapper">
        <input
          type="text"
          value={type}
          placeholder={"Сообщение"}
          className={typeError ? "error" : ""}
          onChange={(e) => setType(e.target.value)}
        />
      </span>
      <button className="btn-classic" onClick={(e) => submitHandler(e.target)}>
        <span>Отправить заявку</span>
      </button>
      <div className="disclaimer black-bg">
        Нажимая на кнопку, я соглашаюсь с{" "}
        <Link to="/politic">политикой обработки</Link> персональных данных
      </div>
    </div>
  );
};

export default Form;
