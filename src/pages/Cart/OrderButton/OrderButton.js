import React from 'react';
import './OrderButton.scss';

function OrderButton({ content, name, orderProduct }) {
  return (
    <button className={name} onClick={orderProduct}>
      {content}
    </button>
  );
}

export default OrderButton;
