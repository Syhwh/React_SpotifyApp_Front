import React, { useEffect, useState } from 'react';
import Loading from '../Navigation/LoadingComponent';
import ApiSpotify from '../../utils/ApiSpotify';
import { AlbumCard } from '../CardComponent.js/AlbumCard';

import './style.scss'
export function AlbumsComponent() {
  const [data, setData] = useState(false);
  useEffect(() => {
    const appToken = localStorage.getItem('appTkn');
    ApiSpotify.get(`/browse/new-releases?limit=20`, {
      headers: {
        Authorization: `Bearer ${appToken}`
      }
    })
      .then(({ data }) => {
        console.log(data)
        setData(data.albums.items)
      })
  }, []);

  if (!data) return <Loading />
  return (<>

    {data && data.length > 1 && data.map(({ id, name, album_type, release_date, artists, images }) => {
      return <AlbumCard
        key={id}
        title={name}
        date={release_date}
        artist={artists[0].name}
        type={album_type}
        image={images[0].url}
      />
    })}

  </>)
}