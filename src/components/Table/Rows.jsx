import React from "react";
import Row from "./Row";
import Card from "./Card";
import RowSkeleton from "./RowSkeleton";

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
  // if (loading) return <Loader absolute={true}/>
  if (loading)
    return (
      <div>
        <div className="row">
          <div className="col-12 xs-col-4">
            <div className="ta_c | mr-title">
              <div className="desc">по вашему запросу</div>
              <div className="head">
                идёт поиск
                <span className="italic">
                  {type === 1 ? "запчастей" : "вагонов"}
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
          <div className="row">
            <div className="col-12 xs-col-4">
              <div className="ta_c | mr-title">
                <div className="desc">по вашему запросу</div>
                <div className="head">
                  <span className="italic">
                    {type === 1 ? "запчасти" : "вагоны"}
                  </span>{" "}
                  найдены
                </div>
              </div>
            </div>
          </div>
          {type === 1 ? (
            data.edges.map((edge) => {
              const { node } = edge;
              return <Row key={node.id} data={node} addToCart={addToCart} />;
            })
          ) : (
            <div className="row d_f bl br card-result-row">
              {data.edges.map((edge) => {
                const { node } = edge;
                return <Card key={node.id} data={node} addToCart={addToCart} />;
              })}
            </div>
          )}

          <div className="row result-row footer-row">
            <div className="col-4 xs-col-0"></div>

            <div className="col-4 xs-col-4 | minirow-w">
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
            <div className="col-4 xs-col-0"></div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="ta_c | mr-title">
              <div className="desc">К сожалению, по вашему запросу</div>
              <div className="head">
                <span className="italic">
                  {type === 1 ? "запчасти" : "вагоны"}
                </span>{" "}
                не найдены
              </div>
              <button className="btn-classic">
                <span>Обратиться к менеджеру</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rows;
