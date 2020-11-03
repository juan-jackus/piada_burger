import React, { PureComponent } from 'react';
import { piadaBurgerDatabase } from '../firebase';

import OrderValidationForm from '../Components/Order Validation/OrderValidationForm';
import ValidationMessage from '../Components/Order Validation/ValidationMessage/ValidationMessage';

class Validation extends PureComponent {
  //
  state = {
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

    today = mm + '/' + dd + '/' + yyyy + ' at ' + time;

    // Put all Odered Item in one Obeject
    const oderSummary = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice2.toFixed(2),
      userContacts: userContacts,
      deleveryMethod: deleveryMethod,
      date: today,
    };

    // Add Other Items to Oder Summary if they are selected with
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
    const allOrdersDatabase = piadaBurgerDatabase.child('allOrders2');
    // Get a autamatic ID from Database
    const autoId = allOrdersDatabase.push().key;
    // Add the Oder to Database
    allOrdersDatabase.child(autoId).set(oderSummary);
    this.setState({
      showMessage: true,
    });
  };

  render() {
    return (
      <>
        <OrderValidationForm ValidateOder={this.ValidateOder} />
        {/* Show Sucess message Whan the Order is Validate */}
        {this.state.showMessage && <ValidationMessage />}
      </>
    );
  }
}

export default Validation;
