import React, {useEffect, useState} from 'react'
import Button from "../ui/Button/Button"
import WhatsappIco from "../../assets/img/ico-wt.svg"
import {useQuery} from "@apollo/client";
import {GET_CONTENT} from "../../apollo/queries";

const PromoBlack = () => {

    const [telegram, setTelegram] = useState("")

    const { data } = useQuery(GET_CONTENT)

    useEffect(() => {
        if (data) {
            setTelegram(data.posts.nodes[0].acfcontent.telegram)
        }
    }, [data])

    const clickHandler = () => {
        window.open(telegram)
    }
    return (
        <div className="promoblack">
            <div className="in">
                <div className="col-1 xs-col-0" />
                <div className="promoblack__vagons | col-7 xs-col-4" />
                <div className="promoblack__title | col-3 xs-col-4">
                    <h1>Покупаем и&nbsp;продаем вагоны <span>в любом состоянии: </span></h1>
                    <div className="desc">
                        Уже продано <b>1165</b> вагонов
                    </div>
                    <div className="promoblack__wt-w">
                        <Button action={clickHandler} text={"WhatsApp"} color={"green"} ico={WhatsappIco} />
                    </div>
                </div>
                <div className="col-1 xs-col-0" />
            </div>
        </div>
    );
};

export default PromoBlack;