import React from 'react';
import ArtistCard from '../CardComponent/ArtistCard';
import './artistStyle.scss'
import noImage from '../../assets/images/noimage.png'
export function ArtistsComponent({ data }) {
  return (<>
    {data && data.length > 1 && data.map(({ id, name, type, followers, popularity, images }) => {
      return <ArtistCard
        key={id}
        id={id}
        name={name}
        type={type}
        followers={followers.total}
        popularity={popularity}
        image={images.length > 1 ?
          images[0].url :
          noImage}
      />
    })}

  </>)
}