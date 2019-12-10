import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import { AuthContext } from '../../utils/AuthContext';
import { deleteUserAlbum } from '../../redux/actions/apiActions';
import { getAlbumInfo } from '../../redux/actions/apiActions';

import './style.scss';

function UserAlbumCard({ image, artist, title, type, date, id, deleteUserAlbum, getAlbumInfo }) {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleOnClickDetails = (id) => {
    getAlbumInfo(id)
    history.push('/album')
  }


  const handleOnClickDelete = (albumId) => {
    deleteUserAlbum(albumId);
  }

  return (<>
    <Card style={{ width: '18rem' }} className='mt-4 ml-2 cardContent  '>
      <Card.Img
        variant="top"
        src={image}
        className='albumImage pointer'
        onClick={() => handleOnClickDetails(id)} />

      <Card.Body>
        <Badge variant='info' >{type}</Badge>
        <Badge variant='primary' >{date}</Badge>
        <Card.Title className='mt-2'> {title} </Card.Title>
        <h6>Artist: {artist}</h6>
        {user && <>
          <Button variant='danger' onClick={() => handleOnClickDelete(id)} >Delete from Favorites</Button>
        </>}
      </Card.Body>
    </Card>
  </>)
}

const mapDispatchToProps = {
  deleteUserAlbum, getAlbumInfo
}

export default connect(null, mapDispatchToProps)(UserAlbumCard)