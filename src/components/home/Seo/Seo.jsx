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
        <div className="col-8 xs-col-4 | left">
          <div className="head">
            <span className="italic">СЕО</span> ТЕКСТ
          </div>
          <div className="desc">
            <p>
              Ознакомьтесь со свежими предложениями вагонов бу и новых на нашем
              сайте. В большинстве случаев у нас найдется решение любого
              запроса. Если вы выбрали подходящее предложение – отправьте
              предварительную заявку в наш офис любым удобным способом:
              позвоните, напишите на электронную почту или заполните форму связи
              на сайте. Отправка заявки вас ни к чему не обязывает, но дает
              определенные преимущества. Выбранные вами вагоны резервируются на
              время согласования условий и принятие решения о сотрудничестве и
              не будут реализованы в этот период другому покупателю.
            </p>
            <p>
              Если вам не удалось подобрать подходящие вагоны из представленных
              на сайте, тем более отправьте нам предварительную заявку, указав в
              ней корректные контактные данные и основные требования к вашему
              заказу. Наши специалисты начнут поиск и подбор вагонов по вашей
              заявке и вы первым получите оптимальное предложение как только
              подходящий жд вагон появится в продаже. Получив коммерческое
              предложение, обсудите с менеджером нюансы.
            </p>
          </div>
        </div>
        <div className="col-4 xs-col-4 | right">
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
