import React, { Component } from 'react';
import { piadaBurgerDatabase } from '../firebase';
import { Route } from 'react-router-dom';
import { RollerLoader } from '../Components/Loader/Spiner';
import arrowRefresh from '../Assets/arrows/arrow-refresh.svg';

import OrdersCard from '../Components/Orders/OrdersCard';
import OrderSummary from '../Components/Orders/OrderSummary';

class Orders extends Component {
  state = {
    orders: null,
    orderSummary: null,
    retrieveAgainData: false,
  };

  componentDidMount() {
    this.retrieveOrders();
  }

  // Get the All Oders and initial Builder State from DataBase
  retrieveOrders = () => {
    if (this.state.retrieveAgainData) {
      this.setState({ retrieveAgainData: false });
    }

    // Get a Reference to AllOrders
    const allOrders = piadaBurgerDatabase.child('allOrders2');

    allOrders.once('value', (snapshot) => {
      this.setState({
        orders: [snapshot.val()],
      });
    });

    // Show a Refresh Button after a timeout
    setTimeout(() => {
      if (this.state.orders === null) {
        this.setState({ retrieveAgainData: true });
      }
    }, 7000);
  };

  // Go to the Summary of clicked Order
  orderSummaryHandler = (id, number, orderSummary) => {
    // Copie initial state and update modify one with the order summary
    const copieState = { ...orderSummary, id };
    this.setState({ orderSummary: copieState }, () => {
      this.props.history.push('/orders/' + id + '_' + number);
    });
  };

  render() {
    return (
      <div className=' container ' id='orders-wrapper'>
        {/* Show this message and refresh button when retrieve orders fail */}
        {this.state.retrieveAgainData ? (
          <div className='pt-5 retrieveDataMessage'>
            <p>
              A problem occurred while retrieving the orders
              <br />
              Please check your connection and try again
              <br />
              by pressing the button below
            </p>
            <img src={arrowRefresh} alt='' onClick={this.retrieveOrders} />
          </div>
        ) : this.state.orders ? ( // Check if there is Order and Render them
          <>
            <Route
              path='/orders'
              exact
              render={() => (
                <OrdersCard
                  orders={this.state.orders}
                  orderSummaryHandler={this.orderSummaryHandler}
                />
              )}
            />
            <Route
              path='/orders/:id'
              render={() => (
                <OrderSummary orderSummary={this.state.orderSummary} />
              )}
            />
          </>
        ) : (
          <RollerLoader />
        )}
      </div>
    );
  }
}

export default Orders;
