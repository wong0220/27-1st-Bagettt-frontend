import React from 'react';
import './OrderButton.scss';

function OrderButton({ content, name }) {
  return <button className={name}>{content}</button>;
}

export default OrderButton;
