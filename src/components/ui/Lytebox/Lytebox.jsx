import React from "react";
import Button from "../Button/Button";
import { CSSTransitionGroup } from "react-transition-group";

const Lytebox = (props) => {
  const closeClickHandler = () => {
    props.setTrigger(false);
  };

  const closeFadeHandler = (e) => {
    if (e.target.className === "lytebox") {
      props.setTrigger(false);
    }
  };

  return props.trigger ? (
    <CSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div
        className={props.trigger ? "lytebox" : "lytebox"}
        onClick={(e) => closeFadeHandler(e)}
      >
        <div
          className={
            props.nopadding ? "lytebox-inner nopadding" : "lytebox-inner"
          }
        >
          <Button
            color={props.light ? "lytebox-close black" : "lytebox-close"}
            text={""}
            action={closeClickHandler}
          />
          {props.children}
        </div>
      </div>
    </CSSTransitionGroup>
  ) : (
    ""
  );
};

export default Lytebox;
