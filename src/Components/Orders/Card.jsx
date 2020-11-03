import React from 'react';

function Card({ orderSummary, number, orderSummaryHandler, id }) {
  let delevery = '';
  switch (orderSummary.deleveryMethod) {
    case 'express':
      delevery = 'Express (Less than 1 hour)';
      break;
    case 'fast':
      delevery = 'Fast (Less than 3 hours)';
      break;

    default:
      delevery = 'Normal (Less than 7 hours)';
      break;
  }
  return (
    <div
      className='card order-card'
      onClick={() => orderSummaryHandler(id, number, orderSummary)}
    >
      <div className='order-card-header'>
        <div className='order-number'>Order n°{number}</div>
        <div className='order-date'>{orderSummary.date}</div>
      </div>

      <div className='order-card-body'>
        <div className='order-delevery'>
          <p>Delivery deadline</p>
          <div> {delevery}</div>
        </div>
        <div className='separator'></div>
        <div className='order-price'>
          <p>Total Pricel</p>
          <div>$ {orderSummary.totalPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
