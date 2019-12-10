import React from 'react';
import { connect } from 'react-redux';
import Loading from '../Navigation/LoadingComponent';
import { AlbumInfo } from './AlbumInfo';
import { AlbumTracks } from './AlbumTracks';
import { Container, Row } from 'react-bootstrap';

function AlbumDetails({ albumInfo }) {
  if (!albumInfo) return <Loading />
  return (<>
    <Container>

      <Row className='mt-4'>
        <AlbumInfo
          album={albumInfo} />
      </Row>
      <Row>
        <AlbumTracks
          tracks={albumInfo.tracks.items}
        />
      </Row>
    </Container>
  </>)
}

const mapStateToProps = ({ apiData }) => {
  return {
    albumInfo: apiData.albumInfo
  }
}



export default connect(mapStateToProps)(AlbumDetails)