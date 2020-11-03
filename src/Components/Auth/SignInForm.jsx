import React, { useContext } from 'react';
import { PiadaContext } from '../../PiadaContext';
import userLoginPng from '../../Assets/userLogin.png';
import userLoginWebp from '../../Assets/userLogin.webp';
import arrow from '../../Assets/arrows/signin-arrow.png';
import { Formik, Form } from 'formik';
import FormikInput from '../Formik/FormikInput.jsx';
import * as Yup from 'yup';

function SignInForm() {
  // Get the Show Login Form Setter From Piada Context
  const { logInHandler, showModalHandler } = useContext(PiadaContext);

  // Sign In Form Initial Values
  const initialSignInValues = {
    firstName: '',
    lastName: '',
  };

  // Sign In Submit Handler
  const signInSubmitHandler = (values) => {
    showModalHandler(false);
    const username = values.firstName + ' ' + values.lastName;
    logInHandler(username);
  };

  // RegEx for Yup Validation Schema
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'The limit of (50) Characters has been exceeded')
      .matches(nameRegex, 'Invalid name')
      .min(3, 'Name to short')
      .required('Please fill in this field'),
    lastName: Yup.string()
      .max(30, 'The limit of (50) Characters has been exceeded')
      .matches(nameRegex, 'Invalid name')
      .min(2, 'Name to short')
      .required('Please fill in this field'),
  });

  return (
    <div id='signInForm' className='carousel-item active'>
      <picture>
        <source srcSet={userLoginWebp} type='image/webp' />
        <img
          id='top-bread'
          src={userLoginPng}
          alt=''
          className='d-block w-25 pt-3 pb-2 mx-auto'
        />
      </picture>
      <div className='row align-items-center mx-0 mt-3 mb-2'>
        <span className='col-3 p-0 loginline'></span>
        <h3 className=' text-center text-white col-6'>Welcome</h3>
        <span className='col-3 p-0 loginline'></span>
      </div>
      <p className='text-center'>Enter your first and last name</p>

      <Formik
        initialValues={initialSignInValues}
        validationSchema={validationSchema}
        onSubmit={signInSubmitHandler}
        validateOnChange={false}
        // validateOnBlur={false}
      >
        {/* {({ dirty, isValid }) => ( */}
        <Form id='signin-form'>
          {/* User First Name Input */}
          <FormikInput
            name='firstName'
            type='text'
            id='inputEmail'
            className='form-control text-capitalize'
            fontAwsome='fa fa-user'
            placeholder='First Name'
          />
          {/* User last Name Input */}
          <FormikInput
            name='lastName'
            type='text'
            id='inputPassword'
            className='form-control text-uppercase'
            fontAwsome='fa fa-user'
            placeholder='Last Name'
          />

          <button
            type='submit'
            className='cancel-btn w-100 mx-auto mt-3'
            // disabled={!(dirty && isValid)}
          >
            SIGN IN
          </button>
        </Form>
        {/* )} */}
      </Formik>

      <div className='formfooter mt-3 pt-3'>
        {/* Close Modal Button */}
        <button
          type='button'
          className='signin-close'
          onClick={() => showModalHandler(false)}
        >
          Close
        </button>
        {/* Create Account Link */}
        <a
          className='ml-3 mr-3'
          href='#sign-carousel'
          role='button'
          data-slide='next'
        >
          Create Account
          <img src={arrow} className='ml-2' alt='arrow' />
        </a>
      </div>
    </div>
  );
}

export default SignInForm;
