import React from 'react';
import { Table } from 'react-bootstrap';
import noImage from '../../assets/images/noimage.png';
export default function PlaylistTracks({ tracks }) {
  return (<>
    <h3 className='mt-2'> Songs: </h3>
    <Table responsive hover className='mt-2'>
      <thead>
        <tr>
          <th></th>
          <th>Album</th>
          <th>Artist</th>
          <th>Song</th>
          <th>Player</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tracks && tracks.length > 1 && tracks.map(({ track }) => {
          return (
            <tr key={track.id}>
              <td>
                <img
                  src={track.album.images.length > 1 ? track.album.images[0].url : noImage}
                  className='img-thumb' /></td>
              <td>{track.album.name}</td>
              <td>{track.artists[0].name}</td>
              <td>{track.name}</td>
              <td>
                <iframe src={`https://open.spotify.com/embed?uri=${track.uri}`} width='300' height='80' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>
              </td>
              <td>
                <button className='btn btn-outline-danger' >Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </>
  )
}