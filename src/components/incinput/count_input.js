import React from "react";

const CounterInput = () => {
  return (
    <div className="orderincForm">
      <button className="orderDec">
        -
      </button>
      <input type="number" className="orderIncInput" />
      <button className="orderInc">
        +
      </button>
    </div>
  );
};

export default CounterInput;
