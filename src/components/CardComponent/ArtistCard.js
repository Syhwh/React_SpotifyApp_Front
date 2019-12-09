import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getArtist } from '../../redux/actions/apiActions';
import { Card, Badge } from 'react-bootstrap';
import './style.scss';

function ArtistCard({ image, name, followers, popularity, type, id, getArtist }) {
  const history = useHistory();

  const handleOnClick = (id) => { 
    getArtist(id)
    history.push('/artist')
  }

  return (<>
    <Card
      onClick={() => handleOnClick(id)}
      style={{ width: '18rem' }}
      className='mt-4 ml-2 cardContent pointer'>
      <Card.Img variant="top" src={image} className='albumImage' />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
      <Card.Body>
        <Badge variant="info" >{type}</Badge>
        <Badge variant="primary" >Popularity: {popularity} </Badge>
        <Card.Title className='mt-2'> {name} </Card.Title>
        <h6>Followers: {followers}</h6>
        <Card.Text>
        </Card.Text>
      </Card.Body>

    </Card>
  </>)
}

const mapDispatchToProps = {
  getArtist
}

export default connect(null, mapDispatchToProps)(ArtistCard)