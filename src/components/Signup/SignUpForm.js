import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions/userActions';
import { Form as FormB } from 'react-bootstrap';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import './signupStyle.scss';

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

function SignUpForm({ error, signUpUser }) {
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
        signUpUser(values);
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
                      <ErrorMessage name='userEmail' >
                        {msg => <div className=' alert alert-danger mt-1' role='alert'>{msg}</div>}
                      </ErrorMessage>
                      <FormB.Text className="text-muted">
                        <p>   We'll never share your email with anyone else.  </p>
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
                        <ErrorMessage name='userPassword' >
                        {msg => <div className=' alert alert-danger mt-1' role='alert'>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label htmlFor="userPasswordConfirm">Confirm Password</label>
                      <Field
                        type='password'
                        name='userPasswordConfirm'
                        placeholder='Repeat your password'
                        className='form-control' />
                      <ErrorMessage name='userPasswordConfirm' >
                        {msg => <div className=' alert alert-danger mt-1' role='alert'>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className=' form-group mt-4'>
                      <Field
                        className='ui fitted toggle checkbox mr-2' type='checkbox' name='termsAndConditions' />
                      <label htmlFor='termsAndConditions'> I accept the terms and conditions</label>
                      <ErrorMessage name='termsAndConditions' >
                        {msg => <div className=' alert alert-danger mt-1' role='alert'>{msg}</div>}
                      </ErrorMessage>
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
const mapDispatchToProps = { signUpUser }

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)