import React from 'react';
import Card from './Card';

function OrdersCard(props) {
  return (
    <>
      <p className='resize-text'>
        {/* Change the text if there is no order */}
        {props.orders[0] !== null
          ? 'Cliquez sur une Commande pour plus de details'
          : 'Aucune commande effectuée, Veuillez en passer une'}
      </p>
      {/* Check if there is a order before rendering */}
      {props.orders[0] !== null && (
        <div style={{ marginTop: '3.3rem' }}>
          {/* Map to all Oders and Renders them as CARD with Card Component */}
          {props.orders.map((order) => {
            let ordersArray = [];
            let i = 1;
            for (const key in order) {
              ordersArray.push(
                <Card
                  key={key}
                  number={i}
                  id={key}
                  orderSummary={order[key]}
                  orderSummaryHandler={props.orderSummaryHandler}
                />
              );
              i++;
            }
            // Reverse the Array to Show last Oders first
            ordersArray = ordersArray.reverse();

            return ordersArray;
          })}
        </div>
      )}
    </>
  );
}

export default OrdersCard;
