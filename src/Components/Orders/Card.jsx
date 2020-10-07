import React from 'react';

function Card({ orderSummary, number, orderSummaryHandler, id }) {
  let delevery = '';
  switch (orderSummary.deleveryMethod) {
    case 'express':
      delevery = "Express (moins d'une heure)";
      break;
    case 'fast':
      delevery = 'Rapide (moins de 3 heures)';
      break;

    default:
      delevery = 'Normale (moins de 7 heures)';
      break;
  }

  return (
    <div
      className='card order-card'
      onClick={() => orderSummaryHandler(id, number, orderSummary)}
    >
      <div className='order-card-header'>
        <div className='order-number'>Commande n°{number}</div>
        <div className='order-date'>{orderSummary.date}</div>
      </div>

      <div className='order-card-body'>
        <div className='order-delevery'>
          <p>Methode de livraison</p>
          <div> {delevery}</div>
        </div>
        <div className='separator'></div>
        <div className='order-price'>
          <p>Pix Total</p>
          <div>{orderSummary.totalPrice} XOF</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
