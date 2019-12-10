import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { getUserAlbums } from '../../redux/actions/apiActions';
import { AuthContext } from '../../utils/AuthContext';
import LoadigComponent from '../Navigation/LoadingComponent';
import { Container, Row } from 'react-bootstrap';
import UserAlbumCard from './UserAlbumCard';
import noImage from '../../assets/images/noimage.png';

function UserAlbums({ getUserAlbums, userAlbums }) {
  const { user } = useContext(AuthContext);
  console.log('user in albums')
  console.log(user)

  useEffect(() => {
    getUserAlbums()
  }, [])
  if (!userAlbums || !user) return <LoadigComponent />
  return (<>
    <Container>
      <Row className='offset-1 mt-2'>
        <h2>
          My albums
        </h2>
      </Row>
      <Row className='offset-1'>
        {userAlbums && userAlbums.length > 1 && userAlbums.map(({ album }) => {
          return <UserAlbumCard
            key={album.id}
            id={album.id}
            title={album.name}
            date={album.release_date}
            artist={album.artists[0].name}
            type={album.album_type}
            image={album.images.length > 1 ?
              album.images[0].url :
              noImage}
          />
        })}
      </Row>
    </Container>
  </>)
}

const mapStateToProps = ({ apiData }) => {
  return {
    userAlbums: apiData.userAlbums
  }
}

const mapDispatchToProps = {
  getUserAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums)