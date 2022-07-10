import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/ui/layout/Layout";
import { gql, useQuery } from "@apollo/client";
import Lytebox from "../components/ui/Lytebox/Lytebox";
import { Link } from "gatsby";

const Testimonials = () => {
  const [curImg, setCurImg] = useState("");
  const [curPDF, setCurPDF] = useState(null);
  const [slide, setSlide] = useState(false);

  const clickHandler = (url, pdf) => {
    setCurImg(url);
    setCurPDF(pdf !== null ? pdf : null);
    setSlide(true);
  };

  const GET_ALL_TESTIMONIALS = gql`
    query getTestimonialsQuery {
      posts(
        where: { categoryId: 60, orderby: { field: DATE, order: DESC } }
        last: 40
      ) {
        nodes {
          title
          date
          testimonials {
            imagelink {
              sourceUrl
            }
            pdf {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_ALL_TESTIMONIALS);
  let groupArrays;

  if (data) {
    const groups = data.posts.nodes.reduce((groups, testimonial) => {
      const date = testimonial.date.split("-")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(testimonial);
      return groups;
    }, {});
    groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        testimonials: groups[date],
      };
    });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Отзывы | Вагон Трейд - Покупка и продажа вагонов. Аренда. Запасные
          части.
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
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="breadcrumb">
                <ul>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>Отзывы</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bl-light br-light middle-border-12-light middle-border-12-over-bg line2">
            <div className="col-8 m-col-8 xs-col-4">
              <h1>
                <span className="italic">Отзывы</span>
              </h1>
            </div>
            <div className="col-4 m-col-4 xs-col-4 pos_r zi-2 d_f jc_end"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 m-col-12 xs-col-4">
            <div className="layout bl br middle-border-12">
              <Lytebox
                trigger={slide}
                setTrigger={setSlide}
                nopadding={true}
                light={true}
                extraClass={"image"}
              >
                <div className="lytebox-imgWrapper">
                  <img src={curImg} alt="testimonial" />
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
                  {loading ? <h3 className="ta_c">загрузка отзывов</h3> : ""}
                  {groupArrays !== undefined
                    ? groupArrays.reverse().map((item, i) => (
                        <div key={i}>
                          <h3 className="ta_c">{item.date}</h3>
                          <ul className="testimonials-ul">
                            {item.testimonials.map((testimonial, j) => (
                              <li
                                key={j}
                                onClick={() =>
                                  clickHandler(
                                    testimonial.testimonials.imagelink
                                      .sourceUrl,
                                    testimonial.testimonials.pdf
                                      ? testimonial.testimonials.pdf
                                          .mediaItemUrl
                                      : null
                                  )
                                }
                              >
                                <span>{testimonial.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row service3 bl br middle-border-12">
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
          <div className="col-4 xs-col-0 spacer"></div>
        </div>
      </Layout>
    </>
  );
};

export default Testimonials;
