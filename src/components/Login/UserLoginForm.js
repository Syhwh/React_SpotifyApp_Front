import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
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


function UserLoginForm({ error, loginUser, loginAgency }) {
  const { authLoginUser } = useContext(AuthContext);
  const history = useHistory();

  const redirectToHome = (id) => {
    authLoginUser(id);
    history.push('/');
  }

  return (<>
    <Formik
      initialValues={{
        userEmail: "",
        userPassword: ""
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values)
        ApiBacked.get('/login')
        // loginUser(values, redirectToHome);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <div className='container'>
            <div className='row'>
              <div className='mt-4 offset-3 col-md-6'>
                <h2>User Login</h2>
                <Form >
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <FormB.Group controlId="formBasicEmail">
                    <FormB.Label>Email address</FormB.Label>
                    <Field type="email" name='userEmail' placeholder='Email' className='form-control' />
                    <ErrorMessage name='userEmail' />
                  </FormB.Group>

                  <div className='form-group'>
                    <label htmlFor="passowrd">Confirm Password</label>
                    <Field
                      type="password"
                      name="userPassword"
                      placeholder='Write your password'
                      autoComplete="on"
                      className='form-control'
                    />
                    <ErrorMessage name='userPassword' />
                  </div>
                  <div className='form-group mb-4'>

                    <button className='btn btn-primary' type='submit' disabled={isSubmitting}> Login </button>
                  </div>
                </Form>
                <div className='mt-4'>Login with your spotify account <Link to='/' onClick={() => window.location = 'http://localhost:3001/login'}  >Login</Link> </div>
                <div className='mt-4'>Doesn't have an account? <Link to='/signUp'>SignUp</Link> </div>
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
// const mapStateToProps = (store) => {
//   return {
//     error: store.user.error || store.agency.error
//   }
// }
// const mapDispatchToProps = { loginUser, loginAgency }

// export default connect(mapStateToProps, mapDispatchToProps)(UserLoginForm)
export default UserLoginForm