import React from "react";
import { PARTS } from "../../../utility/constants";
import PopupItemCat from "./PopupItemCat";

const PopupItem = ({ name, showBtnHandler, slug, code, city }) => {
  return (
    <div className={"search_item"}>
      <div className="code">КОД {code}</div>
      <div className="name">{name}</div>
      <div className="city">ТУ в {city}</div>
      <div className="res_head">Найдено на всех станциях</div>
      {PARTS.map((item, i) => (
        <PopupItemCat key={i} id={item.id} slug={slug} name={item.name} />
      ))}
      <button
        className="btn-classic btn-mini"
        onClick={() => showBtnHandler(slug)}
      >
        <span>Показать</span>
      </button>
    </div>
  );
};

export default PopupItem;
