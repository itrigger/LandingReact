import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo.svg";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";
import { Link } from "gatsby";
import { CartContext } from "../../../context/CartContext";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Form from "../../Form/Form";
import Lytebox from "../Lytebox/Lytebox";

export default function Header() {
  const [tel, setTel] = useState("");
  const [telCall, setTelCall] = useState("");
  const [telega, setTelega] = useState("");
  const [menuActive, setMenuActive] = useState("");
  const [subMenuActive, setSubMenuActive] = useState("");
  const [slide, setSlide] = useState(false);
  const [telWt, setTelWt] = useState("");

  const [scrollPosition, setScrollPosition] = useState("");
  const handleScroll = () => {
    const position = window.scrollY;
    position > 90 ? setScrollPosition("scrolled") : setScrollPosition("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const wtClickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };
  const tgClickHandler = () => {
    window.open(telega);
  };

  const slideClickHandler = () => {
    setSlide(true);
    setMenuActive(false);
  };
  const value = React.useContext(CartContext);

  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setTel(data.posts.nodes[0].acfcontent.telFront);
      setTelCall(data.posts.nodes[0].acfcontent.telCall);
      setTelWt(data.posts.nodes[0].acfcontent.telWt);
      setTelega(data.posts.nodes[0].acfcontent.telega);
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
    <>
      <Lytebox trigger={slide} setTrigger={setSlide}>
        <div className="head3">
          <span className="italic">Быстрая</span> оценка вагона
        </div>
        <Form setTrigger={setSlide} />
      </Lytebox>
      <header id="header" className={`header ${menuActive} ${scrollPosition}`}>
        <div className="row">
          <div className="d_f ai_c col-0 m-col-3 xs-col-1 | h90">
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
          <div className="col-2 m-col-6 xs-col-2 d_f | h90">
            <Link to="/" className="logo">
              <img src={logo} alt="" className="logo" />
            </Link>
          </div>
          <div className="d_f jc_end | col-0 m-col-3 xs-col-1 | h90">
            <a className="mobile-header-call" href={"tel:" + telCall}>
              <span className="ico ico-tel"></span>
            </a>
          </div>
          <div className="d_f col-6 m-col-0 xs-col-0 | h90">
            <ul className="d_f ai_c | top-menu">
              <li className="has-child">
                <Link to="/buy-carriage" activeClassName="active">
                  Скупка вагонов
                </Link>
                <div>
                  <ul>
                    <li>
                      <AnchorLink
                        to="/buy-carriage#vlom"
                        title="Вагоны на металлолом"
                      >
                        Вагоны в разделку (в лом)
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        to="/buy-carriage#vrazdelku"
                        title="Вагоны в работу"
                      >
                        Вагоны в работу
                      </AnchorLink>
                    </li>
                    <li>
                      <button onClick={() => slideClickHandler()}>
                        Оценить вагон
                      </button>
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
          <div className="d_f col-1 m-col-0 xs-col-0 | h90 | top-cart-link-w">
            <Link
              to="/cart"
              className={
                value && value[0] && value[0].length > 0
                  ? "top-cart-link notempty"
                  : "top-cart-link"
              }
              activeClassName="active"
            >
              Ваш заказ
              {value && value[0] && value[0].length > 0 ? (
                <span className={"active"}>{value[0].length}</span>
              ) : null}
            </Link>
          </div>
          <div className="d_f col-3 m-col-0 xs-col-0 | h90">
            <div className="d_f ai_c | top-contacts">
              <button onClick={() => tgClickHandler()}>
                <span className="ico ico-tg"></span>
              </button>
              <button onClick={() => wtClickHandler()}>
                <span className="ico ico-wt"></span>
              </button>
              <a href={"tel:" + telCall}>{tel}</a>
            </div>
          </div>
        </div>

        <div className={`row | mobile-menu `}>
          <div className="m-col-12 xs-col-4">
            <ul className="d_f ai_c | mobile-menu-ul">
              <li className={`has-child ${subMenuActive}`}>
                <button onClick={() => subMenuClickHandler()}>
                  Скупка вагонов
                </button>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <Link to="/buy-carriage#vlom" activeClassName="active">
                        Вагоны в разделку (в лом)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/buy-carriage#vrazdelku"
                        activeClassName="active"
                      >
                        Вагоны в работу
                      </Link>
                    </li>
                    <li>
                      <button onClick={() => slideClickHandler()}>
                        Оценить вагон
                      </button>
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
              <Link
                className="top-cart-link"
                to="/cart"
                activeClassName="active"
              >
                Ваш заказ{" "}
                {value && value[0] && value[0].length > 0 ? (
                  <span className={"active"}>{value[0].length}</span>
                ) : null}
              </Link>
            </div>
            <div className="d_f mobile-menu-contacts">
              <div className="d_f fd_c ai_c | top-contacts">
                <div className={"d_f"}>
                  <button onClick={() => tgClickHandler()}>
                    <span className="ico ico-tg"></span>
                  </button>
                  <button onClick={() => wtClickHandler()}>
                    <span className="ico ico-wt"></span>
                  </button>
                </div>
                <div className="mobile-menu-contacts__tel">
                  <a href={"tel:" + telCall}>{tel}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
