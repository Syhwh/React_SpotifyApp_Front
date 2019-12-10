import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from '../Navigation/LoadingComponent';
import { AuthContext } from '../../utils/AuthContext';
import noImage from '../../assets/images/noimage.png';

export function ProfilePage({ userInfo }) {
  const { user } = useContext(AuthContext);
  console.log(user)


  return (<>
    <Container>
      <h4>User Details </h4>
      <Row>
        <div className='col-2'>
          <img
            src={user.images.length > 1 ? user.images[0].url : noImage}
            className='img-thumbnail img-circle' />
        </div>
        <div className='col'>
          <h3>
            {user.display_name}
          </h3>
          <p>
           <strong>Email:  </strong> {user.email}
           
          </p>
          <p>
          <a href={user.external_urls.spotify} target='_blank'>
              go to your spotify page
            </a>
          </p>
        </div>
        <div className='col-4 text-right'>
        </div>
      </Row>

    </Container>
  </>)
}