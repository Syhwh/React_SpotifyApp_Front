import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTopTracks } from '../../redux/actions/apiActions';
import { Row, Container } from 'react-bootstrap';
import Loading from '../Navigation/LoadingComponent';
import { TopSongsComponent } from '../Songs/TopSongsComponent';
import noImage from '../../assets/images/noimage.png';
import './artistStyle.scss'

function ArtistInfo({ artist, getTopTracks, tracks }) {
  const history = useHistory();
  useEffect(() => {
    if (artist.id) {
      getTopTracks(artist.id)
    }
  }, [artist.id]);

  if (!artist) return <Loading />
  return (
    <>
      <Container>
        <h1>Artist Details </h1>
        <Row>
          <div className='col-2'>
            <img src={
              artist.images[0] ?
                artist.images[0].url : noImage} className='img-thumbnail img-circle' />
          </div>
          <div className='col'>
            <h3>
              {artist.name}
            </h3>
            <p>
              <a href={artist.external_urls.spotify} target='_blank'>
                go to the artist page
            </a>
            </p>
          </div>
          <div className='col-4 text-right'>
            <button onClick={() => history.goBack()} className='btn btn-outline-danger' >
              Go back
    </button>
          </div>
        </Row>
        <Row>
          {tracks ? <TopSongsComponent
            data={tracks} /> :
            <Loading />}
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = ({ apiData }) => {
  return {
    artist: apiData.artist,
    tracks: apiData.tracks
  }
}
const mapDispatchToProps = {
  getTopTracks
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo)