import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../ReduxStore/actions';
import { Formik, Form } from 'formik';
import FormikInput from '../Formik/FormikInput.jsx';
import * as Yup from 'yup';
import arrow2 from '../../Assets/arrows/signup-arrow.png';

function SignUpForm(props) {
  // Sign Up Form Initial Values
  const initialValues = {
    userName: '',
    signupEmail: '',
    signupPassword: '',
    confirmPassword: '',
  };

  // Set a Array of already Taken Email Address
  const alreadyTakenEmail = [
    'jeanjacquesndao@gmail.com',
    'juanjackus@gmail.com',
    'juanito3@live.fr',
  ];

  // Regex for Yup Validation Schema
  const uppercaseRegex = /(?=.*[A-Z])/;
  const lowercaseRegex = /(?=.*[a-z])/;
  const numberRegex = /(?=.*[0-9])/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  // const usernameRegex1 = /^.[a-zA-Z0-9_.]+$/; // allowed characters
  // const usernameRegex2 = /^(?![_.])/; // no "_" or "." at the beginning
  // const usernameRegex3 = /^(?!.*[_.]{2})/; // no "__" or "_." or "._" or ".." inside
  // const usernameRegex4 = /(?<![_.])$/; // no "_" or "." at the end

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    // userName: Yup.string()
    //   .max(8, 'La limite de caractéres (8) a été dépassèe')
    //   .matches(usernameRegex4, 'Pas de caractére "_" ou "." à la fin')
    //   .matches(usernameRegex3, 'Pas de caractére "_" ou "." consécutifs')
    //   .matches(usernameRegex2, 'Pas de caractére "_" ou "." au debut ')
    //   .matches(usernameRegex1, 'Caratéres Alphanumérique sont autorisés')
    //   .min(3, 'Nom trop court')
    //   .required('Veuillez renseignez ce champ '),
    userName: Yup.string()
      .max(50, 'La limite de caractéres (50) a été dépassèe')
      .matches(nameRegex, 'Nom invalide')
      .min(3, 'Nom trop court')
      .required('Veuillez renseignez ce champ '),
    signupEmail: Yup.string()
      .lowercase()
      .email('Addresse Email Invalide')
      .notOneOf(alreadyTakenEmail, 'Adresse Email non disponible')
      .required('Veuillez renseignez ce champ '),
    signupPassword: Yup.string()
      .matches(numberRegex, 'Doit contenir au moins un chiffre')
      .matches(uppercaseRegex, 'Doit contenir au moins une lettre majuscule')
      .matches(lowercaseRegex, 'Doit contenir au moins une lettre minuscule')
      .min(5, 'Minimum 5 caractéres requis')
      .required('Veuillez renseignez ce champ '),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('signupPassword')], 'Mots de passe différents')
      .required('Veuillez renseignez ce champ '),
  });

  // Set a time out to show the default message error
  if (props.authError.name === 'defaultError') {
    setTimeout(() => {
      props.setAuthError({});
    }, 7000);
  }

  return (
    <div id='singUpFom' className='carousel-item '>
      <h2 className='text-center text-white px-1 mt-3'>Creer un Compte</h2>
      <p className='text-center px-1'>
        Remplissez ce formulaire pour creer un compte
      </p>
      <hr />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={props.singUpHandler}
        // validateOnBlur={false}
      >
        <Form id='signup-form'>
          <FormikInput
            name='userName'
            type='text'
            id='singupUser'
            className='form-control text-capitalize'
            placeholder='Prenom & Nom'
            fontAwsome='fa fa-user'
          />
          <FormikInput
            name='signupEmail'
            type='email'
            id='singnupEmail'
            className='form-control'
            placeholder='Email'
            fontAwsome='fa fa-paper-plane'
          />
          <FormikInput
            name='signupPassword'
            type='password'
            id='signupPassword'
            className='form-control'
            placeholder='Mot de passe'
            fontAwsome='fa fa-lock'
          />
          <FormikInput
            name='confirmPassword'
            type='password'
            id='signupPassword2'
            className='form-control'
            placeholder='Confirmer le Mot de passe'
            fontAwsome='fa fa-check'
          />
          {/* Submit Button */}
          <button type='submit' className='cancel-btn w-100 mx-auto my-3'>
            {/* Show Spinner when Authentication is in progress */}
            {props.authSpinner ? (
              <div className='spinner-border text-light' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              'VALIDER'
            )}
          </button>
          {/* Show Default Authentication error message if auth fail */}
          {props.authError.name === 'defaultError' && (
            <div className='default-error-message'>
              {props.authError.message}
            </div>
          )}
        </Form>
      </Formik>
      <p className='small text-center px-1'>
        En clicquant sur le bouton Valider, Vous acceptez <br />
        nos termes &amp; conditions
      </p>
      <div className='formfooter mt-3'>
        {/* Sign In Link */}
        <a
          className=' ml-3 mr-2'
          href='#sign-carousel'
          role='button'
          data-slide='prev'
        >
          <img src={arrow2} className='mr-2' alt='arrow' />
          Se connecter
        </a>
        {/* Close Modal Button */}
        <button
          type='button'
          className='signup-close'
          onClick={() => props.showModalHandler(false)}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.authError,
    authSpinner: state.authSpinner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    singUpHandler: ({ userName, signupEmail, signupPassword }) =>
      dispatch(actions.singUpHandler(userName, signupEmail, signupPassword)),
    showModalHandler: (val) => dispatch(actions.showModalHandler(val)),
    setAuthError: (val) => dispatch(actions.setAuthError(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
