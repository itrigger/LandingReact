import React from 'react';

const Button = ({text, color, ico, action}) => {
    return (
        <button className={color} onClick={action ? action : null}>
            {text}
            {ico ? (<img src={ico}/>) : null}
        </button>
    );
};

export default Button;