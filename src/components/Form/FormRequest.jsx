import React, {useEffect, useState} from 'react'
import Button from "../ui/Button/Button"
import Whatsapp from "../../assets/img/ico-wt.svg"
import Spinner from "../../assets/img/rings.svg"
import axios from "axios"
import qs from "qs"
import InputMask from "react-input-mask"
import {useNotification} from "../ui/Notify/NotifyProvider"
import {useQuery} from "@apollo/client";
import {GET_CONTENT} from "../../apollo/queries";

const FormRequest = (props) => {

    const [telegram, setTelegram] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [msgError, setMsgError] = useState(false)

    const dispatch = useNotification();

    const { data } = useQuery(GET_CONTENT)

    useEffect(() => {
        if (data) {
            setTelegram(data.posts.nodes[0].acfcontent.telegram)
        }
    }, [data])

    const handleNewNotification = (TYPE, message, title) => {
        dispatch({
            type: TYPE,
            message: message,
            title: title
        })
    }
    const clickHandler = () => {
        window.open(telegram)
    }

    const submitHandler = async () => {
        setLoading(true)
        if(!phone.includes("_")) {
            const data = {'username': name, 'phone': phone, 'message': message}
            const qsdata = qs.stringify(data)
            const instance = axios.create({
                baseURL: 'https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/62/feedback',
                timeout: 3000,
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            });
            await instance.post('https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/62/feedback', qsdata)
                .then(function (response) {
                    setNameError(false)
                    setPhoneError(false)
                    setMsgError(false)
                    if (response.data.status === 'validation_failed') {
                        if (response.data.invalid_fields) {
                            response.data.invalid_fields.map(field => {
                                if (field.error_id === '-ve-username') {
                                    setNameError(true)
                                    handleNewNotification("ERROR", "Укажите Ваше имя", "Ошибка")
                                    setTimeout(() => setLoading(false), 1000)
                                }
                                if (field.error_id === '-ve-phone') {
                                    setPhoneError(true)
                                    handleNewNotification("ERROR", "Укажите номер телефона", "Ошибка")
                                    setTimeout(() => setLoading(false), 1000)
                                }
                                if (field.error_id === '-ve-message') {
                                    setPhoneError(true)
                                    handleNewNotification("ERROR", "Напишите, чем мы можем Вам помочь", "Ошибка")
                                    setTimeout(() => setLoading(false), 1000)
                                }
                            })
                        }
                    } else {
                        handleNewNotification("SUCCESS", "Ваше сообщение успешно отправлено!", "Успех")
                        setName('')
                        setPhone('')
                        setMessage('')
                        setTimeout(() => {
                            setLoading(false)
                        }, 1000)
                        if (props.setTrigger !== undefined) {
                            setTimeout(() => {
                                props.setTrigger(false)
                            }, 1000)
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            handleNewNotification("ERROR", "Неправильно указан номер телефона", "Ошибка")
            setTimeout(() => setLoading(false), 1000)
            setPhoneError(true)
        }
    }

    useEffect(() => {
        setNameError(false)
    }, [name]);

    useEffect(() => {
        setPhoneError(false)
    }, [phone]);
    useEffect(() => {
        setMsgError(false)
    }, [message]);
    return (
        <div>
            <div className="h100">
                <div className={loading ? 'form__wrapper loading' : 'form__wrapper'}>
                    <div className="form__header">Оставить заявку</div>
                    <input className={nameError ? 'error' : ''} type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Имя"/>
                    <InputMask mask="+7 (999) 999-99-99" type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className={phoneError ? 'error' : ''} placeholder={"Номер телефона"} />
                    <textarea
                        className={nameError ? 'error' : ''}
                        name="message" id="txt-area"
                        value={message}
                        cols="30" rows="10"
                        onChange={(e)=>setMessage(e.target.value)}
                        placeholder={"Напишите, чем мы можем Вам помочь"}
                    />
                    <div className={"form__btn_w | d_f jc_sb"}>
                        <Button text={"Отправить"} color={"black btn-send"} ico={Spinner} action={submitHandler} />
                        <Button text={"WhatsApp"} color={"green"} ico={Whatsapp} action={clickHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormRequest;