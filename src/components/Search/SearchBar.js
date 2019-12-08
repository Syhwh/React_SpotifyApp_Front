import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ApiSpotify from '../../utils/ApiSpotify';
export function SearchBar() {

  const handleOnChange = (val) => {
    const appToken = localStorage.getItem('appTkn')
    ApiSpotify.get(`/search`, {
      params: {
        q: val,
        type: 'album,artist,track',
        access_token: appToken
      }
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }
  return (
    <><Form>
      <Form.Group >
        <Form.Control type="text" placeholder="Search" onChange={(e) => handleOnChange(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form></>
  )
}