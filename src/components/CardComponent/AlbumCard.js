import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAlbumInfo } from '../../redux/actions/apiActions';
import { Card, Badge, Button } from 'react-bootstrap';
import { AuthContext } from '../../utils/AuthContext';
import ApiSpotify from '../../utils/ApiSpotify';
import './style.scss';

function AlbumCard({ image, artist, title, type, date, id, getAlbumInfo }) {
  const [message, setMessage] = useState(false)
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleOnClickDetails = (id) => {
    getAlbumInfo(id)
    history.push('/album')
  }


  const handleOnClickSave = (albumId) => {
    const userToken = localStorage.getItem('userToken')
    ApiSpotify.put(`/me/albums/`, null, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      params: {
        ids: albumId,
      }
    })
      .then(() => {
        setMessage('Album Saved')
        setTimeout(() => {
          setMessage(false)
        }, 1000);
      })
      .catch(({ data }) => {
        console.log(data)
      })
  }

  return (<>
    <Card style={{ width: '18rem' }} className='mt-4 ml-2 cardContent  '>
      <Card.Header>
        {message && <><div class="alert alert-success">
          <strong>Success!</strong> {message}.
</div></>}
      </Card.Header>
      <Card.Img
        variant="top"
        src={image}
        className='albumImage pointer'
        onClick={() => handleOnClickDetails(id)} />
      <Card.Body>
        <Badge variant="info" >{type}</Badge>
        <Badge variant="primary" >{date}</Badge>
        <Card.Title className='mt-2'> {title} </Card.Title>
        <h6>Artist: {artist}</h6>
        {user && <>
          <Button onClick={() => handleOnClickSave(id)} >Add to Favorites</Button>
        </>}
      </Card.Body>
    </Card>
  </>)
}


const mapDispatchToProps = {
  getAlbumInfo
}

export default connect(null, mapDispatchToProps)(AlbumCard)