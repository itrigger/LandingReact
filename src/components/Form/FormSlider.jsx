import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { useNotification } from "../ui/Notify/NotifyProvider";
import { Link } from "gatsby";

const FormSlider = () => {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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

    const data = { usertype: msg, useremail: email };
    const qsdata = qs.stringify(data);
    const instance = axios.create({
      baseURL:
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1693/feedback",
      timeout: 3000,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    if (email === "") {
      handleNewNotification("ERROR", "Укажите свой email", "Ошибка");
      setTimeout(() => setLoading(false), 1000);
      target.classList.remove("btn-loading");
      setEmailError(true);
      return false;
    }
    if (msg === "") {
      handleNewNotification("ERROR", "Укажите номера вагонов", "Ошибка");
      setTimeout(() => setLoading(false), 1000);
      target.classList.remove("btn-loading");
      setMsgError(true);
      return false;
    }
    await instance
      .post(
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/1693/feedback",
        qsdata
      )
      .then(function (response) {
        setMsgError(false);
        setEmailError(false);

        if (response.data.status === "validation_failed") {
          if (response.data.invalid_fields) {
            response.data.invalid_fields.map((field) => {
              if (field.error_id === "-ve-usertype") {
                setMsgError(true);
                handleNewNotification("ERROR", "Укажите тип вагона", "Ошибка");
                setTimeout(() => setLoading(false), 1000);
                target.classList.remove("btn-loading");
              }
              if (field.error_id === "-ve-useremail") {
                setEmailError(true);
                handleNewNotification("ERROR", "Укажите вашу почту", "Ошибка");
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
          setMsg("");
          setEmail("");
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          target.classList.remove("btn-loading");
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
    setMsgError(false);
  }, [msg]);

  useEffect(() => {
    setEmailError(false);
  }, [email]);

  return (
    <div
      className={loading ? "d_f fd_c dark-form loading" : "d_f fd_c dark-form"}
    >
      <span className="input_wrapper">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={emailError ? "error" : ""}
          placeholder={"Ваш e-mail"}
        />
      </span>
      <span className="input_wrapper">
        <input
          type="text"
          value={msg}
          placeholder={"Номера вагонов"}
          className={msgError ? "error" : ""}
          onChange={(e) => setMsg(e.target.value)}
        />
      </span>
      <button className="btn-classic" onClick={(e) => submitHandler(e.target)}>
        <span>Получить оценку вагонов</span>
      </button>
      <div className="disclaimer black-bg">
        Нажимая на кнопку, я соглашаюсь с{" "}
        <Link to="/politic">политикой обработки</Link> персональных данных
      </div>
    </div>
  );
};

export default FormSlider;
