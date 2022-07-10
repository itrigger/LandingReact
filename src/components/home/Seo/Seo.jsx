import React, { useEffect, useState } from "react";
import SeoImg from "../../../assets/img/boss.png";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";

const Seo = () => {
  const [telWt, setTelWt] = useState("");

  const clickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };

  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setTelWt(data.posts.nodes[0].acfcontent.telWt);
    }
  }, [data]);

  return (
    <div className="homeseo">
      <div className="row">
        <div className="col-8 m-col-8 xs-col-4 | left">
          <div className="head">
            <span className="italic">Продажа</span> вагонов
          </div>
          <div className="desc">
            <p>
              Продаём все виды ж/д вагонов: новый или б/у, грузовой или
              пассажирский, полувагоны, вагоны-цистерны. Мы найдём решение для
              любого запроса, подготовим документы, ответим на все вопросы по
              цене, а главное профессионально сопроводим Вас на всех этапах
              сделки.
            </p>
            <p>
              После Вашей заявки оперативно подберём подходящую для Вас модель,
              доставим в любой населённый пункт России.
            </p>
            <p>
              Нашли на нашем сайте то, что искали? Сообщите нам об этом:
              звоните, заполняйте заявку на сайте, пишите специалистам в удобный
              Вам мессенджер или почту. Почему не стоит откладывать? Потому что
              эти вагоны бронируются за Вами на время согласования условий, и
              пока идёт предпродажная подготовка.
            </p>
            <p>
              Что делать, если из всего многообразия ж/д вагонов на нашем сайте,
              желаемого Вы так и не нашли? Тем более оставляйте нам заявку,
              указав все Ваши запросы. Мы найдём вагон, подберём оптимальное
              предложение по цене, а если по какой-то причине его нет в продаже
              в данный момент, то Вы узнаете первым о его появлении, или же мы
              предложим альтернативный вариант.
            </p>
          </div>
        </div>
        <div className="col-4 m-col-4 xs-col-4 | right">
          <div className="d_f fd_c ai_c jc_c">
            <img src={SeoImg} width="262" height="262" alt="директор" />
            <div className="title">Директор</div>
            <div className="name">Иван Абрамов</div>
            <button onClick={() => clickHandler()} className="btn-wt-green">
              <span className="ico ico-left ico-wt-white"></span>
              Написать в WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
