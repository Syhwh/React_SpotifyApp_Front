import React, { useEffect, useState } from 'react';
import Loading from '../Navigation/LoadingComponent';
import ApiSpotify from '../../utils/ApiSpotify';
import { AlbumsComponent } from './AlbumsComponent';
import { Row } from 'react-bootstrap';
import './albumsStyle.scss'
export function Albums() {
  const [data, setData] = useState(false);
  useEffect(() => {
    const appToken = localStorage.getItem('appTkn');
    ApiSpotify.get(`/browse/new-releases?limit=20`, {
      headers: {
        Authorization: `Bearer ${appToken}`
      }
    })
      .then(({ data }) => {    
        setData(data.albums.items)
      })
  }, []);

  if (!data) return <Loading />
  return (<>
    <Row>
      <h3 className='mt-2 col-6' >Featured Albums:</h3>
    </Row>
    <div className='BannerSection mb-4'>
      <div className="cardDisplay  u-fancy-scrollbar mb-4">
        <AlbumsComponent
          data={data} />
      </div>
    </div>


  </>)
}