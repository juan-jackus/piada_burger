import React, { useContext } from 'react';
import { PiadaContext } from '../../PiadaContext';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from '../Formik/FormikInput.jsx';

import userLoginWebp from '../../Assets/userLogin.webp';
import userLoginPng from '../../Assets/userLogin.png';
import arrow from '../../Assets/arrows/signin-arrow.png';

function SignInForm() {
  // Get data From Piada Context
  const {
    logInHandler,
    authError,
    setAuthError,
    showModalHandler,
    authSpinner,
  } = useContext(PiadaContext);

  // Sign In Form Initial Values
  const initialValues = {
    signinEmail: '',
    signinPassword: '',
  };

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    signinEmail: Yup.string()
      .email('Addresse Email Invalide')
      .required('Veuillez renseignez ce champ '),
    signinPassword: Yup.string().required('Veuillez renseignez ce champ '),
  });

  // Set a time out to show the default message error
  if (authError.name === 'defaultError') {
    setTimeout(() => {
      setAuthError({});
    }, 7000);
  }

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
        <h3 className=' text-center text-white col-6'>Bienvenue</h3>
        <span className='col-3 p-0 loginline'></span>
      </div>
      <p className='text-center'>Entrez votre Email et Mot de Passe</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={logInHandler}
        // validateOnBlur={false}
      >
        {/* {({ dirty, isValid }) => ( */}
        <Form id='signin-form'>
          {/* User First Name Input */}
          <FormikInput
            name='signinEmail'
            type='text'
            id='inputEmail'
            className='form-control'
            placeholder='Email'
            fontAwsome='fa fa-user'
          />
          {/* User last Name Input */}
          <FormikInput
            name='signinPassword'
            type='password'
            id='inputPassword'
            className='form-control'
            placeholder='Mot de passe'
            fontAwsome='fa fa-lock'
          />

          <button
            type='submit'
            className='cancel-btn w-100 mx-auto mt-3'
            // disabled={!(dirty && isValid)}
          >
            {/* Show Spinner when Authentication is in progress */}
            {authSpinner ? (
              <div className='spinner-border text-light' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              'SE CONNECTER'
            )}
          </button>
          {/* Show Default Authentication error message if auth fail */}
          {authError.name === 'defaultError' && (
            <div className='default-error-message'>{authError.message}</div>
          )}
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
          Fermer
        </button>
        {/* Create Account Link */}
        <a
          className='ml-3 mr-3'
          href='#sign-carousel'
          role='button'
          data-slide='next'
        >
          Creer un compte
          <img src={arrow} className='ml-2' alt='arrow' />
        </a>
      </div>
    </div>
  );
}

export default SignInForm;
