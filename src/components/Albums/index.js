import React from 'react';
import { AlbumsComponent } from './AlbumsComponent';
import { Container, Row } from 'react-bootstrap';

export function Albums() {
  return (<Container>
    <Row>
      <h3 className='mt-2 col-6' >Featured Albums:</h3>
    </Row>
    <Row className='offset-1'>
      <AlbumsComponent className='mt-3' />
    </Row>
  </Container>
  )
}