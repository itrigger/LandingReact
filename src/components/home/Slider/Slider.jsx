import React, { useEffect, useState } from "react";
import Slide from "../../../assets/img/home_image.jpg";
import videomp4 from "../../../assets/video/video2.mp4";
import videoogv from "../../../assets/video/video2.ogv";
import videowebm from "../../../assets/video/video2.webm";
import { Link } from "gatsby";
import Form from "../../Form/Form";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lytebox from "../../ui/Lytebox/Lytebox";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
import FormFooter from "../../Form/FormFooter";

const Slider = () => {
  const swiperRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slide, setSlide] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const slideClickHandler = () => {
    setSlide(true);
  };
  const slideClickHandler2 = () => {
    setSlide2(true);
  };
  const slideClickHandler3 = () => {
    setSlide3(true);
  };
  useEffect(() => {}, [activeIndex]);

  return (
    <div className="slider">
      <Lytebox trigger={slide} setTrigger={setSlide}>
        <div className="head3">
          <span className="italic">Быстрый</span> подбор вагона
        </div>
        <Form setTrigger={setSlide} />
      </Lytebox>
      <Lytebox trigger={slide2} setTrigger={setSlide2}>
        <div className="head3">
          <span className="italic">Получить</span> консультацию
        </div>
        <Form setTrigger={setSlide2} />
      </Lytebox>
      <Lytebox trigger={slide3} setTrigger={setSlide3}>
        <div className="head3">
          <span className="italic">Получить</span> консультацию
        </div>
        <FormFooter setTrigger={setSlide3} />
      </Lytebox>
      <div className="cont">
        <video
          width="400"
          height="300"
          autoPlay
          loop
          muted
          playsInline
          poster={Slide}
          className="videoplayer"
        >
          <source src={videoogv} type='video/ogg; codecs="theora, vorbis"' />
          <source
            src={videomp4}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source src={videowebm} type='video/webm; codecs="vp8, vorbis"' />
        </video>
      </div>
      <div className="row middle-border-12-light middle-border-12-over-bg br-light bl-light | line1">
        <div className="d_f fd_c jc_c col-4 m-col-6 xs-col-4 | swiper-my-wrapper">
          <div className="back"></div>
          <Swiper
            modules={[Navigation, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            spaceBetween={0}
            slidesPerView={1}
            ref={swiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: {
                autoHeight: false,
              },
              600: {
                autoHeight: false,
              },
            }}
          >
            <SwiperSlide>
              <div className="head big-head">
                <span className="italic">Продажа</span> б/у вагонов
              </div>
              <div className="desc">
                Вагоны для работы на подъездные пути, вагоны Б/У готовые к
                работе, полувагоны, крытые, цистерны, платформы, хопперы,
                думкары
              </div>
              <button
                className="btn yellow mobile"
                onClick={() => slideClickHandler()}
              >
                <span>Быстрый подбор вагона</span>
              </button>
              <Link to="/sale-carriage" className="btn swiper-slide-btn">
                <span>Перейти в раздел</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <div className="head big-head">
                <span className="italic">Продажа</span> запчастей
              </div>
              <div className="desc">
                Всякие разные запчасти новые и бывшие в употреблении
              </div>
              <button
                className="btn yellow mobile"
                onClick={() => slideClickHandler3()}
              >
                <span>Получить консультацию</span>
              </button>
              <Link to="/sale-parts" className="btn swiper-slide-btn">
                <span>Перейти в раздел</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <div className="head big-head">
                <span className="italic">Скупаем</span> вагоны в лом
              </div>
              <div className="desc">
                Вагоны для работы на подъездные пути, вагоны Б/У готовые к
                работе, полувагоны, крытые, цистерны, платформы, хопперы,
                думкары
              </div>
              <button
                className="btn yellow mobile"
                onClick={() => slideClickHandler2()}
              >
                <span>Получить консультацию</span>
              </button>
              <Link to="/buy-carriage" className="btn swiper-slide-btn">
                <span>Перейти в раздел</span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-4 m-col-0 xs-col-0"></div>
        <div className="d_f ai_c col-4 m-col-6 xs-col-0">
          <div className="form">
            <div className="head">
              <span className="italic">быстрый</span> подбор вагонов
            </div>
            <Form />
          </div>
        </div>
      </div>
      <div className="row middle-border-12-light middle-border-12-over-bg br-light bl-light | slider_bottom">
        <div className="col-4 m-col-6 xs-col-2 d_f ai_c">
          <button
            className={
              activeIndex === 0
                ? "my-swiper-pagination-btn active"
                : "my-swiper-pagination-btn"
            }
            onClick={() => swiperRef.current.swiper.slideTo(1)}
          >
            01
          </button>
          <button
            className={
              activeIndex === 1
                ? "my-swiper-pagination-btn active"
                : "my-swiper-pagination-btn"
            }
            onClick={() => swiperRef.current.swiper.slideTo(2)}
          >
            02
          </button>
          <button
            className={
              activeIndex === 2
                ? "my-swiper-pagination-btn active"
                : "my-swiper-pagination-btn"
            }
            onClick={() => swiperRef.current.swiper.slideTo(3)}
          >
            03
          </button>
        </div>
        <div className="col-4 m-col-0 xs-col-0 "></div>
        <div className="col-4 m-col-6 xs-col-2 d_f ai_c jc_end">
          <button
            className="prev"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          ></button>
          <button
            className="next"
            onClick={() => swiperRef.current.swiper.slideNext()}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
