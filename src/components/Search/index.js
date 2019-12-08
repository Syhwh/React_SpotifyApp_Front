import React from 'react';
import { SearchBar } from './SearchBar';
import { Container, Row } from 'react-bootstrap';

export function Search() {
  return (

    <Row className='col-md-12 mt-4'>
      <SearchBar />
    </Row>

  )
}