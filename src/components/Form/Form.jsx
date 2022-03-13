import React, {useEffect, useState} from 'react'
import Button from "../ui/Button/Button"
import Telegram from "../../assets/img/ico-telegram.svg"
import Spinner from "../../assets/img/rings.svg"
import axios from "axios"
import qs from "qs"
import InputMask from "react-input-mask"
import {useNotification} from "../ui/Notify/NotifyProvider"
import {useQuery} from "@apollo/client";
import {GET_CONTENT} from "../../apollo/queries";

const Form = (props) => {


    const [telegram, setTelegram] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

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
            const data = {'username': name, 'phone': phone}
            const qsdata = qs.stringify(data)
            const instance = axios.create({
                baseURL: 'https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback',
                timeout: 3000,
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            });
            await instance.post('https://api.vagontrade.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback', qsdata)
                .then(function (response) {
                    setNameError(false)
                    setPhoneError(false)
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
                            })
                        }
                    } else {
                        handleNewNotification("SUCCESS", "Ваше сообщение успешно отправлено!", "Успех")
                        setName('')
                        setPhone('')
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

    return (
        <div className="h100">
            <div className={loading ? 'form__wrapper loading' : 'form__wrapper'}>
                <div className="form__header">Оставить заявку</div>
                <input className={nameError ? 'error' : ''} type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Имя"/>
                <InputMask mask="+7 (999) 999-99-99" type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className={phoneError ? 'error' : ''} placeholder={"Номер телефона"} />
                <div className={"form__btn_w | d_f jc_sb"}>
                    <Button text={"Отправить"} color={"black btn-send"} ico={Spinner} action={submitHandler} />
                    <Button text={"Телеграм"} color={"blue"} ico={Telegram} action={clickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default Form;