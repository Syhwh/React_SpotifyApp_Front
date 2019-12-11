import React from 'react';
import { useHistory } from 'react-router-dom';
import noImage from '../../assets/images/noimage.png';
export function AlbumInfo({ album }) {
  const history = useHistory();
  return (
    <> <div className='col-2'>
      <img src={
        album.images[0] ?
          album.images[0].url : noImage} className='img-thumbnail img-circle' alt='album' />
    </div>
      <div className='col'>
        <h3>
          {album.name}
        </h3>
        <p><strong>By</strong> {album.artists[0].name} </p>
        <p>
          <a href={album.external_urls.spotify} target='_blank' rel="noopener noreferrer" >
            go to the album page  </a>
        </p>
        <p className='text-muted'>{album.copyrights[0].text} </p>
      </div>
      <div className='col-4 text-right'>
        <button onClick={() => history.goBack()} className='btn btn-outline-danger' >
          Go back
    </button>
      </div>
    </>
  )
}