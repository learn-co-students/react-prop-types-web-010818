import React from 'react';
import ReactDOM from 'react-dom';
import Order from './components/Order';

const scoops = ['hazelnut', 'chocolate', 'peanut butter', 'pistachio']
const orderInfo = {customerName: 'Fei', orderedAt: 1520794656}

ReactDOM.render(
  <Order
    scoops={scoops}
    orderInfo={orderInfo}
  />,
  document.getElementById('root')
)
