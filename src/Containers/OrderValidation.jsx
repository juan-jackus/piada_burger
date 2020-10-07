import React, { PureComponent } from 'react';
import { piadaBurgerDatabase } from '../firebase';
import { PiadaContext } from '../PiadaContext';

import OrderValidationForm from '../Components/Order Validation/OrderValidationForm';
import ValidationMessage from '../Components/Order Validation/ValidationMessage/ValidationMessage';

class Validation extends PureComponent {
  state = {
    phoneNumber: null,
    showMessage: false,
  };

  // Get context
  static contextType = PiadaContext;

  // Get All Odered Item
  createOderSummary = ({ userContacts, deleveryMethod }) => {
    // Get The Date of the Oder
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes();

    today = mm + '/' + dd + '/' + yyyy + ' à ' + time;

    // Put all Odered Item in one Obeject
    const oderSummary = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice2,
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
    // Get the current user uid
    const uid = this.context.user.uid;
    // Get the Order table Reference in Database
    const builderDatabase = piadaBurgerDatabase.child('users/' + uid);

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
    // console.log(this.context.user.uid);
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
