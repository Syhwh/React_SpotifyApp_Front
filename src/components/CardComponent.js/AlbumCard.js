import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import './style.scss';

export function AlbumCard({ image, artist, title, type, date }) {
  return (<>
    <Card style={{ width: '18rem' }} className='mt-4 ml-2 cardContent'>
      <Card.Img variant="top" src={image} className='albumImage' />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
      <Card.Body>
        <Badge variant="info" >{type}</Badge>
        <Badge variant="primary" >{date}</Badge>
        <Card.Title className='mt-2'> {title} </Card.Title>
        <h6>Artist: {artist}</h6>
        <Card.Text>
        </Card.Text>
      </Card.Body>

    </Card>
  </>)
}