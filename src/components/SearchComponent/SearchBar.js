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
    <>
      <Formik
        initialValues={{
          search: ''
        }}
        onSubmit={handleSubmit}>
        {({ isSubmitting, values, setFieldValue }) => {
          return (<>
            <div className="">
              <Form className="hero__form v2 filter listing-filter bg-cb">
                <div className="row">
                  <div className=" col-xl-5 col-lg-6 col-sm-12">
                    <div className="input-search ">
                      <Field
                        type="text"
                        name="search"
                        placeholder="Search Artist, Album, Track ..."
                        className="ui-autocomplete-input"
                        autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-12 pl-0">
                    <div className="submit_btn">
                      <button className="btn btn-primary" type="submit" disabled={isSubmitting} >Search</button>

                    </div>

                  </div>
                </div>
              </Form>
            </div>
          </>)
        }}
      </Formik>
    </>
  )
}

const mapDispatchToProps = { search }

export default connect(null, mapDispatchToProps)(SearchBar)