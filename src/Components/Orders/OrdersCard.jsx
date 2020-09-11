import React from 'react';
import Card from './Card';

function OrdersCard(props) {
  return (
    <>
      <p className='resize-text'>
        Cliquez sur une Commande pour plus de details
      </p>
      {/* Map to all Oders and Renders them as CARD with Card Component */}
      <div style={{ marginTop: '3.3rem' }}>
        {props.orders.map((order) => {
          let ordersArray = [];
          let i = 1;
          for (const key in order) {
            ordersArray.push(
              <Card
                key={key}
                orderSummary={order[key]}
                number={i}
                id={key}
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
    </>
  );
}

export default OrdersCard;
