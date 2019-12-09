import React from 'react';
import { SongCard } from '../CardComponent/SongCard';
import noImage from '../../assets/images/noimage.png';
import './songsStyle.scss'

export function SongsComponent({ data }) {
  return (<>
    {data && data.length > 1 && data.map(({
      id,
      name,
      type,
      popularity,
      album,
    }) => {
      return <SongCard
        key={id}
        name={name}
        type={type}
        popularity={popularity}
        albumName={album.name}
        image={album.images.length > 1 ?
          album.images[0].url :
          noImage}
        artist={album.artists.map(({ name }) => name)}
      />
    })}

  </>)
}