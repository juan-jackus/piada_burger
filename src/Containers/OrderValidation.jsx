import React, { PureComponent } from 'react';
import { piadaBurgerDatabase } from '../firebase';

import OrderValidationForm from '../Components/Order Validation/OrderValidationForm';
import ValidationMessage from '../Components/Order Validation/ValidationMessage/ValidationMessage';

class Validation extends PureComponent {
  //
  state = {
    phoneNumber: null,
    showMessage: false,
  };

  // Get All Odered Item
  createOderSummary = ({ userContacts, deleveryMethod }) => {
    // Get The Date of the Oder
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes();

    today = mm + '/' + dd + '/' + yyyy + ' à ' + time;
    // Get selected Ingredients
    const ingredients = this.props.ingredients.filter(
      (ingredient) => ingredient.count > 0
    );
    // Put all Odered Item in one Obeject
    const oderSummary = {
      ingredients: ingredients,
      totalPrice: this.props.totalPrice2,
      userContacts: userContacts,
      deleveryMethod: deleveryMethod,
      date: today,
    };
    // Add Other Items to Oder Summary if they are selected with (If Clause Guard Block)
    if (this.props.selectedDrink)
      oderSummary.selectedDrink = this.props.selectedDrink;
    if (this.props.selectedFrie)
      oderSummary.selectedFrie = this.props.selectedFrie;
    if (this.props.selectedSauce.length > 0) {
      oderSummary.selectedSauce = this.props.selectedSauce;
    }
    return oderSummary;
  };

  // Validation of the Order to the Database
  ValidateOder = (formValues) => {
    // Create OrderSummary
    const oderSummary = this.createOderSummary(formValues);
    // Get the Order table Reference in Database
    const builderDatabase = piadaBurgerDatabase.child('orders');
    // Get a autamatic ID from Database
    const autoId = builderDatabase.push().key;
    // Add the Oder to Database
    builderDatabase.child(autoId).set(oderSummary);
    this.setState({
      showMessage: true,
      phoneNumber: formValues.userContacts.phoneNumber,
    });
  };

  render() {
    return (
      <>
        <OrderValidationForm ValidateOder={this.ValidateOder} />
        {/* Show Sucess message Whan the Order is Validate */}
        {this.state.showMessage && (
          <ValidationMessage phoneNumber={this.state.phoneNumber} />
        )}
      </>
    );
  }
}

export default Validation;
