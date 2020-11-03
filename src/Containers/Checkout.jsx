import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import commandeText from '../Assets/text/commande-Text-ENG.png';
import headerArrow from '../Assets/arrows/left-header-arrow-marron.svg';

import OrderValidation from './OrderValidation';
import Hamburger from '../Components/Builder/Hamburger/Hamburger';
import SelectedIngredients from '../Components/Checkout/SelectedIngredients';
import Fries from '../Components/Checkout/Fries';
import Condiments from '../Components/Checkout/Condiments';
import Boissons from '../Components/Checkout/Boissons';

class Checkout extends Component {
  state = {
    selectedFrie: null,
    selectedSauce: [], // Multiple Sauce can be selected
    selectedDrink: null,
    remountKey: '1',
    continue: false,
    totalPrice2: this.props.totalPrice,
  };

  componentDidMount() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  selectedFrieHandler = (frie) => {
    this.setState({ selectedFrie: frie });
  };

  selectedDrinkHandler = (selectedDrink) => {
    if (this.state.selectedDrink !== selectedDrink.id) {
      this.setState({
        selectedDrink: selectedDrink.id,
        totalPrice2: this.props.totalPrice + selectedDrink.price,
      });
    }
  };

  selectedSaucesHandler = (sauce) => {
    // Remove the SAUCE if it is Unchecked
    if (this.state.selectedSauce.includes(sauce)) {
      let copieSelectedSauce = [...this.state.selectedSauce];
      copieSelectedSauce = copieSelectedSauce.filter(
        (selectedsauce) => selectedsauce !== sauce
      );
      this.setState({
        selectedSauce: copieSelectedSauce,
      });
    }
    // Add the SAUCE if it is Checked
    else {
      const copieSelectedSauce = [...this.state.selectedSauce];
      copieSelectedSauce.push(sauce);
      this.setState({
        selectedSauce: copieSelectedSauce,
      });
    }
  };

  // Remount Boisson compenent to reset the state if no Boisson is Checked
  remountComponent = () => {
    const randomNumb = Math.random().toString();
    this.setState({
      selectedDrink: null,
      remountKey: randomNumb,
      totalPrice2: this.props.totalPrice,
    });
  };

  render() {
    return (
      <div id='checkout' className='pb-4 py-3'>
        {/* Show Navigation Desktop Arrow to Go Back (on Destop Only) */}
        <div className='desktop-navigation-img d-none d-sm-block'>
          <NavLink to='/'>
            <img src={headerArrow} alt='logo' />
          </NavLink>
        </div>
        {/* Votre Commande image */}
        <img
          src={commandeText}
          className='votre-commande-text'
          alt='Votre Commande'
        />
        <p className='instruction-text mb-0'>Slide up to continue</p>
        {/* Builded Burger */}
        <Hamburger
          ingredients={this.props.ingredients}
          totalPrice={this.props.totalPrice}
          basePrice={this.props.basePrice}
        />
        {/* Buttons to go back and Modify builded Burger */}
        <button
          className='btn cancel-btn mx-auto my-2'
          onClick={() => this.props.history.goBack()}
        >
          Modify the Burger
        </button>

        {/* List of Selected Ingredients */}
        <SelectedIngredients ingredients={this.props.ingredients} />
        {/* List of Fries that can be added to the Command */}
        <Fries
          selectedFrie={this.state.selectedFrie}
          selectedFrieHandler={this.selectedFrieHandler}
        />
        {/* List of Condiments that can be added to the Command */}
        <Condiments
          selectedSauce={this.state.selectedSauce}
          selectedSaucesHandler={this.selectedSaucesHandler}
        />
        {/* List of Boissons to select */}
        <Boissons
          key={this.state.remountKey} // key for remounting the compenent
          selectedDrink={this.state.selectedDrink}
          selectedDrinkHandler={this.selectedDrinkHandler}
          remountComponent={this.remountComponent}
        />
        {/* Show the Total Price of the Oder */}
        <p className='checkoutTotalPrice'>
          Total Price : $<span> {this.state.totalPrice2.toFixed(2)} </span>(Free
          for you)
        </p>
        {/* Buttons to Continue Oder and Show Checkout Form*/}
        {this.state.continue === false && (
          <button
            className='btnStyle mx-auto'
            onClick={() => this.setState({ continue: true })}
          >
            Continue
          </button>
        )}
        {/* Show Validation Form if Continue Button clicked */}
        {this.state.continue === true && (
          <OrderValidation
            ingredients={this.props.ingredients}
            selectedFrie={this.state.selectedFrie}
            selectedSauce={this.state.selectedSauce}
            selectedDrink={this.state.selectedDrink}
            totalPrice2={this.props.totalPrice}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Checkout);
