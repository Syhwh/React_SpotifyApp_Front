import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions/userActions';
import { signUpAgency } from '../../redux/actions/agencyActions';
import { Form as FormB, Alert } from 'react-bootstrap';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import { Checkbox } from 'semantic-ui-react';
import './style.css';
const CheckboxExampleToggle = () => <Checkbox toggle />

const loginSchema = Yup.object().shape({
  typeAccount: Yup.string().required('You must select an Account Type'),
  userEmail: Yup.string()
    .email('Invalid email')
    .required('A Valid Emais is Required'),
  userPassword: Yup.string()
    .min(4, 'Password Must be at least 4 characters long')
    .required('Password is required'),
  userPasswordConfirm: Yup.string()
    .oneOf([Yup.ref('userPassword'), null], "Passwords must match")
    .required('Password confirm is required'),
  termsAndConditions: Yup.boolean()
    .oneOf([true], 'Must Accept Terms and Conditions'),
});

function SignUpForm({ error, signUpUser, signUpAgency }) {
  const history = useHistory();
  return (<>
    <Formik
      initialValues={{
        typeAccount: '',
        userEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
        termsAndConditions: false
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        values.typeAccount === 'angency' ? signUpAgency(values) : signUpUser(values);
        resetForm();
        setSubmitting(false);
        history.push('/login');
      }}
    >
      {({ isSubmitting }) => {
        return (
          <>
            <div className='container'>
              <div className='row'>
                <div className=' mt-4 offset-3 col-md-6'>
                  <h2>User Register</h2>
                  <Form >
                    <div className=' form-group'>
                      <label htmlFor='userEmail' >Email</label>
                      <Field type="email" name='userEmail' placeholder='Email' className='form-control' />
                      <ErrorMessage className=' has-danger' name='userEmail' />
                      <FormB.Text className="text-muted">
                        <p>
                          We'll never share your email with anyone else.
                 </p>
                      </FormB.Text>
                    </div>
                    <div className=' form-group'>
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="userPassword"
                        placeholder='Write your password'
                        className='form-control'
                      />
                      <ErrorMessage className='errorMessage' name='userPassword' />
                    </div>
                    <div>
                      <label htmlFor="userPasswordConfirm">Confirm Password</label>
                      <Field
                        type='password'
                        name='userPasswordConfirm'
                        placeholder='Repeat your password'
                        className='form-control' />
                      <ErrorMessage className='errorMessage' name='userPasswordConfirm' />
                    </div>
                    <div className=' form-group mt-4'>
                      <Field
                        className='ui fitted toggle checkbox' type='checkbox' name='termsAndConditions' />
                      <label htmlFor='termsAndConditions'> I accept the terms and conditions</label>
                      <div> <ErrorMessage className='errorMessage' name='termsAndConditions' /></div>
                    </div>
                    <div className='form-group mb-4'>
                      <button className='btn btn-primary' type='submit' disabled={isSubmitting}> Login </button>
                    </div>
                    <div>Already have an account? <Link to='/login'>Login</Link> </div>
                  </Form>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik >

  </>
  );
}
const mapStateToProps = (store) => {
  return {
    error: store.user.error
  }
}
const mapDispatchToProps = { signUpUser, signUpAgency }

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)