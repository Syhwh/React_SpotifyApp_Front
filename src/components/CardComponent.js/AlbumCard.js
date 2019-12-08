import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export function AlbumCard({ image, artist, title, type, date }) {
  return (<>
    <Card style={{ width: '18rem' }} className='mt-4 ml-2'>
      <Card.Img variant="top" src={image} className='albumImage' />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
      <Card.Body>
        <Badge variant="info" >{type}</Badge>
        <Badge variant="primary" >{date}</Badge>
        <Card.Title className='mt-2'> {title} </Card.Title>
        <h6>Artist: {artist}</h6>
        <Card.Text>

          {/* <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="dark">Dark</Badge> */}
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer>
        <small className="text-muted">Release Date: {date}</small>
      </Card.Footer> */}
    </Card>
  </>)
}