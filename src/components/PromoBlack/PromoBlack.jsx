import React from 'react'
import Button from "../ui/Button/Button"
import whatsapp from "../../assets/img/ico-wt.svg"

const PromoBlack = () => {
    const clickHandler = () => {
        window.open("https://google.ru")
    }
    return (
        <div className="promoblack">
            <div className="in">
                <div className="col-1 xs-col-0" />
                <div className="promoblack__vagons | col-7 xs-col-4" />
                <div className="promoblack__title | col-3 xs-col-4">
                    <h1>Продаем <span>хорошие вагоны</span></h1>
                    <div className="desc">
                        Уже куплено <b>1310</b> вагонов
                    </div>
                    <div className="promoblack__wt-w">
                        <Button action={clickHandler} text={"WhatsApp"} color={"green"} ico={whatsapp} />
                    </div>
                </div>
                <div className="col-1 xs-col-0" />
            </div>
        </div>
    );
};

export default PromoBlack;