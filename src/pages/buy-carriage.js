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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#F5DF4D" />
        <meta name="msapplication-TileColor" content="#F5DF4D" />
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
                  <li>Скупка б/у вагонов</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row middle-border-12-light middle-border-12-over-bg  bl-light br-light line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Скупка</span> б/у вагонов
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
          <div className="col-8 m-col-8 xs-col-4 ">
            <div className="bold">
              Каким образом происходит сдача на металлолом?
              <br />
              Специалисты делают все необходимое для того, чтобы избавить вас от
              ненужных трат времени и сил. Профессионалы самостоятельно
              демонтируют вагоны и доставляют лом на пункты приёма. Для
              получения прибыли, вам необходимо: предъявить при сдаче лома
              документ, подтверждающий личность; дождаться экспертного
              заключения; получить средства.
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
        </div>

        <div className="row service3" id="vrazdelku">
          <div className="col-4 m-col-4 xs-col-0 bl br spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 br spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 br spacer"></div>
        </div>
        <div className="row service3">
          <div className="col-4 m-col-4 xs-col-4 bl br">
            <div className="head2">
              <span className="italic">Выкуп</span> <div>готовых</div> вагонов!
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
          <div className="col-8 m-col-8 xs-col-4 middle-border-8 br">
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
            <div className="head3">
              <span className="italic">Отправьте заявку</span> на выкуп вагона
            </div>
            <FormRequestFiles formc={"form2"} />
          </div>
        </div>
        <div className="row service3 bl br ">
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
          <div className="col-4 m-col-4 xs-col-0 spacer"></div>
        </div>
        <Prems />
      </Layout>
    </div>
  );
};

export default BuyCarriage;
