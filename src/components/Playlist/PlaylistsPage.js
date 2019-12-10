import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { getPlaylisDetails } from '../../redux/actions/apiActions';
import noImage from '../../assets/images/noimage.png';


function PlaylistsPage({ playlist, getPlaylisDetails }) {
  const history = useHistory();
  const handleOnClickDetails = (id) => {
    getPlaylisDetails(id);
    history.push('/playlist')
  }
  return (<>
    {playlist && playlist.length > 1 && playlist.map(({ id, name, images, owner, tracks, external_urls }) => {
      return (
        <Row key={id} className='mt-2'>
          <div className='col-2'>
            <img src={
              images[0] ?
                images[0].url : noImage} className='img-thumbnail img-circle' />
          </div>
          <div className='col-6'>
            <h4>{name}</h4>
            <p> <strong>Owner:</strong> {owner.display_name}  </p>
            <p> <strong>Number of tracks:</strong> {tracks.total}  </p>
            <p><a href={external_urls.spotify} target='_blank'>
              go to the playlist page</a>
            </p>
          </div>
          <div className='col-4 text-right'>
            <button
              onClick={() => handleOnClickDetails(id)}
              className='btn btn-outline-success' >
              Details </button>
          </div>
        </Row>
      )
    })}
  </>)
}

const mapDispatchToProps = {
  getPlaylisDetails
}
export default connect(null, mapDispatchToProps)(PlaylistsPage)