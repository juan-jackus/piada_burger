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
    initialState: null,
    retrieveAgainData: false,
  };

  componentDidMount() {
    this.retrieveOrders();
    this.refreshOrders();
  }

  // Get the All Oders and initial Builder State from DataBase
  retrieveOrders = () => {
    const builderDatabase = piadaBurgerDatabase;
    builderDatabase.on('value', (snapshot) => {
      this.setState({
        orders: [snapshot.val().orders],
        initialState: snapshot.val().builderState,
      });
    });
  };

  refreshOrders = (value) => {
    if (value) {
      this.setState({ retrieveAgainData: false });
    }
    setTimeout(() => {
      if (this.state.orders === null) {
        this.setState({ retrieveAgainData: true });
      }
    }, 7000);
  };

  orderSummaryHandler = (id, number, orderSummary) => {
    this.state.initialState.ingredients.forEach((element) => {
      const checkIngredient = orderSummary.ingredients.find(
        (ingredient) => ingredient.id === element.id
      );
      if (!checkIngredient) {
        orderSummary.ingredients.push(element);
      }
    });

    const copieState = { ...this.state.initialState, ...orderSummary };
    this.setState({ orderSummary: copieState }, () => {
      this.props.history.push('/orders/' + id + '_' + number);
    });
  };

  render() {
    return (
      <div className=' container ' id='orders-wrapper'>
        {this.state.retrieveAgainData ? (
          <div className='retrieveDataMessage'>
            <p>
              Un probléme est survenu lors de la recupération des commande
              <br />
              Veuillez vérifier votre connexion et réessayer
              <br />
              en appuyant sur le boutton ci dessous
            </p>
            <img
              src={arrowRefresh}
              alt=''
              onClick={() => this.refreshOrders(true)}
            />
          </div>
        ) : this.state.orders ? (
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
