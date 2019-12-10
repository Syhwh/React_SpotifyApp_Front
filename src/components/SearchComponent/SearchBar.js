import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { search } from '../../redux/actions/apiActions';
import { Form, Field, ErrorMessage, Formik } from 'formik';

export function SearchBar({ search }) {
  const history = useHistory();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    search(values);
    resetForm();
    setSubmitting(false);
    history.push('/search')
  }
  return (
    <Formik
      initialValues={{
        search: ''
      }}
      onSubmit={handleSubmit}>
      {({ isSubmitting, values, setFieldValue }) => {
        return (<>
          <div className=''>
            <Form className='form-group'>
              <div className='row'>
                <div className=' col-xl-8 col-lg-8 col-sm-8'>
                  <div className='input-search '>
                    <Field
                      type='text'
                      name='search'
                      placeholder='Search Artist, Album, Track ...'
                      className='form-control'
                      autoComplete='off' />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </>)
      }}
    </Formik>
  )
}

const mapDispatchToProps = { search }

export default connect(null, mapDispatchToProps)(SearchBar)