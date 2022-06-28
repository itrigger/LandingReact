import React, { useEffect, useState } from "react";
import { PARTS } from "../../../utility/constants";
import PopupItemCat from "./PopupItemCat";
import { gql, useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";

const PopupItem = ({ name, showBtnHandler, slug, code, city }) => {
  const [telWt, setTelWt] = useState("");

  const { data: dataWP } = useQuery(GET_CONTENT);

  useEffect(() => {
    console.log(dataWP);
    if (dataWP) {
      setTelWt(dataWP.posts.nodes[0].acfcontent.telWt);
    }
  }, []);

  const clickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };

  const GET_TOTAL = gql`
    query GetAllPartsCount($tagIn: [String], $id: [Int]) {
      products(where: { categoryIdIn: $id, tagIn: $tagIn }) {
        pageInfo {
          total
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_TOTAL, {
    variables: { tagIn: slug, id: [29, 32, 33] },
  });

  if (error) console.log(error);
  return (
    <div className={"search_item"}>
      <div className="code">КОД {code}</div>
      <div className="name">{name}</div>
      <div className="city">ТУ в {city}</div>
      <div className="res_head">Найдено на всех станциях</div>
      {PARTS.map((item, i) => (
        <PopupItemCat key={i} id={item.id} slug={slug} name={item.name} />
      ))}
      {data?.products ? (
        data.products.pageInfo.total > 0 ? (
          <button
            className="btn-classic btn-mini"
            onClick={() => showBtnHandler(slug)}
          >
            <span>Показать</span>
          </button>
        ) : (
          <button
            onClick={() => clickHandler()}
            className="btn-wt-green btn-mini"
          >
            <span className="ico ico-left ico-wt-white"></span>
            Запросить у менеджера
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default PopupItem;
