import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import './style.scss';

export function SongCard({ image, name, type, popularity, albumName, artist }) {

  const handleOnClick = (id) => {
    console.log('id')
  }

  return (<>
    <Card
      onClick={() => handleOnClick()}
      style={{ width: '18rem' }}
      className='mt-4 ml-2 cardContent pointer'>
      <Card.Img variant="top" src={image} className='albumImage' />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
      <Card.Body>
        <Badge variant="info" >{type}</Badge>
        <Badge variant="primary" >Popularity: {popularity} </Badge>
        <Card.Title className='mt-2'> {name} </Card.Title>
        <h6>Album Name: {albumName}</h6>
        <h6> Artists: </h6>
        {artist.length >= 1 && artist.map((artist, index) => {
          return (
            <p key={index}
            >{artist}</p>
          )
        })}
        <Card.Text>
        </Card.Text>
      </Card.Body>

    </Card>
  </>)
}