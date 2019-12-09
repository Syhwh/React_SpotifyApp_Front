import React from 'react';
import { Table } from 'react-bootstrap';
import './songsStyle.scss';

export function TopSongsComponent({ data }) {
  console.log('data to psongs')
  console.log(data)
  return (<>
    <h3 className='mt-2'>Top Songs: </h3>
    <Table responsive className='mt-2'>
      <thead>
        <tr>
          <th></th>
          <th>Album</th>
          <th>Song</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {data.tracks && data.tracks.length > 1 && data.tracks.map(({ id, album, name, uri }) => {
          return (

            <tr key={id}>
              <td><img src={album.images[0].url} className='img-thumb' /> </td>
              <td>{album.name}</td>
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