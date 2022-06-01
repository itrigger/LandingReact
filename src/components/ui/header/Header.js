import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo.svg";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";
import { Link } from "gatsby";
import { CartContext } from "../../../context/CartContext";

export default function Header() {
  const [tel, setTel] = useState("");
  const [telCall, setTelCall] = useState("");
  const [menuActive, setMenuActive] = useState("");
  const [subMenuActive, setSubMenuActive] = useState("active");

  const value = React.useContext(CartContext);

  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setTel(data.posts.nodes[0].acfcontent.telFront);
      setTelCall(data.posts.nodes[0].acfcontent.telCall);
    }
  }, [data]);

  const menuBurgerHandler = () => {
    menuActive === "active" ? setMenuActive("") : setMenuActive("active");
  };

  const subMenuClickHandler = () => {
    subMenuActive === "active"
      ? setSubMenuActive("")
      : setSubMenuActive("active");
  };

  return (
    <header id="header" className={`header ${menuActive}`}>
      <div className="row">
        <div className="d_f ai_c col-0 s-col-0 xs-col-1 | h90">
          <div
            tabIndex="0"
            role="button"
            className={`d_f btn-burger ${menuActive}`}
            onClick={() => menuBurgerHandler()}
            onKeyDown={() => menuBurgerHandler()}
          >
            <span></span>
          </div>
        </div>
        <div className="col-2 xs-col-2 d_f | h90">
          <Link to="/" className="logo">
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="d_f jc_end | col-0 s-col-0 xs-col-1 | h90">
          <a className="mobile-header-call" href={"tel:" + telCall}>
            <span className="ico ico-tel"></span>
          </a>
        </div>
        <div className="d_f col-6 xs-col-0 | h90">
          <ul className="d_f ai_c | top-menu">
            <li className="has-child">
              <Link to="/buy-carriage" activeClassName="active">
                Скупка вагонов
              </Link>
              <div>
                <ul>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Вагоны на металлолом
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Вагоны в разделку
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Вагоны в работу
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Оценить вагон
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/sale-carriage" activeClassName="active">
                Продажа вагонов
              </Link>
            </li>
            <li>
              <Link to="/sale-parts" activeClassName="active">
                Продажа запчастей
              </Link>
            </li>
          </ul>
        </div>
        <div className="d_f col-1 xs-col-0 | h90">
          <Link className="top-cart-link" to="/cart" activeClassName="active">
            Ваш заказ (<span>{value && value[0] ? value[0].length : "0"}</span>)
          </Link>
        </div>
        <div className="d_f col-3 xs-col-0 | h90">
          <div className="d_f ai_c | top-contacts">
            <a href="/tg">
              <span className="ico ico-tg"></span>
            </a>
            <a href="/wt">
              <span className="ico ico-wt"></span>
            </a>
            <a href={"tel:" + telCall}>{tel}</a>
          </div>
        </div>
      </div>
      <div className={`row | mobile-menu `}>
        <div className="xs-col-4">
          <ul className="d_f ai_c | mobile-menu-ul">
            <li className={`has-child ${subMenuActive}`}>
              <button onClick={() => subMenuClickHandler()}>
                Скупка вагонов
              </button>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Вагоны на металлолом
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Вагоны в разделку
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Вагоны в работу
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy-carriage" activeClassName="active">
                      Оценить вагон
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/sale-carriage" activeClassName="active">
                Продажа вагонов
              </Link>
            </li>
            <li>
              <Link to="/sale-parts" activeClassName="active">
                Продажа запчастей
              </Link>
            </li>
          </ul>
          <div className="d_f mobile-menu-minicart">
            <Link className="top-cart-link" to="/cart" activeClassName="active">
              Ваш заказ (
              <span>{value && value[0] ? value[0].length : "0"}</span>)
            </Link>
          </div>
          <div className="d_f mobile-menu-contacts">
            <div className="d_f fd_c ai_c | top-contacts">
              <div className={"d_f"}>
                <a href="/tg">
                  <span className="ico ico-tg"></span>
                </a>
                <a href="/wt">
                  <span className="ico ico-wt"></span>
                </a>
              </div>
              <div className="mobile-menu-contacts__tel">
                <a href={"tel:" + telCall}>{tel}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
