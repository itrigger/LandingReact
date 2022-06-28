import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TESTIMONIALS } from "../../../apollo/queries";
import Form from "../../Form/Form";
import Lytebox from "../../ui/Lytebox/Lytebox";
import { Link } from "gatsby";

const ReviewHome = () => {
  const [curImg, setCurImg] = useState("");
  const [curPDF, setCurPDF] = useState(null);
  const [slide, setSlide] = useState(false);

  const clickHandler = (url, pdf) => {
    setCurImg(url);
    setCurPDF(pdf !== null ? pdf : null);
    setSlide(true);
  };

  const { data, loading, error } = useQuery(GET_TESTIMONIALS);

  return (
    <div>
      <Lytebox
        trigger={slide}
        setTrigger={setSlide}
        nopadding={true}
        light={true}
        extraClass={"image"}
      >
        <div className="lytebox-imgWrapper">
          <img src={curImg} />
        </div>
        {curPDF !== null ? (
          <div className="lytebox-caption">
            <Link to={curPDF} target="_blank">
              Открыть оригинал
            </Link>
          </div>
        ) : (
          ""
        )}
      </Lytebox>
      <div className="row service3 testimonials bt">
        <div className="col-12 m-col-12 xs-col-4">
          <div className="head2 ta_c">
            <span className="italic">О нас</span>&nbsp; говорят
          </div>
        </div>
        <div className="col-12 m-col-12 xs-col-4">
          <ul className="testimonials-ul">
            {loading
              ? "загрузка отзывов"
              : data
              ? data.posts.nodes.map((item) => (
                  <li
                    onClick={() =>
                      clickHandler(
                        item.testimonials.imagelink.sourceUrl,
                        item.testimonials.pdf
                          ? item.testimonials.pdf.mediaItemUrl
                          : null
                      )
                    }
                  >
                    <span>{item.title}</span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
