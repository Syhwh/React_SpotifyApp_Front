import React from 'react';
import { SearchBar } from './SearchBar';
import { Container, Row } from 'react-bootstrap';

export function Search() {
  return (
    <Container>
      <Row className='col-md-8 mt-4'>
        <SearchBar />
      </Row>
    </Container>
  )
}