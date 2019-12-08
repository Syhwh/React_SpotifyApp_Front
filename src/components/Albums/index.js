import React from 'react';
import { AlbumsComponent } from './AlbumsComponent';
import { Container, Row } from 'react-bootstrap';
import './albumsStyle.scss'
export function Albums() {
  return (<>
    <Row>
      <h3 className='mt-2 col-6' >Featured Albums:</h3>
    </Row>
    <div className='BannerSection mb-4'>
      <div className="cardDisplay  u-fancy-scrollbar mb-4">
        <AlbumsComponent />
      </div>
    </div>


  </>)
}