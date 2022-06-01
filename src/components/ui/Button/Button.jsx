import React from "react";

const Button = ({ text, color, ico, action }) => {
  return (
    <button className={color} onClick={action ? action : null}>
      {text}
      {ico ? <img src={ico} alt={text} /> : null}
    </button>
  );
};

export default Button;
