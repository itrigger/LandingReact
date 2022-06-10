import React from "react";
import { Link } from "gatsby";

const TwoBlocks = () => {
  return (
    <div className="twoblocks">
      <div className="row">
        <div className="d_f col-12 m-col-12 xs-col-4 | twoblocks_w">
          <div className="tb-left">
            <div>
              <div className="head">
                <span className="italic">Скупаем</span> лом вагонов
              </div>
              <div className="desc">
                Вагоны для работы на подъездные пути вагоны БУ готовые к работе
                (полувагоны, крытые. цистерны, платформы, хопперы, думкары)
              </div>
              <Link to="/buy-carriage">
                <button className="btn">
                  <span>продать лом</span>
                </button>
              </Link>
              <div className="hint">
                <span className="italic">Уже купили</span> 5990 тонн
              </div>
            </div>
          </div>
          <div className="tb-right">
            <div>
              <div className="head">
                <span className="italic">Продаём</span> б/у вагоны
              </div>
              <div className="desc">
                Вагоны для работы на подъездные пути вагоны БУ готовые к работе
                (полувагоны, крытые. цистерны, платформы, хопперы, думкары)
              </div>
              <Link to="/sale-carriage">
                <button className="btn">
                  <span>Купить вагон</span>
                </button>
              </Link>
              <div className="hint">
                <span className="italic">Уже продано</span> 1310 вагонов
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoBlocks;
