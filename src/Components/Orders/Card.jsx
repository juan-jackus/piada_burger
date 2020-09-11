import React from 'react';

function Card({ orderSummary, number, orderSummaryHandler, id }) {
  let delevery = '';
  if (orderSummary.deleveryMethod === 'rapide') {
    delevery = "Rapide (moins d'une heure)";
  } else {
    delevery = 'Normale (moins de 3 heures)';
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
