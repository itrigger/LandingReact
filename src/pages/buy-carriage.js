import * as React from "react";
import Layout from "../components/ui/layout/Layout";
import { Helmet } from "react-helmet";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Ico1 from "../assets/img/step1.svg";
import Ico2 from "../assets/img/step2.svg";
import Ico3 from "../assets/img/step3.svg";
import Ico4 from "../assets/img/step4.svg";
import { Link } from "gatsby";
import FormRequestFiles from "../components/Form/FormRequestFiles";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffe500" />
        <meta name="msapplication-TileColor" content="#ffe500" />
        <meta name="theme-color" content="#ffe500" />
      </Helmet>
      <Layout>
        <div className="header-bg hbg1">
          <div className="row middle-border-12-light middle-border-12-over-bg bl-light br-light">
            <div className="col-12 xs-col-4">
              <div className="breadcrumb">
                <ul>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>Скупка б/у вагонов</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row middle-border-12-light middle-border-12-over-bg  bl-light br-light line2">
            <div className="col-8 xs-col-4">
              <h1>
                <span className="italic">Скупка</span> б/у вагонов
              </h1>
            </div>
            <div className="col-4 xs-col-4 pos_r zi-2 d_f jc_end | page_header_btn">
              {/*<button className="btn yellow">
                <span>Оценить вагон</span>
              </button>*/}
            </div>
          </div>
        </div>

        <div className="row service3 middle-border-12 br bl">
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
        </div>
        <div className="row service3 middle-border-12 br bl">
          <div className="col-4 xs-col-4">
            <div className="head2">
              <span className="italic">Выкуп</span> лома вагонов дорого!
            </div>
            <div className="hint">
              <span className="italic">Уже купили</span> 5990 тонн ЛОМА
            </div>
            <ul className="content">
              <li>Выкуп по договору</li>
              <li>по всей территории России</li>
              <li>по 100% предоплате</li>
            </ul>
          </div>
          <div className="col-8 xs-col-4 ">
            <div className="bold">
              Выкуп вагонов — разумное решение для обновления подвижного
              состава. Вам не придется платить за утилизацию – мы заплатим за
              возможность забрать списанные вагоны. Обеспечиваем оперативный
              выезд сотрудника для оценки технического состояния оборудования и
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
        </div>
        <div className="row service3">
          <div className="col-4 xs-col-4 bl">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="s3s1"></SwiperSlide>
              <SwiperSlide className="s3s2"></SwiperSlide>
              <SwiperSlide className="s3s3"></SwiperSlide>
            </Swiper>
          </div>
          <div className="col-8 xs-col-4 form bg-dark">
            <div className="head3">
              <span className="italic">Отправьте заявку</span> на выкуп лома
            </div>
            <FormRequestFiles />
          </div>
        </div>

        <div className="row service3">
          <div className="col-4 xs-col-0 bl br spacer"></div>
          <div className="col-4 xs-col-0 br spacer"></div>
          <div className="col-4 xs-col-0 br spacer"></div>
        </div>
        <div className="row service3">
          <div className="col-4 xs-col-4 bl br">
            <div className="head2">
              <span className="italic">Выкуп</span> готовых вагонов!
            </div>
            <div className="hint">
              <span className="italic">Уже купили</span> 5990 вагонов
            </div>
            <ul className="content">
              <li>Выкуп по договору</li>
              <li>по всей территории России</li>
              <li>по 100% предоплате</li>
            </ul>
          </div>
          <div className="col-8 xs-col-4 middle-border-8 br">
            <div className="bold">
              Выкуп вагонов — разумное решение для обновления подвижного
              состава. Вам не придется платить за утилизацию – мы заплатим за
              возможность забрать списанные вагоны. Обеспечиваем оперативный
              выезд сотрудника для оценки технического состояния оборудования и
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
        </div>
        <div className="row service3">
          <div className="col-4 xs-col-4 bl">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="s3s4"></SwiperSlide>
              <SwiperSlide className="s3s4"></SwiperSlide>
              <SwiperSlide className="s3s4"></SwiperSlide>
            </Swiper>
          </div>
          <div className="col-8 xs-col-4 form bg-dark">
            <div className="head3">
              <span className="italic">Отправьте заявку</span> на выкуп лома
            </div>
            <FormRequestFiles />
          </div>
        </div>
        <div className="row service3 bl br middle-border-12">
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
        </div>
        <div className="row service3 bl br middle-border-12">
          <div className="col-12 xs-col-4">
            <div className="head2">
              <div className="italic">Процедура</div>
              выкупа вагонов
            </div>
            <div className="d_f jc_sb steps">
              <div className="ico-wrapper">
                <div className="img">
                  <img src={Ico1} alt="" />
                </div>
                <div className="d_f fd_c step-wrapper">
                  <div className="title">Заявка</div>
                  <div className="desc">Отправьте заявку на выкуп вагонов</div>
                </div>
              </div>
              <div className="ico-wrapper">
                <div className="img">
                  <img src={Ico2} alt="" />
                </div>
                <div className="d_f fd_c">
                  <div className="title">Оценка</div>
                  <div className="desc">
                    Наш специалист выезжает на место для профессионального
                    осмотра и оценки
                  </div>
                </div>
              </div>
              <div className="ico-wrapper">
                <div className="img">
                  <img src={Ico3} alt="" />
                </div>
                <div className="d_f fd_c">
                  <div className="title">Договор</div>
                  <div className="desc">
                    После согласования стоимости и всех условий заключаем
                    договор на выкуп вагонов и запчастей
                  </div>
                </div>
              </div>
              <div className="ico-wrapper">
                <div className="img">
                  <img src={Ico4} alt="" />
                </div>
                <div className="d_f fd_c">
                  <div className="title">Оплата</div>
                  <div className="desc">
                    Продавец получает предоплату, а покупатель занимается
                    транспортировкой или демонтажом вагонов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BuyCarriage;
