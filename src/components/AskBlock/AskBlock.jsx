import React, {useState} from 'react'
import Button from "../ui/Button/Button"
import arrow from "../../assets/img/arrow.svg"
import zoom from "../../assets/img/zoom.png"
import para from "../../assets/img/para.jpg"
import Form from "../Form/Form";
import Lytebox from "../ui/Lytebox/Lytebox";

const AskBlock = () => {

    const [slide, setSlide] = useState(false)

    const slideClickHandler = () => {
        setSlide(true)
    }

    return (
        <div>

            <Lytebox trigger={slide} setTrigger={setSlide}>
                <Form setTrigger={setSlide} />
            </Lytebox>

            <div className="askblock">
                <div className="in">
                    <div className="col-1" />
                    <div className="askblock__caption | col-7 xs-col-4">

                        <h1>Ищите запчасти?
                            <span>Спросите - обязательно найдём!</span>
                        </h1>
                        <div className="desc">
                            Сервис  поиска вагонов и запчастей для жд   транспорта скоро появится на этом сайте, а сейчас можно поставить  задачу менеджеру и он займется поиском того, что вам нужно.
                        </div>
                         <Button color="darkgray xl" textColor="yellow" ico={arrow} action={slideClickHandler} text="Поставить задачу"/>

                    </div>
                    <div className="askblock__promo | col-3 xs-col-4 d_f fd_c ai_c">
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