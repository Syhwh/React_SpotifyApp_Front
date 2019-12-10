import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../Navigation/LoadingComponent';
import  PlaylistsPage from './PlaylistsPage';
import { getUserPlaylists } from '../../redux/actions/apiActions';
import { Container, Row } from 'react-bootstrap';

function UserPlaylists({ playlists, getUserPlaylists }) {

  useEffect(() => {
    getUserPlaylists()
  }, []);

  if (!playlists) return <Loading />
  return (<>
    <Container>
      <h3 className='mb-3'>My Playlists           </h3>
      <PlaylistsPage
        playlist={playlists.items} />
    </Container>
  </>)
}

const mapStateToProps = ({ apiData }) => {
  return {
    playlists: apiData.playlists
  }
}

const mapDispatchToProps = {
  getUserPlaylists
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists)