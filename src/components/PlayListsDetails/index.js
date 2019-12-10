import React from 'react';
import { connect } from 'react-redux';
import Loading from '../Navigation/LoadingComponent';
import PlaylistInfoComponent from './PlaylistInfo';
import PlaylistTracks from './PlaylistTracks';
import { Container, Row } from 'react-bootstrap';

function PlaylistDetails({ playlistInfo }) {

  if (!playlistInfo) return <Loading />
  return (<>
    <Container>
      <Row className='mt-4'>
        <PlaylistInfoComponent
         
        />
      </Row>
      <Row>
        <PlaylistTracks
          tracks={playlistInfo.tracks.items}
        />
      </Row>
    </Container>
  </>)
}

const mapStateToProps = ({ apiData }) => {
  return {
    playlistInfo: apiData.playlistInfo
  }
}



export default connect(mapStateToProps)(PlaylistDetails)