import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { piadaBurgerDatabase } from '../firebase';

import Hamburger from '../Components/Builder/Hamburger/Hamburger';
import BuildControls from '../Components/Builder/BuildControls/BuildControls';
import { RollerLoader } from '../Components/Loader/Spiner';
// import Checkout from './Checkout';
const Checkout = lazy(() => import('./Checkout'));

class Builder extends Component {
  // Default State
  state = {
    ingredients: [
      { id: 'salad', price: 0.7, count: 0 },
      { id: 'tomato', price: 0.5, count: 0 },
      { id: 'ognion', price: 0.3, count: 0 },
      { id: 'ham', price: 1.5, count: 0 },
      { id: 'cheese', price: 1.2, count: 0 },
      { id: 'egg', price: 0.9, count: 0 },
      { id: 'steak', price: 1.9, count: 0 },
      { id: 'chicken', price: 1.7, count: 0 },
    ],
    basePrice: 4.0,
    totalPrice: 4.0,
  };

  // Get State from Database
  // componentDidMount() {
  //   // Get initial Builder State from DataBase
  //   const builderDatabase = piadaBurgerDatabase;
  //   builderDatabase.once('value', (snapshot) => {
  //     this.setState(snapshot.val().builderState);
  //   });
  // }

  moreAndLessHandler = (id, button) => {
    this.setState((prevState) => {
      const copieState = JSON.parse(JSON.stringify(prevState));

      // Get the ingredient that is cliked an increment or decrement count
      for (const ingredient of copieState.ingredients) {
        // Increment ingredient if cliked button is 'More'
        if (ingredient.id === id && button === 'more') {
          // Get rid of all previous selected Steak if Chicken is incremement
          if (id === 'chicken') {
            for (const findSteak of copieState.ingredients) {
              // Find Steak and substract his price of Total price and set his count to zero
              if (findSteak.id === 'steak') {
                copieState.totalPrice -= findSteak.price * findSteak.count;
                findSteak.count = 0;
                break;
              }
            }
          }
          // Get rid of all previous selected Chicken if Steak is incremement
          else if (id === 'steak') {
            for (const findChicken of copieState.ingredients) {
              if (findChicken.id === 'chicken') {
                // Find Chicken and substract his price of Total price and set his count to zero
                copieState.totalPrice -= findChicken.price * findChicken.count;
                findChicken.count = 0;
                break;
              }
            }
          }

          ingredient.count++;
          copieState.totalPrice = parseFloat(
            (copieState.totalPrice + ingredient.price).toFixed(2)
          );
          break;
        }
        // Decrement ingredient if cliked button is 'Less'
        else if (ingredient.id === id && button === 'less') {
          ingredient.count--;
          copieState.totalPrice = parseFloat(
            (copieState.totalPrice - ingredient.price).toFixed(2)
          );
          break;
        }
      }

      return copieState;
    });
  };

  render() {
    return (
      <>
        <Route
          path='/'
          exact
          component={() => (
            <>
              <Hamburger
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                basePrice={this.state.basePrice}
              />

              <BuildControls
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                basePrice={this.state.basePrice}
                moreAndLessHandler={this.moreAndLessHandler}
                pathNavigation={this.pathNavigation}
              />
            </>
          )}
        />
        {/* Lazing importing Checkout Component */}
        <Suspense
          fallback={
            <div className='mb-auto'>
              <RollerLoader />
            </div>
          }
        >
          {/* Check if Ingredients is added to Burger before Showing Checkout Page */}
          {this.state.totalPrice > this.state.basePrice ? (
            <Route
              path='/checkout'
              component={() => (
                <Checkout
                  ingredients={this.state.ingredients}
                  totalPrice={this.state.totalPrice}
                  basePrice={this.state.basePrice}
                  showForm={this.state.showForm}
                  pathNavigation={this.pathNavigation}
                />
              )}
            />
          ) : (
            <Redirect to='/' />
          )}
        </Suspense>
      </>
    );
  }
}

export default Builder;
