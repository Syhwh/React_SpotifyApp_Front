import React from 'react';
import { AlbumCard } from '../CardComponent/AlbumCard';
import noImage from '../../assets/images/noimage.png';

export function AlbumsComponent({ data }) {
  return (<>
    {data && data.length > 1 && data.map(({ id, name, album_type, release_date, artists, images }) => {
      return <AlbumCard
        key={id}
        title={name}
        date={release_date}
        artist={artists[0].name}
        type={album_type}
        image={images.length > 1 ?
          images[0].url :
          noImage}
      />
    })}

  </>)
}