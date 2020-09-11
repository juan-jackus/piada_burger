import React, { useContext } from 'react';
import { PiadaContext } from '../../PiadaContext';
import { Formik, Form } from 'formik';
import FormikInput from '../Formik/FormikInput.jsx';
import * as Yup from 'yup';
import arrow2 from '../../Assets/arrows/signup-arrow.png';

const SignUpForm = ({ initialValues, onSubmit }) => {
  // Get showModalHandler From Piada Context
  const { showModalHandler } = useContext(PiadaContext);
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
  // const usernameRegex = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  const usernameRegex1 = /^.[a-zA-Z0-9_.]+$/; // allowed characters
  const usernameRegex2 = /^(?![_.])/; // no "_" or "." at the beginning
  const usernameRegex3 = /^(?!.*[_.]{2})/; // no "__" or "_." or "._" or ".." inside
  const usernameRegex4 = /(?<![_.])$/; // no "_" or "." at the end

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .max(8, 'La limite de caractéres (8) a été dépassèe')
      .matches(usernameRegex4, 'Pas de caractére "_" ou "." à la fin')
      .matches(usernameRegex3, 'Pas de caractére "_" ou "." consécutifs')
      .matches(usernameRegex2, 'Pas de caractére "_" ou "." au debut ')
      .matches(
        usernameRegex1,
        'Seul les caratéres Alphanumérique, "_" et "." sont autorisés'
      )
      .min(3, 'Nom trop court')
      .required('Veuillez renseignez ce champ '),
    email: Yup.string()
      .lowercase()
      .email('Addresse Email Invalide')
      .notOneOf(alreadyTakenEmail, 'Adresse Email non disponible')
      .required('Veuillez renseignez ce champ '),
    password: Yup.string()
      .max(50, 'Mot de passe trop long')
      .matches(numberRegex, 'Doit contenir au moins un chiffre')
      .matches(uppercaseRegex, 'Doit contenir au moins une lettre majuscule')
      .matches(lowercaseRegex, 'Doit contenir au moins une lettre minuscule')
      .min(5, 'Minimum 5 caractéres requis')
      .required('Veuillez renseignez ce champ '),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Mots de passe différents')
      .required('Veuillez renseignez ce champ '),
  });

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
        onSubmit={onSubmit}
        validateOnChange={false}
        // validateOnBlur={false}
      >
        <Form id='signup-form'>
          <FormikInput
            fontAwsome='fa fa-user'
            className='form-control text-capitalize'
            type='text'
            id='singupUser'
            name='userName'
            placeholder='Pseudonyme'
          />
          <FormikInput
            fontAwsome='fa fa-paper-plane'
            className='form-control'
            type='email'
            id='singnupEmail'
            name='email'
            placeholder='Email'
          />
          <FormikInput
            fontAwsome='fa fa-lock'
            className='form-control'
            type='password'
            id='signupPassword'
            name='password'
            placeholder='Mot de passe'
          />
          <FormikInput
            fontAwsome='fa fa-check'
            className='form-control'
            type='password'
            id='signupPassword2'
            name='confirmPassword'
            placeholder='Confirmer le Mot de passe'
          />
          {/* Validate Button */}
          <button type='submit' className='cancel-btn w-100 mx-auto my-3'>
            VALIDER
          </button>
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
          onClick={() => showModalHandler(false)}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
