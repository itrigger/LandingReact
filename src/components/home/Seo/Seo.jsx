import React, { useEffect, useState } from "react";
import SeoImg from "../../../assets/img/boss.png";
import SeoImg2 from "../../../assets/img/boss2.png";
import SeoImg3 from "../../../assets/img/boss3.png";
import SeoImg4 from "../../../assets/img/boss4.png";
import SeoImg5 from "../../../assets/img/boss5.png";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";

const Seo = (props) => {
  const [telWt, setTelWt] = useState("");
  const [man1, setMan1] = useState();
  const [man2, setMan2] = useState();
  const [man3, setMan3] = useState();
  const [man4, setMan4] = useState();
  const [man5, setMan5] = useState();

  const clickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };
  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setTelWt(data.posts.nodes[0].acfcontent.telWt);
      setMan1(JSON.parse(data.posts.nodes[0].acfcontent.man1));
      setMan2(JSON.parse(data.posts.nodes[0].acfcontent.man2));
      setMan3(JSON.parse(data.posts.nodes[0].acfcontent.man3));
      setMan4(JSON.parse(data.posts.nodes[0].acfcontent.man4));
      setMan5(JSON.parse(data.posts.nodes[0].acfcontent.man5));
    }
  }, [data]);

  return (
    <div
      className={`col-12 m-col-12 xs-col-4 d_f br bl | right count-${props.count}`}
    >
      {props.man1 && (
        <div className="d_f fd_c ai_c jc_c">
          <img src={SeoImg3} width="262" height="262" alt="директор" />
          <div
            dangerouslySetInnerHTML={{ __html: man1 && man1.title }}
            className="title"
          />
          <div className="name">{man1 && man1.name}</div>
          <a
            href={`https://wa.me/${man1 && man1.tel}`}
            target={"_blank"}
            className="btn-wt-green"
          >
            <span className="ico ico-left ico-wt-white"></span>
            Написать
          </a>
        </div>
      )}
      {props.man2 && (
        <div className="d_f fd_c ai_c jc_c">
          <img src={SeoImg} width="262" height="262" alt="директор" />
          <div
            dangerouslySetInnerHTML={{ __html: man2 && man2.title }}
            className="title"
          />
          <div className="name">{man2 && man2.name}</div>
          <a
            href={`https://wa.me/${man2 && man2.tel}`}
            target={"_blank"}
            className="btn-wt-green"
          >
            <span className="ico ico-left ico-wt-white"></span>
            Написать
          </a>
        </div>
      )}
      {props.man3 && (
        <div className="d_f fd_c ai_c jc_c">
          <img src={SeoImg2} width="262" height="262" alt="директор" />
          <div
            dangerouslySetInnerHTML={{ __html: man3 && man3.title }}
            className="title"
          />
          <div className="name">{man3 && man3.name}</div>
          <a
            href={`https://wa.me/${man3 && man3.tel}`}
            target={"_blank"}
            className="btn-wt-green"
          >
            <span className="ico ico-left ico-wt-white"></span>
            Написать
          </a>
        </div>
      )}
      {props.man4 && (
        <div className="d_f fd_c ai_c jc_c">
          <img src={SeoImg4} width="262" height="262" alt="директор" />
          <div
            dangerouslySetInnerHTML={{ __html: man4 && man4.title }}
            className="title"
          />
          <div className="name">{man4 && man4.name}</div>
          <a
            href={`https://wa.me/${man4 && man4.tel}`}
            target={"_blank"}
            className="btn-wt-green"
          >
            <span className="ico ico-left ico-wt-white"></span>
            Написать
          </a>
        </div>
      )}
      {props.man5 && (
        <div className="d_f fd_c ai_c jc_c">
          <img src={SeoImg5} width="262" height="262" alt="директор" />
          <div
            dangerouslySetInnerHTML={{ __html: man5 && man5.title }}
            className="title"
          />
          <div className="name">{man5 && man5.name}</div>
          <a
            href={`https://wa.me/${man5 && man5.tel}`}
            target={"_blank"}
            className="btn-wt-green"
          >
            <span className="ico ico-left ico-wt-white"></span>
            Написать
          </a>
        </div>
      )}
    </div>
  );
};

export default Seo;
