import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormikInput from '../Formik/FormikInput.jsx';
import InputErrorMessage from '../Formik/InputErrorMessage.jsx';
import * as Yup from 'yup';

const FormValidation = ({
  initialValues,
  phoneNumberHandler,
  ValidateOder,
}) => {
  // Regex for Yup Validation Schema
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  // const phoneNumberRegex = /^(77|70|33|76|78) [0-9]{3} [0-9]{2} [0-9]{2}/;

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    userContacts: Yup.object().shape({
      userName: Yup.string()
        .max(50, 'The limit of (50) Characters has been exceeded')
        .matches(nameRegex, 'Invalid name')
        .min(5, 'Name too short')
        .required('Please fill in this field'),
      address: Yup.string()
        .max(50, 'La limite de caractéres (50) a été dépassèe')
        .min(5, 'Adresse trop court')
        .required('Please fill in this field'),
      phoneNumber: Yup.string()
        // .matches(phoneNumberRegex, 'Invalid Phone Number')
        .required('Please fill in this field'),
    }),
    deleveryMethod: Yup.string().required('Please fill in this field'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={ValidateOder}
      validateOnChange={false}
      // validateOnBlur={false}
    >
      <Form id='validation-form' className='mb-5 mt-3 card p-3'>
        <h3 className=' text-center text-white mt-3'>Fill out this Form</h3>
        <hr />
        <div className='px-3'>
          {/* User Name Input */}
          <FormikInput
            name='userContacts.userName'
            type='text'
            className='form-control text-capitalize'
            fontAwsome='fa fa-user'
            placeholder='Name'
          />
          {/* User Address Input */}
          <FormikInput
            name='userContacts.address'
            type='text'
            className='form-control text-capitalize'
            fontAwsome='fa fa-home'
            placeholder='Address'
            autoFocus
          />
          {/* Use Field for Custom Handle Change to format Phone Number */}
          <Field name='userContacts.phoneNumber'>
            {({ field, form }) => {
              return (
                <div className='form-group'>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text'>
                        <i className='fa fa-phone'></i>
                      </div>
                    </div>
                    <input
                      type='tel'
                      className='form-control'
                      placeholder='Phone number'
                      {...field}
                      onChange={(e) => {
                        form.setFieldValue(
                          'userContacts.phoneNumber',
                          // Custom Handle Change
                          phoneNumberHandler(e.target.value)
                        );
                      }}
                    />
                  </div>
                  <ErrorMessage
                    name='userContacts.phoneNumber'
                    component={InputErrorMessage}
                  />
                </div>
              );
            }}
          </Field>
          {/* Select Delevery Method */}
          <div className='form-group d-flex flex-column'>
            <p className='mt-3 mb-2'>Delivery deadline</p>
            <Field as='select' className='custom-select' name='deleveryMethod'>
              <option value='' disabled>
                Select the delivery deadline...
              </option>
              <option value='express'>Less than 1 hour</option>
              <option value='fast'>Less than 3 hours</option>
              <option value='normal'>Less than 7 hours</option>
            </Field>
            <ErrorMessage name='deleveryMethod' component={InputErrorMessage} />
            {/* Validate Order Button */}
            <button className=' mx-auto mt-4 btnStyle w-100 ' type='submit'>
              VALIDATE YOUR ORDER
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormValidation;
