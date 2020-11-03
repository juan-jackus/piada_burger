import React, { useContext } from 'react';
import { PiadaContext } from '../../PiadaContext';
import { Formik, Form } from 'formik';
import FormikInput from '../Formik/FormikInput.jsx';
import * as Yup from 'yup';
import arrow2 from '../../Assets/arrows/signup-arrow.png';

const SignUpForm = () => {
  // Get showModalHandler From Piada Context
  const { signUpHandler, showModalHandler } = useContext(PiadaContext);

  // Sign Up Form Initial Values
  const initialSignUpValues = {
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
  // const usernameRegex = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  const usernameRegex1 = /^.[a-zA-Z0-9_.]+$/; // allowed characters
  const usernameRegex2 = /^(?![_.])/; // no "_" or "." at the beginning
  const usernameRegex3 = /^(?!.*[_.]{2})/; // no "__" or "_." or "._" or ".." inside
  const usernameRegex4 = /(?<![_.])$/; // no "_" or "." at the end

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .max(8, 'The limit of (8) Characters has been exceeded')
      .matches(usernameRegex4, 'No "_" or "." characters at the end')
      .matches(usernameRegex3, 'No consecutive "_" or "." characters')
      .matches(
        usernameRegex2,
        'No "_" or "." character at the beginning of the text'
      )
      .matches(usernameRegex1, 'Only Alphanumeric, "_" and "." are allowed')
      .min(3, 'Name too short')
      .required('Please fill in this field'),
    signupEmail: Yup.string()
      .lowercase()
      .email('Invalid Email Address')
      .notOneOf(alreadyTakenEmail, 'Email address not available')
      .required('Please fill in this field'),
    signupPassword: Yup.string()
      .max(50, 'Password too long')
      .matches(numberRegex, 'Must contain at least one digit')
      .matches(uppercaseRegex, 'Must contain at least one uppercase letter')
      .matches(lowercaseRegex, 'Must contain at least one lowercase letter')
      .min(5, 'Minimum 5 characters required')
      .required('Please fill in this field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('signupPassword')], "Password doesn't match")
      .required('Please fill in this field'),
  });

  return (
    <div id='singUpFom' className='carousel-item '>
      <h2 className='text-center text-white px-1 mt-3'>Create an Account</h2>
      <p className='text-center px-1'>
        Fill out this form to create an account
      </p>
      <hr />
      <Formik
        initialValues={initialSignUpValues}
        validationSchema={validationSchema}
        onSubmit={signUpHandler}
        validateOnChange={false}
        // validateOnBlur={false}
      >
        <Form id='signup-form'>
          <FormikInput
            name='userName'
            type='text'
            id='singupUser'
            className='form-control text-capitalize'
            fontAwsome='fa fa-user'
            placeholder='Username'
          />
          <FormikInput
            name='signupEmail'
            type='email'
            id='singnupEmail'
            className='form-control'
            fontAwsome='fa fa-paper-plane'
            placeholder='Email'
          />
          <FormikInput
            name='signupPassword'
            type='password'
            id='signupPassword'
            className='form-control'
            fontAwsome='fa fa-lock'
            placeholder='Password'
          />
          <FormikInput
            name='confirmPassword'
            type='password'
            id='signupPassword2'
            className='form-control'
            fontAwsome='fa fa-check'
            placeholder='Confirm Password'
          />
          {/* Validate Button */}
          <button type='submit' className='cancel-btn w-100 mx-auto my-3'>
            SIGN UP
          </button>
        </Form>
      </Formik>
      <p className='small text-center px-1'>
        By clicking Sing Up, you agree <br />
        to our Termes &amp; conditions
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
          Sign In
        </a>
        {/* Close Modal Button */}
        <button
          type='button'
          className='signup-close'
          onClick={() => showModalHandler(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
