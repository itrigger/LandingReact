import React, { useContext, useEffect, useRef, useState } from "react";
import Rows from "./Rows";
import { useNotification } from "../ui/Notify/NotifyProvider";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_ALL_PARTS,
  GET_CONTENT,
  GET_STATIONS_BY_SLUG,
  GET_TAGS_BY_CAT_ID,
} from "../../apollo/queries";
import { GET_ALL_CARRIAGES } from "../../apollo/queries";
import Spinner from "../../assets/img/spinner.svg";
import { CARRIAGES_IDS, JDS, PARTS_IDS } from "../../utility/constants";
import { CartContext } from "../../context/CartContext";
import RowSkeleton from "./RowSkeleton";
import Lytebox from "../ui/Lytebox/Lytebox";
import Form from "../Form/Form";
import { navigate } from "gatsby";

const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.products.edges.length
    ? fetchMoreResult
    : previousResult;
};

const RowsWrapperHome = ({
  type = 1,
  map = false,
  limit,
  initialCount = limit ? limit : 200,
  initialCategory = 1,
  dropdown,
  selectedDD = [0],
  selectedDDJD = null,
  actived = false,
  nofilter = false,
  mini = false,
  fromMap = false,
}) => {
  let text = "";
  let text2 = "";
  // type = 1 - PARTS, type = 2 - CARRIAGES
  const isBrowser = () => typeof window !== "undefined";
  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 1023
  );
  const [filterTypeCategory, setFilterTypeCategory] = useState(-1);
  const [filterTypeArea, setFilterTypeArea] = useState(-1);
  const [filterTypeStation, setFilterTypeStation] = useState(-1);
  const [count, setCount] = useState(initialCount);
  const [selectJdItems, setSelectJdItems] = useState(JDS);
  const [selectStationItems, setSelectStationItems] = useState([]);
  const [stationStatus, setStationStatus] = useState(true);
  const [jdStatus, setJdStatus] = useState(true);
  const [btnStatus, setBtnStatus] = useState(true);
  const [showItems, setShowItems] = useState(false);
  const [slide, setSlide] = useState(false);
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isFromMap, setIsFromMap] = useState(fromMap);
  const [man3, setMan3] = useState();

  const clickHandler = () => {
    window.open(`https://wa.me/${man3 && man3.tel}`);
  };
  const { data: datacontent } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (datacontent) {
      setMan3(JSON.parse(datacontent.posts.nodes[0].acfcontent.man3));
    }
  }, [datacontent]);

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth > 1023);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", updateMedia);
    return () =>
      isBrowser() && window.removeEventListener("resize", updateMedia);
  });

  const dispatch = useNotification();

  useEffect(() => {
    if (initialCategory !== 1) {
      setFilterTypeCategory(initialCategory);
      executeScroll();
    }
  }, [initialCategory]);

  const handleNewNotification = (TYPE, message, title) => {
    dispatch({
      type: TYPE,
      message: message,
      title: title,
    });
  };

  const handleSetPerPage = (value) => {
    setCount(value);
  };

  if (type === 1) {
    text = "<span class='italic'>поиск</span> запчастей";
    text2 = "Найти запчасть";
  } else {
    text = "<span class='italic'>Продажа</span> вагонов";
    text2 = "Найти вагон";
  }

  const selectCategoryHandler = (value) => {
    value === "0"
      ? type === 1
        ? setFilterTypeCategory(PARTS_IDS)
        : setFilterTypeCategory(CARRIAGES_IDS)
      : setFilterTypeCategory([parseInt(value)]);
    setFilterTypeArea("-1");
    setFilterTypeStation("-1");
    setStationStatus(true);
    setJdStatus(true);
    setBtnStatus(true);
  };
  const selectAreaHandler = (value) => {
    value === "0" ? setFilterTypeArea("0") : setFilterTypeArea(value);
    setFilterTypeStation("-1");
    setStationStatus(true);
  };
  const selectStationHandler = (value) => {
    value === "0" ? setFilterTypeStation("0") : setFilterTypeStation(value);
    setBtnStatus(false);
  };

  const variables = {
    first: count,
    last: null,
    after: null,
    before: null,
    categoryIdIn:
      filterTypeCategory[0] !== 0
        ? filterTypeCategory
        : type === 1
        ? PARTS_IDS
        : CARRIAGES_IDS,
    tagIn:
      filterTypeArea !== "" && filterTypeArea !== "0" && filterTypeArea !== null
        ? filterTypeArea.toString()
        : null,
  };

  const [getProducts, { data, error, loading, fetchMore }] = useLazyQuery(
    type === 1 ? GET_ALL_PARTS : GET_ALL_CARRIAGES,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
    }
  );

  const [
    getTags,
    { data: data2, error: error2, loading: loading2, fetchMore: fetchMore2 },
  ] = useLazyQuery(GET_TAGS_BY_CAT_ID, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  const [
    getStations,
    { data: data3, error: error3, loading: loading3, fetchMore: fetchMore3 },
  ] = useLazyQuery(GET_STATIONS_BY_SLUG, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  const filterClickHandler = (target) => {
    target.classList.add("btn-loading");
    setIsFromMap(false);
    getProducts({
      variables: {
        first: count,
        last: null,
        after: null,
        before: null,
        categoryIdIn: filterTypeCategory,
        tagIn: filterTypeArea,
      },
    }).then((r) => {
      target.classList.remove("btn-loading");
      setShowItems(true);
      executeScroll();
      //handleNewNotification("SUCCESS", "Данные получены", "Успешно");
    });
  };

  let array = [];
  let array2 = [];

  useEffect(() => {
    if (filterTypeCategory !== -1 && filterTypeCategory[0] !== 65) {
      setJdStatus(true);
      setStationStatus(true);
      setBtnStatus(true);
      setShowItems(false);
      setIsFromMap(false);
      getTags({
        variables: {
          categoryIdIn: filterTypeCategory,
        },
      })
        .then((r) => {
          r.data.products.edges.forEach((item) => {
            item.node.productTags.edges.forEach((item2) => {
              const index = array.findIndex((in1) => in1 === item2.node.name);
              if (index === -1) {
                array.push(item2.node.name);
              }
            });
          });
          let temp = [];
          JDS.forEach((item, i) => {
            if (array.includes(item.slug)) {
              temp.push(item);
            }
          });
          setSelectJdItems(temp);
          setJdStatus(false);
          setStationStatus(true);
        })
        .catch(function (error) {
          handleNewNotification("ERROR", "Что-то пошло не так", "Ошибка");
          console.warn(error);
        });
    } else {
      if (filterTypeCategory[0] === 65) {
        navigate("/sale-special");
      }
    }
  }, [filterTypeCategory]);

  useEffect(() => {
    if (filterTypeArea !== -1) {
      setStationStatus(true);
      setBtnStatus(true);
      setShowItems(false);
      getStations({
        variables: {
          categoryIdIn: filterTypeCategory,
          tagIn: filterTypeArea,
        },
      })
        .then((r) => {
          r.data.products.edges.forEach((item) => {
            const index = array2.findIndex(
              (in1) => in1 === item.node.productsKP.mestonahozhdenie
            );
            if (index === -1) {
              array2.push(item.node.productsKP.mestonahozhdenie);
            }
          });
          if (r.data.products && r.data.products.edges.length > 0) {
            setSelectStationItems(array2);
            setStationStatus(false);
            setBtnStatus(true);
          }
        })
        .catch(function (error) {
          handleNewNotification("ERROR", "Что-то пошло не так", "Ошибка");
          console.warn(error);
        });
    }
  }, [filterTypeArea]);

  useEffect(() => {
    if (isDesktop) {
      setStationStatus(true);
      getProducts({
        variables: {
          first: count,
          last: null,
          after: null,
          before: null,
          categoryIdIn: type === 1 ? PARTS_IDS : CARRIAGES_IDS,
          tagIn: null,
        },
      })
        .then((r) => {})
        .catch(function (error) {
          handleNewNotification("ERROR", "Что-то пошло не так", "Ошибка");
        });
    }
  }, [isDesktop]);

  useEffect(() => {
    if (selectedDDJD !== null) {
      getProducts({
        ...variables,
        categoryIdIn: PARTS_IDS,
        tagIn: filterTypeArea,
      })
        .then((r) => {})
        .catch(function (error) {
          handleNewNotification("ERROR", "Что-то пошло не так", "Ошибка");
        });
    }
  }, [selectedDDJD]);

  useEffect(() => {
    if (fromMap) {
      getProducts({
        variables: {
          first: count,
          last: null,
          after: null,
          before: null,
          categoryIdIn: PARTS_IDS,
          tagIn: selectedDDJD.toString(),
        },
      }).then((r) => {
        setShowItems(true);
        executeScroll();
        //handleNewNotification("SUCCESS", "Данные получены", "Успешно");
      });
    }
  }, [fromMap]);

  if (error) {
    handleNewNotification("ERROR", "Что-то пошло не так", "Ошибка");
    console.log(JSON.stringify(error));
  }

  //scroll to
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ block: "start", behavior: "smooth" });

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    handleNewNotification("SUCCESS", "Товар добавлен в корзину!", "Успешно");
  };
  const slideClickHandler = () => {
    setSlide(true);
  };
  return (
    <div className="megamap rowswrapper">
      <div className="map_result">
        {!showItems ? (
          <div className="row">
            <div className="col-12 m-col-12 xs-col-4">
              <div className="ta_c | mr-title">
                <div className="desc">чтобы найти запчасти</div>
                <div className="head">
                  <span className="italic">Воспользуйтесь </span>фильтром
                </div>
                {/*<div className="d_f jc_c ai_c | desc2">
                  <div className="desc">
                    Если Вы не нашли, что искали, то
                    <div>свяжитесь с нами и мы постараемся вам помочь</div>
                  </div>
                  <div>
                    <button
                      className="btn-wt-green"
                      onClick={() => clickHandler()}
                    >
                      <span className="ico ico-left ico-wt-white"></span>
                      <span>Написать в WhatsApp</span>
                    </button>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {!nofilter ? (
        <div className={mini ? "form form-horizontal" : "form form-horizontal"}>
          <div
            className="row middle-border-12-light br-light bl-light middle-border-12-over-bg"
            ref={myRef}
          >
            <div className="col-12 m-col-12 xs-col-4 d_f mini_filter_w">
              <div
                dangerouslySetInnerHTML={{ __html: text }}
                className="head"
              ></div>

              <div className={"mini-filter"}>
                <select
                  id={"sort3"}
                  className="form-control"
                  value={
                    filterTypeCategory !== null
                      ? filterTypeCategory.toString()
                      : "-1"
                  }
                  onChange={(e) => selectCategoryHandler(e.target.value)}
                >
                  <option hidden disabled value="-1">
                    Выберите категорию
                  </option>
                  {dropdown
                    ? dropdown.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>

              <div className={"mini-filter"}>
                <select
                  className="form-control"
                  id={"sort1"}
                  value={
                    filterTypeArea !== null ? filterTypeArea.toString() : "-1"
                  }
                  disabled={jdStatus}
                  onChange={(e) => selectAreaHandler(e.target.value)}
                >
                  <option value={"-1"} hidden disabled>
                    Выберите железную дорогу
                  </option>

                  {selectJdItems.map((item) => (
                    <option value={item.slug} key={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={"mini-filter"}>
                <select
                  className="form-control"
                  id={"sort2"}
                  value={filterTypeStation.toString()}
                  disabled={stationStatus}
                  onChange={(e) => selectStationHandler(e.target.value)}
                >
                  <option value={"-1"} hidden disabled>
                    Выберите станцию
                  </option>

                  {selectStationItems.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-4 m-col-4 xs-col-4 | fh_r">
                <button
                  className={`btn-classic black form-control ld-ext-right ${
                    loading || loading2 || loading3 ? "btn-loading" : ""
                  }`}
                  onClick={(e) => filterClickHandler(e.target)}
                  disabled={btnStatus}
                >
                  <span dangerouslySetInnerHTML={{ __html: text2 }}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="map_result ">
        {showItems && data && data.products ? (
          <Rows
            error={error}
            loading={loading}
            data={data.products}
            fetchMore={fetchMore}
            filterTypeArea={filterTypeArea}
            filterTypeCategory={filterTypeCategory}
            filterTypeStation={filterTypeStation}
            updateQuery={updateQuery}
            executeScroll={executeScroll}
            fromMap={isFromMap}
            type={type}
            count={count}
            addToCart={addToCart}
          />
        ) : (
          ""
        )}
        {loading && showItems ? (
          <>
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
              <div className="row">
                <div className="col-12 s-col-12 xs-col-4">
                  <table className={"result-table"}>
                    <tbody>
                      {Array.apply(0, Array(count)).map(function (x, i) {
                        return <RowSkeleton key={i} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <Lytebox trigger={slide} setTrigger={setSlide}>
          <div className="head3">
            <span className="italic">Быстрый</span> подбор{" "}
            {type === 1 ? "запчастей" : "вагона"}
          </div>
          <Form setTrigger={setSlide} />
        </Lytebox>
      </div>
    </div>
  );
};

export default RowsWrapperHome;
