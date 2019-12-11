import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../Navigation/LoadingComponent';
import { getNewReleases } from '../../redux/actions/apiActions';
import { AlbumsComponent } from './AlbumsComponent';
import { Row } from 'react-bootstrap';
import './albumsStyle.scss';

function Albums({ getNewReleases, newReleases }) {
  useEffect(() => {
    getNewReleases()
  }, []);

  if (!newReleases) return <Loading />
  return (<>
    <Row>
      <h3 className='mt-4 col-6 offset-2 ' >Featured Albums:</h3>
    </Row>
    <div className='BannerSection mb-4'>
      <div className="cardDisplay  u-fancy-scrollbar mb-4">
        <AlbumsComponent
          data={newReleases} />
      </div>
    </div>
  </>)
}

const mapStateToProps = ({ apiData }) => {
  return {
    newReleases: apiData.newReleases
  }
}
const mapDispatchToProps = {
  getNewReleases
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)