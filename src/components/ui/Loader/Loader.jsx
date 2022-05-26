import React from "react";

const Loader = ({ absolute }) => {
  return (
    <div className={absolute ? "loader-center absolute" : "loader-center"}>
      <svg
        viewBox="0 0 100 100"
        y="0"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="ldl-main"
      >
        <g className="ldl-scale">
          <g className="ldl-ani">
            <g className="ldl-layer">
              <g className="ldl-ani1">
                <path d="M71.2 15.6H28.8l-2.5 7.6h47.4z"></path>
              </g>
            </g>
            <g className="ldl-layer">
              <g className="ldl-ani2">
                <path d="M76 30.3H24l-2.8 8.5h57.6z"></path>
              </g>
            </g>
            <g className="ldl-layer">
              <g className="ldl-ani3">
                <path d="M81.6 47.4H18.4L15 57.8h70z"></path>
              </g>
            </g>
            <g className="ldl-layer">
              <g className="ldl-ani4">
                <path d="M88.2 67.8H11.8L7.5 81h85z"></path>
              </g>
            </g>
            <g className="ldl-layer">
              <g className="ldl-ani5">
                <path d="M39.1 10.8h-4.9l-23 78.4H18z"></path>
              </g>
            </g>
            <g className="ldl-layer">
              <g className="ldl-ani6">
                <path d="M82 89.2h6.8l-23-78.4h-4.9z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
