import React, { useEffect, useRef, useState } from "react";
import { useNotification } from "../ui/Notify/NotifyProvider";
import InputMask from "react-input-mask";
import axios from "axios";
import { Link } from "gatsby";
import { CARRIAGES } from "../../utility/constants";

const FormRequestFiles = (props) => {
  const isBrowser = () => typeof window !== "undefined";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [vagonType, setVagonType] = useState("1");
  const [vagonModel, setVagonModel] = useState("1");
  const [vagonState, setVagonState] = useState("1");
  //temp
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  //--temp
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 1023
  );

  const fileInput = useRef(null);

  const dispatch = useNotification();

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth > 1023);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", updateMedia);
    return () =>
      isBrowser() && window.removeEventListener("resize", updateMedia);
  });

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
    let formData = new FormData();
    formData.append("username", name);
    formData.append("userphone", phone);
    formData.append("useremail", email);
    formData.append("usermessage", message);
    formData.append("usertype", vagonType);
    formData.append("usermodel", vagonModel);
    formData.append("userstate", vagonState);
    formData.append("userfiles", selectedFile);
    const instance = axios.create({
      baseURL:
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/265/feedback",
      timeout: 3000,
      headers: { "content-type": "multipart/form-data" },
    });
    await instance
      .post(
        "https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/265/feedback",
        formData
      )
      .then(function (response) {
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setMsgError(false);
        if (phone.includes("_") || phone === "") {
          handleNewNotification(
            "ERROR",
            "Неправильно указан номер телефона",
            "Ошибка"
          );
          setTimeout(() => setLoading(false), 1000);
          target.classList.remove("btn-loading");
          setPhoneError(true);
        }
        if (response.data.status === "validation_failed") {
          if (response.data.invalid_fields) {
            response.data.invalid_fields.map((field) => {
              if (field.error_id === "-ve-username") {
                setNameError(true);
                handleNewNotification("ERROR", "Укажите Ваше имя", "Ошибка");
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
              }
              if (field.error_id === "-ve-message") {
                setMsgError(true);
                handleNewNotification(
                  "ERROR",
                  "Напишите, чем мы можем Вам помочь",
                  "Ошибка"
                );
                setTimeout(() => setLoading(false), 1000);
                target.classList.remove("btn-loading");
              }
              if (field.error_id === "-ve-useremail") {
                setEmailError(true);
                handleNewNotification(
                  "ERROR",
                  "Неправильный формат почты",
                  "Ошибка"
                );
                setTimeout(() => setLoading(false), 1000);
                target.classList.remove("btn-loading");
              }
              if (field.error_id === "-ve-userfiles") {
                setFileError(true);
                handleNewNotification("ERROR", field.message, "Ошибка");
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
          setEmail("");
          setMessage("");
          setVagonType("");
          setVagonState("");
          setVagonModel("");
          setSelectedFile();
          setIsFilePicked(false);

          setTimeout(() => {
            setLoading(false);
            target.classList.remove("btn-loading");
          }, 1000);

          if (props.setTrigger !== undefined) {
            setTimeout(() => {
              props.setTrigger(false);
            }, 1000);
          }
        }
      })
      .catch(function (error) {
        setTimeout(() => setLoading(false), 1000);
        handleNewNotification(
          "ERROR",
          "Данный файл невозможно загрузить",
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
    setMsgError(false);
  }, [message]);
  useEffect(() => {
    setEmailError(false);
  }, [email]);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleLabelClick = () => {
    if (!isFilePicked) {
      fileInput.current.click();
    }
  };

  const deleteImageHandler = () => {
    setIsFilePicked(false);
    setSelectedFile(null);
  };

  return (
    <div>
      <div className="row">
        <div className="col-4 m-col-4 xs-col-4 fcol1">
          <span className="input_wrapper">
            <input
              type="text"
              placeholder="Имя"
              value={name}
              className={nameError ? "error" : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
        </div>
        <div className="col-4 m-col-4 xs-col-4 fcol2">
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
        <div className="col-4 m-col-4 xs-col-4 fcol3">
          <span className="input_wrapper">
            <input
              type="text"
              placeholder="Email"
              value={email}
              className={emailError ? "error" : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 m-col-4 xs-col-4 fcol1">
          <select
            name=""
            id=""
            value={vagonType}
            onChange={(e) => setVagonType(e.target.value)}
          >
            <option value="1" disabled>
              Тип вагона
            </option>
            {CARRIAGES.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4 m-col-4 xs-col-4 fcol2">
          <select
            name=""
            id=""
            value={vagonModel}
            onChange={(e) => setVagonModel(e.target.value)}
          >
            <option value="1" disabled>
              Модель вагона
            </option>
            <option value="2">1</option>
            <option value="3">2</option>
          </select>
        </div>
        <div className="col-4 m-col-4 xs-col-4 fcol3">
          <select
            name=""
            id=""
            value={vagonState}
            onChange={(e) => setVagonState(e.target.value)}
          >
            <option value="1" disabled>
              Состояние вагона
            </option>
            <option value="2">Плохое</option>
            <option value="3">Среднее</option>
            <option value="4">Хорошее</option>
            <option value="5">Новый</option>
          </select>
        </div>
        {!isDesktop ? (
          <div className="xs-col-4">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Текст сообщения"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        ) : null}
      </div>
      <div className="row">
        <div className="col-4 m-col-4 xs-col-4 fcol1">
          <label onClick={handleLabelClick} className="fileReceiver">
            {isFilePicked && selectedFile ? (
              <>
                <div
                  className="file-preview"
                  onClick={deleteImageHandler}
                  style={{
                    backgroundImage:
                      "url(" + URL.createObjectURL(selectedFile) + ")",
                  }}
                ></div>
              </>
            ) : (
              <>
                <div className="ico ico-camera"></div>
                <div>Прикрепите фото</div>
              </>
            )}
          </label>
          <input
            ref={fileInput}
            type="file"
            name="file"
            id="file"
            multiple
            accept="image/*"
            onChange={changeHandler}
            style={{ visibility: "hidden" }}
          />
          {isDesktop ? (
            <div className="disclaimer">
              Нажимая на кнопку, я соглашаюсь с{" "}
              <Link to="/politic">политикой обработки</Link> персональных данных
            </div>
          ) : null}
        </div>
        <div className="col-8 m-col-8 xs-col-4 fcol3">
          {isDesktop ? (
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Текст сообщения"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          ) : null}
          <button
            className={loading ? "btn-classic disabled" : "btn-classic"}
            onClick={(e) => submitHandler(e.target)}
          >
            <span>Отправить заявку</span>
          </button>
          {!isDesktop ? (
            <div className="disclaimer">
              Нажимая на кнопку, я соглашаюсь с{" "}
              <Link to="/politic">политикой обработки</Link> персональных данных
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FormRequestFiles;
