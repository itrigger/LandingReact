import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import InputMask from "react-input-mask";
import { useNotification } from "../ui/Notify/NotifyProvider";
import { Link } from "gatsby";
import { CARRIAGES } from "../../utility/constants";

const FormFooter = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
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

    const data = { username: name, usertel: phone, usermsg: msg };
    const qsdata = qs.stringify(data);
    const instance = axios.create({
      baseURL:
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1408/feedback",
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
    await instance
      .post(
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1408/feedback",
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
    setNameError(false);
  }, [name]);

  useEffect(() => {
    setPhoneError(false);
  }, [phone]);

  return (
    <div
      className={loading ? "d_f fd_c dark-form loading" : "d_f fd_c dark-form"}
    >
      <div className="d_f fd_c">
        <span className="input_wrapper">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={nameError ? "error" : ""}
          />
        </span>
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
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Сообщение"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </span>
        <button
          className="btn-classic"
          onClick={(e) => submitHandler(e.target)}
        >
          <span>Отправить запрос</span>
        </button>
        <div className="disclaimer black-bg">
          Нажимая на кнопку, я соглашаюсь с{" "}
          <Link to="/politic">политикой обработки</Link> персональных данных
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
