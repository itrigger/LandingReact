import React from "react";
import Cat1 from "../../../assets/img/cat1.png";
import Cat2 from "../../../assets/img/cat2.png";
import Cat3 from "../../../assets/img/cat3.png";
import { Link } from "gatsby";

const Cats = () => {
  return (
    <div className="home_cats">
      <div className="row bl br middle-border-12">
        <div className="col-12 m-col-12 xs-col-4">
          <h1>
            <span className="italic">продаём</span> запчасти для вагонов
          </h1>
        </div>
      </div>
      <div className="row br bl middle-border-12">
        <div className="d_f fd_c jc_c col-4 m-col-4 xs-col-4 | item">
          <div>
            <div className="img ta_c">
              <img src={Cat1} width="281px" height="185px" alt="" />
            </div>
            <div className="name ta_c">Колесные пары</div>
            <div className="price ta_c">от 150 000 ₽</div>
            <div className="ta_c">
              <Link
                to={"/sale-parts"}
                state={{ chooseCatById: 29 }}
                className="btn yellow"
              >
                <span>В каталог</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="d_f fd_c jc_c col-4  m-col-4 xs-col-4 | item">
          <div>
            <div className="img ta_c">
              <img src={Cat2} width="318px" height="159px" alt="" />
            </div>
            <div className="name ta_c">Боковые опоры</div>
            <div className="price ta_c">от 150.000₽</div>
            <div className="ta_c">
              <Link
                to={"/sale-parts"}
                state={{ chooseCatById: 33 }}
                className="btn yellow"
              >
                <span>В каталог</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="d_f fd_c jc_c col-4 m-col-4 xs-col-4 | item">
          <div>
            <div className="img ta_c">
              <img src={Cat3} width="396px" height="125px" alt="" />
            </div>
            <div className="name ta_c">Надрессорные балки</div>
            <div className="price ta_c">от 150.000₽</div>
            <div className="ta_c">
              <Link
                to={"/sale-parts"}
                state={{ chooseCatById: 32 }}
                className="btn yellow"
              >
                <span>В каталог</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cats;
