import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { Form as FormB, Alert } from 'react-bootstrap';
import ApiBacked from '../../utils/ApiBackend';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape({
  typeAccount: Yup.string().required('You must select an Account Type'),
  userEmail: Yup.string()
    .email('Invalid email')
    .required('A valid email is required'),
  userPassword: Yup.string().required('Password is required'),
});

function UserLoginForm({ error, loginUser }) {
  return (
    <>
      <Formik
        data-test='formComponent'
        initialValues={{
          userEmail: '',
          userPassword: ''
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          ApiBacked.get('/login');
        }}
      >
        {({ isSubmitting, values }) => {
          return (
            <div className='container'>
              <div className='row'>
                <div className='mt-4 offset-3 col-md-6'>
                  <h2>User Login</h2>
                  <Form >
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <FormB.Group controlId='formBasicEmail'>
                      <FormB.Label>Email</FormB.Label>
                      <Field
                        data-test='inputEmailComponent'
                        type='email'
                        name='userEmail'
                        placeholder='Email'
                        className='form-control'
                        value={values.userEmail}
                      />
                      <ErrorMessage name='userEmail' >
                        {msg =>
                          <div
                            className=' alert alert-danger mt-1'
                            role='alert'>{msg}
                          </div>}
                      </ErrorMessage>
                    </FormB.Group>
                    <div className='form-group'>
                      <label htmlFor='password'>Password</label>
                      <Field
                        type='password'
                        name='userPassword'
                        placeholder='Write your password'
                        autoComplete='on'
                        className='form-control'
                      />
                      <ErrorMessage name='userPassword' >
                        {msg =>
                          <div
                            className=' alert alert-danger mt-1'
                            role='alert'>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className='form-group mb-4'>
                      <button className='btn btn-primary' type='submit' disabled={isSubmitting}> Login </button>
                    </div>
                  </Form>
                  <div
                    className='mt-4'>
                    Login with your spotify account
                    <a
                      href='/'
                      onClick={() => window.location = process.env.REACT_APP_BACKEND_API_URL_REDIRECT || 'http://localhost:3001/login'}
                    >Login</a>
                  </div>
                  <div
                    className='mt-4'>
                    Doesn't have an account?
                    <a href='/signUp'>SignUp</a> </div>
                </div>
              </div>
            </div>
            //  
          );
        }}
      </Formik>
    </>
  );
}

export default UserLoginForm