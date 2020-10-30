import React from 'react';
import { connect } from 'react-redux';
import FormValidation from './FormValidation';

const OrderValidationForm = ({ ValidateOder, ...props }) => {
  // Form Initial Values
  const initialValues = {
    userContacts: {
      userName: props.user.displayName,
      address: '',
      phoneNumber: '',
    },
    deleveryMethod: '',
  };

  // Handle all User Input
  function phoneNumberHandler(value) {
    let formattedPhoneNumber = '';
    // Remove the space in previous phone Number value
    const phoneNumber = value.split(' ').join('');
    const length = phoneNumber.length;
    // Format Phone Number
    for (let i = 0; i < length; i++) {
      if (i === 2 || i === 5 || i === 7) {
        formattedPhoneNumber += ' ' + phoneNumber.charAt(i);
      } else if (i < 9) {
        formattedPhoneNumber += phoneNumber.charAt(i);
      }
    }

    return formattedPhoneNumber;
  }

  return (
    <FormValidation
      initialValues={initialValues}
      phoneNumberHandler={phoneNumberHandler}
      ValidateOder={ValidateOder}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(OrderValidationForm);
