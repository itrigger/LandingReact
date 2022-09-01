import React, { useState, useEffect } from "react";
import Row from "./Row";
import Card from "./Card";
import RowSkeleton from "./RowSkeleton";
import Form from "../Form/Form";
import Lytebox from "../ui/Lytebox/Lytebox";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../apollo/queries";

const Rows = ({
  data,
  error,
  loading,
  fetchMore,
  filterTypeCategory,
  filterTypeArea,
  updateQuery,
  executeScroll,
  type,
  count,
  addToCart,
}) => {
  const [slide, setSlide] = useState(false);
  const [telWt, setTelWt] = useState("");

  const wtClickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };

  const { data: data2 } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data2) {
      setTelWt(data2.posts.nodes[0].acfcontent.telWt);
    }
  }, [data2]);

  const slideClickHandler = () => {
    setSlide(true);
  };

  if (loading)
    return (
      <div>
        <div className="row br bl middle-border-12">
          <div className="col-12 m-col-12 xs-col-4">
            <div className="ta_c | mr-title">
              <div className="desc">по вашему запросу</div>
              <div className="head">
                идёт поиск
                <span className="italic">
                  {type === 1 ? " запчастей" : " вагонов"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {Array.apply(0, Array(count)).map(function (x, i) {
          return <RowSkeleton key={i} />;
        })}
      </div>
    );

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <div>
      {data && data.edges && data.edges.length > 0 ? (
        <div>
          <div className="row br bl middle-border-12">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="ta_c | mr-title">
                <div className="head">
                  <span className="italic">
                    {type === 1 ? "запчасти" : "вагоны"}
                  </span>{" "}
                  в наличии
                </div>
                {type !== 1 && <p>из собственного парка</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 s-col-12 xs-col-4">
              <table className={"result-table"}>
                <thead>
                  {type === 1 ? (
                    <tr>
                      <th>Наименование</th>
                      <th className={"ta_c"}>Г.в.</th>
                      <th className={"ta_c"}>Толщ. обода</th>
                      <th className={"ta_c"}>Тип оси</th>
                      <th className={"ta_c"}>Состояние</th>
                      <th className={"ta_c"}>Станция</th>
                      <th className={"ta_c"}>Дорога</th>
                      <th className={"ta_c"}>Цена с НДС</th>
                      <th className={"ta_c"}></th>
                    </tr>
                  ) : (
                    <tr>
                      <th>Тип</th>
                      <th className={"ta_c"}>Модель</th>
                      <th className={"ta_c"}>Кол-во</th>
                      <th className={"ta_c"}>Г. изг.</th>
                      <th className={"ta_c"}>Местонахождение</th>
                      <th className={"ta_c"}>Состояние</th>
                      <th className={"ta_c"}>Цена с НДС</th>
                      <th className={"ta_c"}></th>
                    </tr>
                  )}
                </thead>
                <tbody>
                  {type === 1
                    ? data.edges.map((edge) => {
                        const { node } = edge;
                        return (
                          <Row
                            key={node.id}
                            data={node}
                            addToCart={addToCart}
                            wtClickHandler={wtClickHandler}
                          />
                        );
                      })
                    : data.edges.map((edge) => {
                        const { node } = edge;
                        return (
                          <Card
                            key={node.id}
                            data={node}
                            addToCart={addToCart}
                            wtClickHandler={wtClickHandler}
                          />
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row result-row footer-row">
            <div className="col-4 m-col-4 xs-col-0"></div>

            <div className="col-4 m-col-4 xs-col-4 | minirow-w">
              <div className="paginator next_prev">
                <ul className="d_f jc_sb">
                  {data.pageInfo.hasPreviousPage ? (
                    <li className="cp">
                      <button
                        onClick={() => {
                          fetchMore({
                            variables: {
                              first: null,
                              after: null,
                              last: count,
                              before: data.pageInfo.startCursor || null,
                              categoryId:
                                filterTypeCategory !== ""
                                  ? parseInt(filterTypeCategory)
                                  : null,
                              tagIn:
                                filterTypeArea !== "" ? filterTypeArea : null,
                            },
                            updateQuery,
                          });
                          executeScroll();
                        }}
                      >
                        <span>Назад</span>
                      </button>
                    </li>
                  ) : (
                    <li></li>
                  )}
                  {data.pageInfo.hasNextPage ? (
                    <li className="cp">
                      <button
                        onClick={() => {
                          fetchMore({
                            variables: {
                              first: count,
                              after: data.pageInfo.endCursor || null,
                              last: null,
                              before: null,
                              categoryId:
                                filterTypeCategory !== ""
                                  ? parseInt(filterTypeCategory)
                                  : null,
                              tagIn:
                                filterTypeArea !== "" ? filterTypeArea : null,
                            },
                            updateQuery,
                          });
                          executeScroll();
                        }}
                      >
                        <span>Вперед</span>
                      </button>
                    </li>
                  ) : (
                    <li></li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-4 m-col-4 xs-col-0"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="ta_c | mr-title">
                <div className="desc">К сожалению, по вашему запросу</div>
                <div className="head">
                  <span className="italic">
                    {type === 1 ? "запчасти" : "вагоны"}
                  </span>{" "}
                  не найдены
                </div>
                <div className="desc">
                  Возможно, мы не успели их еще добавить в базу.
                  <div>свяжитесь с нами и мы постараемся вам помочь</div>
                </div>
                <button
                  className="btn-classic"
                  onClick={() => slideClickHandler()}
                >
                  <span>Обратиться к менеджеру</span>
                </button>
              </div>
            </div>
          </div>
          <Lytebox trigger={slide} setTrigger={setSlide}>
            <div className="head3">
              <span className="italic">Быстрый</span> подбор{" "}
              {type === 1 ? "запчастей" : "вагона"}
            </div>
            <Form setTrigger={setSlide} />
          </Lytebox>
        </>
      )}
    </div>
  );
};

export default Rows;
