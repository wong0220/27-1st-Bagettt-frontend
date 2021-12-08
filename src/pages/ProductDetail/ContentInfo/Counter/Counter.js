import React from 'react';
import './Counter.scss';

function Counter({ increaseNumber, decreaseNumber, number }) {
  return (
    <div className="productCountWrapper">
      <button
        onClick={decreaseNumber}
        type="button"
        className="btn btnDown"
        title="감소"
        value=""
      >
        -
      </button>
      <h3 className="countNum">{number}</h3>
      <button
        onClick={increaseNumber}
        type="button"
        className="btn btnUp"
        title="증가"
        value=""
      >
        +
      </button>
    </div>
  );
}

export default Counter;
