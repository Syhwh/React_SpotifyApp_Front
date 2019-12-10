import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Field, Formik } from 'formik';
import { editUserPlaylisDetails } from '../../redux/actions/apiActions';
import { Modal, Button, Form as FormB } from 'react-bootstrap';
import noImage from '../../assets/images/noimage.png';


function PlaylistInfoComponent({ editUserPlaylisDetails, playlistInfo }) {
  console.log('playlistInfo')
  console.log(playlistInfo)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const { id, name, description, followers, images, owner, external_urls, tracks } = playlistInfo
  return (
    <> <div className='col-2 align-items-center'>
      <img src={
        images.length >= 1 ?
          images[0].url : noImage} className='img-thumbnail img-circle' />
      <Button variant='outline-primary' className='mt-2 ml-2' onClick={handleShow}>
        Edit
      </Button>
    </div>
      <div className='col'>
        <h3>
          {name}
        </h3>
        {description ?
          <h6> {description}</h6> : <h6>  No description</h6>}
        <p><strong>Owner:</strong> {owner.display_name} </p>
        <p><strong>Followers:</strong> {followers.total} </p>
        <p><strong>Number of tracks:</strong> {tracks.total} </p>
        <p>
          <a href={external_urls.spotify} target='_blank'>
            go to the original page  </a>
        </p>

      </div>
      <div className='col-4 text-right'>
        <button onClick={() => history.goBack()} className='btn btn-outline-danger' >
          Go back
    </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              id,
              name: "",
              description: ""
            }}
            onSubmit={(values) => {
              editUserPlaylisDetails(values)
              setShow(false)
            }}
          >
            {({ isSubmitting }) => {
              return (<Form >
                <FormB.Label>Playlist Name</FormB.Label>
                <Field
                  type="text"
                  name='name'
                  placeholder={name}
                  className='form-control' />

                <FormB.Label>Playlist Description</FormB.Label>
                <Field
                  type="text"
                  name='description'
                  placeholder={description ?
                     description  : 'Description'}
                  className='form-control' />
                {/* <ErrorMessage name='userPassword' >
                      {msg => <div className=' alert alert-danger mt-1' role='alert'>{msg}</div>}
                    </ErrorMessage> */}
                <div className='mt-2 justify-content-between'>

                  <Button variant='secondary' onClick={handleClose}>Close</Button>
                  <Button type='submit' variant='primary ' >Save Changes</Button>
                </div>
              </Form>);
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  )
}

const mapStateToProps = ({ apiData }) => {
  return {
    playlistInfo: apiData.playlistInfo
  }
}
const mapDispatchToProps = {
  editUserPlaylisDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistInfoComponent)