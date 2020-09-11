import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputErrorMessage from './InputErrorMessage.jsx';

function FormikInput({ fontAwsome, ...props }) {
  return (
    <div className='form-group'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'>
            <i className={fontAwsome}></i>
          </div>
        </div>
        <Field {...props} />
      </div>

      <ErrorMessage name={props.name} component={InputErrorMessage} />
    </div>
  );
}

export default FormikInput;
