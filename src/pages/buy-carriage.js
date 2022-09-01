import * as React from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "gatsby";
import FormRequestFiles from "../components/Form/FormRequestFiles";
import Prems from "../components/home/Inner/Prems";
import FormSlider from "../components/Form/FormSlider";

const BuyCarriage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Скупка вагонов | Вагон Трейд - Покупка и продажа вагонов. Аренда.
          Запасные части.
        </title>
        <link rel="canonical" href="https://vagontrade.ru" />
        <link rel="icon" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F5DF4D" />
      </Helmet>
      <Layout>
        <div className="header-bg hbg1">
          <div className="row middle-border-12-light middle-border-12-over-bg bl-light br-light">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="breadcrumb">
                <ul>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>Скупка вагонов</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row middle-border-12-light middle-border-12-over-bg  bl-light br-light line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Скупка</span> вагонов
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end | page_header_btn">
              {/*<button className="btn yellow">
                <span>Оценить вагон</span>
              </button>*/}
            </div>
          </div>
        </div>

        <div className="row service3 middle-border-12 br bl" id="vlom">
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
        </div>
        <div className="row service3 middle-border-12 br bl">
          <div className="col-4 m-col-4 xs-col-4">
            <div className="head2">
              <span className="italic">Выкуп вагонов</span> по ценам выше рынка!
            </div>

            <ul className="content">
              <li>Предоплата 100%</li>
              <li>Самовывоз</li>
              <li>Лицензии на лом</li>
            </ul>
          </div>
          <div className="col-8 m-col-8 xs-col-4 ">
            <div className="bold">
              Выкупаем железнодорожный подвижной состав в любом состоянии, в т.
              ч.
              <br />- на металлолом (с учетом стоимости зап.частей)
              <br />- для работы на подъездных путях (без выхода на пути общего
              пользования)
              <br />- для дальнейшей работы (вагоны с неоконченным сроком
              службы).
              <br />
              Расчет стоимости вагонов производится специалистами компании в
              кратчайшие сроки и зависит от многих нюансов, включая остаточный
              срок службы, модель вагонов, состояние, тару, запасные части.
            </div>

            <p>
              Разделку подвижного состава осуществляем в собственных пунктах на
              Южно-Уральской (ст. Варгаши), Московской (ст. Яничкино),
              Юго-Восточной (ст. Рыжково), Северо-Кавказской ж.д. (ст. Батайск)
              и Западно-Сибирской ж.д. (ст. Чемской), что обеспечивает высокий
              темп работы и честный вес.
            </p>
          </div>
        </div>
        {/*<div className="row service3">
          <div className="col-4 m-col-0 xs-col-4 oh bl">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide className="s3s1"></SwiperSlide>
              <SwiperSlide className="s3s2"></SwiperSlide>
              <SwiperSlide className="s3s3"></SwiperSlide>
            </Swiper>
          </div>
          <div className="col-8 m-col-12 xs-col-4 form bg-dark">
            <div className="head3">
              <span className="italic">Отправьте заявку</span> на выкуп лома
            </div>
            <FormRequestFiles formc={"form1"} />
          </div>
        </div>*/}

        {/*<div className="row service3" id="vrazdelku">
          <div className="col-4 m-col-4 xs-col-0 bl br spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 br spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 br spacer"></div>
        </div>
        <div className="row service3">
          <div className="col-4 m-col-4 xs-col-4 bl br">
            <div className="head2">
              <span className="italic">Выкуп б/у</span> <div>вагонов с</div>
              остаточным <div>сроком службы</div>
            </div>
            <div className="hint">
              <span className="italic">Уже купили</span> 5990 вагонов
            </div>
            <ul className="content">
              <li>Выкуп по договору</li>
              <li>по всей территории России и странам СНГ</li>
              <li>по 100% предоплате</li>
            </ul>
          </div>
          <div className="col-8 m-col-8 xs-col-4 middle-border-8 br">
            <div className="bold">
              Реализация вагонов с истекающим сроком службы — разумное решение
              для обновления подвижного состава. Обеспечиваем оперативный выезд
              сотрудника для оценки технического состояния оборудования и
              оформления договорной документации на месте.
            </div>
            <p>
              Выкупаем все типы грузовых жд вагонов: полувагоны, крытые вагоны,
              платформы, думпкары, хопперы, цистерны, рефрижераторы.
            </p>
            <p>
              Выкупаем вагоны в любом состоянии, исправные подержанные вагоны,
              ремонтопригодные вагоны, требующие обслуживания, старый и
              неисправный транспорт с истекшим сроком службы. Выкупим вагоны с
              неисправными деталями, серьезными дефектами, уникальной
              конструкцией. Вызовите специалиста для технической экспертизы
              прямо сейчас, чтобы получить бесплатную комплексную оценку
              стоимости ваших вагонов и заключить договор на выкуп.
            </p>
          </div>
        </div>*/}
        <div className="row service3">
          <div className="col-4 m-col-0 xs-col-4 oh bl">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide className="s3s4"></SwiperSlide>
              <SwiperSlide className="s3s5"></SwiperSlide>
              <SwiperSlide className="s3s6"></SwiperSlide>
            </Swiper>
          </div>
          <div className="col-8 m-col-12 xs-col-4 form bg-dark" id="ocenka">
            {/*<div className="head3">
              <span className="italic">Отправьте заявку</span> на выкуп вагона
            </div>*/}
            <div className="head3">
              <span className="italic">Оцените</span> ваши вагоны за 10 минут
            </div>
            <FormSlider />
            {/*<FormRequestFiles formc={"form2"} />*/}
          </div>
        </div>
        <div className="row service3 bl br ">
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
        </div>
        <Prems cl="long-6" />
      </Layout>
    </div>
  );
};

export default BuyCarriage;
