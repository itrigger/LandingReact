import React, {useEffect, useState} from "react"
import logo from '../../../assets/img/logo.svg'
import ico1 from '../../../assets/img/location.svg'
import Form from "../../Form/Form"
import {useQuery} from "@apollo/client";
import {GET_CONTENT} from "../../../apollo/queries";

export default function Header() {

    const [tel, setTel] = useState("")
    const [telCall, setTelCall] = useState("")


    const { data } = useQuery(GET_CONTENT)

    useEffect(() => {
        if (data) {
            setTel(data.posts.nodes[0].acfcontent.telFront)
            setTelCall(data.posts.nodes[0].acfcontent.telCall)
        }
    }, [data])


    return (
        <div className="yellow_w_header">
            <div className="promo__icons">
                <div className="ico1">
                    <img src={ico1} alt="ico1"/>
                    <div className="ico-text">Москва</div>
                </div>
                <div className="ico2"><img src={ico1} alt="ico1"/></div>
                <div className="ico3"><img src={ico1} alt="ico1"/></div>
                <div className="panel">
                    <b>В наличии:</b>
                    <div>Колесные пары - 13</div>
                    <div>Колеса - 10</div>
                    <div>Тяговые хомуты - 24</div>
                </div>
            </div>
            <div className="in">
                <div className="col-1 xs-col-0" />
               <header className="header | d_f jc_sb ai_c col-10 xs-col-4">
                    <div className="header__logo">
                        <img src={logo} alt="" className="logo"/>
                    </div>
                   <div className="header__tel"><a href={"tel:" + telCall}>{tel}</a></div>
               </header>
                <div className="col-1 xs-col-0" />
                <div className="col-1 xs-col-0" />
                <div className="promo | col-10 xs-col-4">
                    <div className="promo__text | col-6 xs-col-4 d_f fd_c jc_c">
                        <h1>Покупка и продажа вагонов.
                            Аренда и ЖД сервис.
                            Запасные части.</h1>
                        <div className="promo__desc">
                            <p>Купить, арендовать,  или продать железнодорожную технику стало проще, потому что  мы создаем
                            сервис для быстрого и легкого поиска,  а пока  идет работа над созданием сайта,  вы можете
                            задать любой вопрос специалисту.</p>
                        </div>
                    </div>
                    <div className="col-1 xs-col-0" />
                    <div className="promo__form | col-3 xs-col-4">
                        <Form />
                    </div>
                </div>
                <div className="col-1 xs-col-0" />
            </div>
        </div>
    )
}