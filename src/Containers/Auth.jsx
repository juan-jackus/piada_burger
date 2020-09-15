import React from 'react';
import SignModal from '../Components/Auth/SignModal';
import SignInForm from '../Components/Auth/SignInForm';
import SignUpForm from '../Components/Auth/SignUpForm';

const Login = () => {
  return (
    <SignModal>
      <div
        id='sign-carousel'
        className='carousel slide'
        data-ride='carousel'
        data-interval='false'
      >
        <div className='carousel-inner'>
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </SignModal>
  );
};

export default Login;
