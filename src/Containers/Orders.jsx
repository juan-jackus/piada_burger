import React, { Component } from 'react';
import { piadaBurgerDatabase } from '../firebase';
import { PiadaContext } from '../PiadaContext';
import { Route } from 'react-router-dom';
import { RollerLoader } from '../Components/Loader/Spiner';
import arrowRefresh from '../Assets/arrows/arrow-refresh.svg';

import OrdersCard from '../Components/Orders/OrdersCard';
import OrderSummary from '../Components/Orders/OrderSummary';

class Orders extends Component {
  state = {
    initialState: null,
    orders: null,
    orderSummary: null,
    retrieveAgainData: false,
  };

  // Get context
  static contextType = PiadaContext;

  componentDidMount() {
    this.retrieveOrders();
  }

  // Get the All Oders and initial Builder State from DataBase
  retrieveOrders = () => {
    if (this.state.retrieveAgainData) {
      this.setState({ retrieveAgainData: false });
    }
    // Get the current user uid
    const uid = this.context.user.uid;

    // Get Users and BulderState Ref Database
    const usersDatabase = piadaBurgerDatabase.child('users/' + uid);
    const builderStateDatabase = piadaBurgerDatabase.child('builderState');

    // Get User Orders from database and set the state
    usersDatabase.once('value', (snapshot) => {
      this.setState({
        orders: [snapshot.val()],
        retrieveAgainData: false,
      });
    });

    // Get Builder State Once and set the initialState
    builderStateDatabase.once('value', (snapshot) => {
      this.setState({
        initialState: snapshot.val(),
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
    const copieState = { ...this.state.initialState, ...orderSummary, id };
    this.setState({ orderSummary: copieState }, () => {
      this.props.history.push('/orders/' + id + '_' + number);
    });
  };

  // Method to delete a order
  deleteOrderHandler = (id) => {
    // Get the current user uid
    const uid = this.context.user.uid;
    // Get User Order Ref
    const userOrderRef = piadaBurgerDatabase.child('users/' + uid);
    // Remove the Order by his ID
    userOrderRef.child(id).remove();
  };

  render() {
    return (
      <div className=' container ' id='orders-wrapper'>
        {/* Show this message and refresh button when retrieve orders fail */}
        {this.state.retrieveAgainData ? (
          <div className='pt-5 retrieveDataMessage'>
            <p>
              Un probléme est survenu lors de la recupération des commande
              <br />
              Veuillez vérifier votre connexion et réessayer
              <br />
              en appuyant sur le boutton ci dessous
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
                <OrderSummary
                  orderSummary={this.state.orderSummary}
                  deleteOrderHandler={this.deleteOrderHandler}
                  retrieveOrders={this.retrieveOrders}
                />
              )}
            />
          </>
        ) : (
          // Show a loader in rendering process
          <RollerLoader />
        )}
      </div>
    );
  }
}

export default Orders;
