import React, {useState} from 'react'
import Button from "../ui/Button/Button"
import arrow from "../../assets/img/arrow.svg"
import zoom from "../../assets/img/zoom.png"
import para from "../../assets/img/para.jpg"
import Form from "../Form/Form";
import Lytebox from "../ui/Lytebox/Lytebox";
import FormRequest from "../Form/FormRequest";

const AskBlock = () => {

    const [slide, setSlide] = useState(false)
    const [slide2, setSlide2] = useState(false)

    const slideClickHandler = () => {
        setSlide(true)
    }
    const slide2ClickHandler = () => {
        setSlide2(true)
    }

    return (
        <div>

            <Lytebox trigger={slide} setTrigger={setSlide}>
                <Form setTrigger={setSlide} />
            </Lytebox>

            <Lytebox trigger={slide2} setTrigger={setSlide2}>
                <FormRequest setTrigger={setSlide2} />
            </Lytebox>

            <div className="askblock">
                <div className="in">
                    <div className="col-1" />
                    <div className="askblock__caption | col-7 xs-col-4">

                        <h1>Ищите запасные части
                            <span>для жд транспорта?</span>
                        </h1>
                        <div className="desc">
                            Сервис поиска запасных частей скоро появится на этом сайте, а сейчас можно поставить задачу менеджеру и он займется подбором того, что вам нужно.
                        </div>
                         <Button color="darkgray xl" textColor="yellow" ico={arrow} action={slideClickHandler} text="Оставить заявку"/>

                    </div>
                    <div className="askblock__promo | col-3 xs-col-4 d_f fd_c ai_c" onClick={slide2ClickHandler}>
                        <img src={zoom} alt="zoom"/>
                        <div>Сервис поиска запчастей</div>
                        <img src={para} alt="para"/>
                    </div>
                    <div className="col-1" />
                </div>
            </div>
        </div>
    );
};

export default AskBlock;