import React, { useRef } from 'react';
import { Field, ErrorMessage } from 'formik';
import InputErrorMessage from './InputErrorMessage.jsx';

function FormikInput({ fontAwsome, ...props }) {
  // Get a reference to The password input element
  const passwordInput = useRef(null);

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

      <ErrorMessage name={props.name} component={InputErrorMessage} />
    </div>
  );
}

export default FormikInput;
