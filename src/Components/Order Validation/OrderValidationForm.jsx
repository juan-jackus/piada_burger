import React, { useContext } from 'react';
import { PiadaContext } from '../../PiadaContext';
import FormValidation from './FormValidation';

const OrderValidationForm = ({ ValidateOder }) => {
  // Get the username Value from Piada Context
  const { username } = useContext(PiadaContext);

  // Form Initial Values
  const initialValues = {
    userContacts: {
      userName: username,
      address: '',
      phoneNumber: '',
    },
    deleveryMethod: 'normal',
  };

  // Handle all User Input
  function phoneNumberHandler(value) {
    let formattedPhoneNumber = '';
    // Remove the space in previous phone Number value
    const phoneNumber = value.split(' ').join('');
    const length = phoneNumber.length;
    // Format Phone Number
    for (let i = 0; i < length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += ' ' + phoneNumber.charAt(i);
      } else if (i < 10) {
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

export default OrderValidationForm;
