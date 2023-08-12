import React from "react";

const Number = ({ props }) => {
  return (
    <div className={`letter-template digit-${props}`}>
      <div className="top">
        <div className="hbar"></div>
        <div className="vertical-bars">
          <div className="vbar"></div>
          <div className="vbar"></div>
        </div>
        <div className="hbar"></div>
      </div>
      <div className="bottom">
        <div className="hbar"></div>
        <div className="vbar"></div>
        <div className="hbar"></div>
      </div>
    </div>
  );
};

export default Number;
