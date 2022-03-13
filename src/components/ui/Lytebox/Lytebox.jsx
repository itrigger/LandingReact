import React from 'react';
import Button from "../Button/Button";

const Lytebox = (props) => {

    const closeClickHandler = () => {
        props.setTrigger(false)
    }

    const closeFadeHandler = (e) => {
        if(e.target.className === 'lytebox') {
            props.setTrigger(false)
        }
    }

    return (props.trigger) ? (
        <div className={props.trigger ? "lytebox" : "lytebox"} onClick={(e) => closeFadeHandler(e)}>
            <div className="lytebox-inner">
                <Button color={"black lytebox-close"} text={"X"} action={closeClickHandler}/>
                {props.children}
            </div>
        </div>
    ) : '';
};

export default Lytebox;