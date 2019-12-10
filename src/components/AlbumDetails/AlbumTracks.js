import React from 'react';
import { Table } from 'react-bootstrap';

export function AlbumTracks({ tracks }) {
  return (<>
    <h3 className='mt-2'> Songs: </h3>
    <Table responsive  hover className='mt-2'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {tracks && tracks.length > 1 && tracks.map(({ id, track_number, name, uri }) => {
          return (
            <tr key={id}>
              <td> {track_number} </td>
              <td>{name}</td>
              <td>
                <iframe src={`https://open.spotify.com/embed?uri=${uri}`} width='300' height='80' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </>
  )
}