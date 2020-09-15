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
      .max(50, 'La limite de caractéres (50) a été dépassèe')
      .matches(nameRegex, 'Prénom invalide')
      .min(3, 'Prénom trop court')
      .required('Veuillez renseignez ce champ '),
    lastName: Yup.string()
      .max(30, 'La limite de caractéres (30) a été dépassèe')
      .matches(nameRegex, 'Nom invalide')
      .min(2, 'Prénom trop court')
      .required('Veuillez renseignez ce champ '),
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
        <h3 className=' text-center text-white col-6'>Bienvenue</h3>
        <span className='col-3 p-0 loginline'></span>
      </div>
      <p className='text-center'>Entrez votre Prenom et Nom</p>

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
            placeholder='Prenom'
          />
          {/* User last Name Input */}
          <FormikInput
            name='lastName'
            type='text'
            id='inputPassword'
            className='form-control text-uppercase'
            fontAwsome='fa fa-user'
            placeholder='Nom'
          />

          <button
            type='submit'
            className='cancel-btn w-100 mx-auto mt-3'
            // disabled={!(dirty && isValid)}
          >
            SE CONNECTER
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
