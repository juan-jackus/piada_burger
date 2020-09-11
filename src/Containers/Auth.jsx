import React, { useContext } from 'react';
import SignModal from '../Components/Auth/SignModal';
import SignInForm from '../Components/Auth/SignInForm';
import SignUpForm from '../Components/Auth/SignUpForm';
import { PiadaContext } from '../PiadaContext';

const Login = () => {
  // Get logInHandler and SetShowLoginForm from Piada Context
  const { logInHandler, showModalHandler } = useContext(PiadaContext);

  // Sign In Form Initial Values
  const initialSignInValues = {
    firstName: '',
    lastName: '',
  };

  // Sign Up Form Initial Values
  const initialSignUpValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Sign In Submit Handler
  const onSignInSubmit = (values) => {
    showModalHandler(false);
    const username = values.firstName + ' ' + values.lastName;
    logInHandler(username);
  };

  // Sign Up Submit Handler
  const onSignUpSubmit = (values) => {
    showModalHandler(false);
    console.log(values);
  };

  return (
    <SignModal>
      <div
        id='sign-carousel'
        className='carousel slide'
        data-ride='carousel'
        data-interval='false'
      >
        <div className='carousel-inner'>
          <SignInForm
            initialValues={initialSignInValues}
            onSubmit={onSignInSubmit}
          />
          <SignUpForm
            initialValues={initialSignUpValues}
            onSubmit={onSignUpSubmit}
          />
        </div>
      </div>
    </SignModal>
  );
};

export default Login;
