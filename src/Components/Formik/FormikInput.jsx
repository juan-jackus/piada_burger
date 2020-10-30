import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../ReduxStore/actions';
import { Field, ErrorMessage } from 'formik';
import InputErrorMessage from './InputErrorMessage.jsx';

function FormikInput({ fontAwsome, authError, setAuthError, ...props }) {
  // Get a reference to The password input element
  const passwordInput = useRef(null);
  // Time out to show auth error message
  useEffect(() => {
    if (authError.name === props.name) {
      setTimeout(() => {
        setAuthError({});
      }, 3000);
    }
  });

  // Function hide the password
  const hidePassword = (e) => {
    e.currentTarget.classList.replace('fa-eye-slash', 'fa-eye');
    passwordInput.current.setAttribute('type', 'password');
  };

  // Function to show the password
  const ShowPassword = (e) => {
    e.currentTarget.classList.replace('fa-eye', 'fa-eye-slash');
    passwordInput.current.setAttribute('type', 'text');
  };

  return (
    <div className='form-group'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'>
            <i className={fontAwsome}></i>
          </div>
        </div>
        {/* Custom Field for password input */}
        {props.type === 'password' ? (
          <Field name={props.name}>
            {({ field }) => (
              <>
                <input {...field} {...props} ref={passwordInput} />
                <span
                  className='fa fa-fw fa-eye field-icon'
                  title='Cliquer et maintenir pour afficher le mot de passe'
                  onMouseDown={(e) => ShowPassword(e)}
                  onPointerDown={(e) => ShowPassword(e)} // For Mobile TouchScreen
                  onMouseUp={(e) => hidePassword(e)}
                  onPointerUp={(e) => hidePassword(e)} // For Mobile TouchScreen
                ></span>
              </>
            )}
          </Field>
        ) : (
          <Field {...props} />
        )}
      </div>
      {/* Show input error message on Blur */}
      <ErrorMessage name={props.name} component={InputErrorMessage} />
      {/* Show Authentication error message if auth fail on Submit */}
      {authError.name === props.name && (
        <InputErrorMessage>{authError.message}</InputErrorMessage>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthError: (val) => dispatch(actions.setAuthError(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikInput);
