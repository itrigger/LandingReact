import React, { useContext, useEffect, useRef, useState } from "react";
import Rows from "./Rows";
import { useNotification } from "../ui/Notify/NotifyProvider";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_PARTS } from "../../apollo/queries";
import { GET_ALL_CARRIAGES } from "../../apollo/queries";
import Map from "../home/Map/Map";
import { CARRIAGES_IDS, JDS, PARTS_IDS } from "../../utility/constants";
import { CartContext } from "../../context/CartContext";
import { useLocalStorage } from "../../utility/useLocalStorage";

const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.products.edges.length
    ? fetchMoreResult
    : previousResult;
};

const RowsWrapper = ({
  type = 1,
  map = false,
  initialCount = 10,
  dropdown,
  selectedDD = [0],
}) => {
  let text = "";
  let text2 = "";
  // type = 1 - PARTS, type = 2 - CARRIAGES
  const [filterTypeCategory, setFilterTypeCategory] = useState(selectedDD);
  const [filterTypeArea, setFilterTypeArea] = useState("");
  const [count, setCount] = useState(initialCount);
  const [cartItems, setCartItems] = useContext(CartContext);

  const dispatch = useNotification();

  const handleNewNotification = (TYPE, message, title) => {
    dispatch({
      type: TYPE,
      message: message,
      title: title,
    });
  };

  if (type === 1) {
    text = "<span class='italic'>быстрый фильтр</span> запчастей";
    text2 = "Найти запчасть";
  } else {
    text = "<span class='italic'>Продажа</span> бу вагонов";
    text2 = "Найти вагон";
  }

  const selectCategoryHandler = (value) => {
    value === "0"
      ? type === 1
        ? setFilterTypeCategory(PARTS_IDS)
        : setFilterTypeCategory(CARRIAGES_IDS)
      : setFilterTypeCategory([parseInt(value)]);
  };
  const selectAreaHandler = (value) => {
    value === "0" ? setFilterTypeArea(null) : setFilterTypeArea(value);
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
    tagIn: filterTypeArea !== "" ? filterTypeArea : null,
  };
  const [getProducts, { data, error, loading, fetchMore }] = useLazyQuery(
    type === 1 ? GET_ALL_PARTS : GET_ALL_CARRIAGES,
    {
      variables,
      notifyOnNetworkStatusChange: true,
    }
  );

  const filterClickHandler = () => {
    getProducts({
      variables,
    }).then((r) => {
      executeScroll();
      handleNewNotification("SUCCESS", "Данные получены", "Успешно");
    });
  };

  useEffect(() => {
    if (selectedDD[0] !== 0) {
      getProducts({
        ...variables,
        categoryIdIn: selectedDD,
      }).then((r) => {
        handleNewNotification(
          "SUCCESS",
          "Данные получены при переходе с другой страницы",
          "Успешно"
        );
      });
    }
  }, [selectedDD]);

  useEffect(() => {
    //console.log(variables.categoryIdIn)
    getProducts({
      ...variables,
      categoryIdIn: [29, 32, 33],
    }).then((r) => {
      handleNewNotification("SUCCESS", "Данные получены единожды", "Успешно");
    });
  }, []);

  if (error) {
    handleNewNotification("ERROR", JSON.stringify(error), "Ошибка");
  }

  //scroll to
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  // const [cartCount, setCartCount] = useLocalStorage('count', "0");

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
    handleNewNotification("SUCCESS", "Товар добавлен в корзину 👍", "Успешно");
  };

  return (
    <div className="megamap">
      <div className="form">
        <div className="row">
          <div className="col-12 xs-col-4">
            <div
              dangerouslySetInnerHTML={{ __html: text }}
              className="head"
            ></div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 xs-col-4">
            <select
              className="form-control"
              value={filterTypeCategory.toString()}
              onChange={(e) => selectCategoryHandler(e.target.value)}
            >
              <option hidden disabled>
                Выберите категорию
              </option>
              <option value="0">Все категории</option>
              {dropdown
                ? dropdown.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="col-4 xs-col-4">
            <select
              className="form-control"
              value={filterTypeArea}
              onChange={(e) => selectAreaHandler(e.target.value)}
            >
              <option hidden disabled>
                Выберите железную дорогу
              </option>
              <option value="0">Все железные дороги</option>
              {JDS.map((item) => (
                <option value={item} key={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4 xs-col-4">
            <button
              className="btn-classic form-control"
              onClick={() => filterClickHandler()}
            >
              <span dangerouslySetInnerHTML={{ __html: text2 }}></span>
            </button>
          </div>
        </div>
      </div>

      {map ? <Map /> : null}

      <div className="map_result" ref={myRef}>
        {data && data.products ? (
          <Rows
            error={error}
            loading={loading}
            data={data.products}
            fetchMore={fetchMore}
            filterTypeArea={filterTypeArea}
            filterTypeCategory={filterTypeCategory}
            updateQuery={updateQuery}
            executeScroll={executeScroll}
            type={type}
            count={count}
            addToCart={addToCart}
          />
        ) : (
          <div className="row">
            <div className="col-12 xs-col-4">
              <div className="ta_c | mr-title">
                <div className="head">
                  <span className="italic">Уточните</span> параметры запроса
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RowsWrapper;
