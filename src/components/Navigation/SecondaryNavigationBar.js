
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { logOutUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import { Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import Loading from '../NavigationComponent/LoadingComponent';

function SecondaryNavigationBar({ logOutUser, userInfo }) {

  const { user, authLogOutUser } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      getUser(user);
    }

  }, []);

  const redirectToHome = () => {
    authLogOutUser();
    logOutUser()
  }
  
  return (<>
    <div className='container' >
      <Nav className='justify-content-end '>
        {!userInfo && <>
          <Nav.Item className='mr-3'>
            <Link className='nav-Link ' to='/login' >Login</Link>
          </Nav.Item>
          <Nav.Item className='mr-3'>
            <Link className='nav-Link ' to='/signup' >Signup</Link>
          </Nav.Item></>}
        {userInfo && <>
          <div className='row'>
            <div className='mr-4 col-12 d-flex align-items-end '>
              {userInfo.image && userInfo.image[0].url ?
                <img className="avatar headerAvatar pull-left" src={userInfo.image[0].url} alt="avatar" />
                :
                <img className="avatar headerAvatar pull-left" src={'https://res.cloudinary.com/swgb/image/upload/v1574824276/avatar-placeholder_xuxksw.png'} alt="avatar" />
              }
              <NavDropdown title={userInfo.userGivenName || 'User Name'} id="collasible-nav-dropdown" >
                <NavDropdown.Item
                  as={Link}
                  to='/profile'
                  href="/profile">
                  <FontAwesomeIcon className='mr-2' icon={faUser} />
                  Profile
                    </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to='/profile/edit'
                  href="/profile/edit">
                  <FontAwesomeIcon className='mr-2' icon={faUserCog} />
                  Settings
                    </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  className='nav-Link'
                  to='/' onClick={redirectToHome}>
                  <FontAwesomeIcon className='mr-2' icon={faPowerOff} />
                  Logout
                  </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          {/* <Nav.Item className='mr-3'>
          <Link className='nav-Link ' to='/profile' >Profile</Link>
        </Nav.Item>
        <Nav.Item className='mr-3'>
        <Link className='nav-Link' to='/' onClick={redirectToHome}  >Logout</Link>
      </Nav.Item> */}
        </>}
      </Nav>
    </div>
  </>)
}
const mapStateToProps = ({ user }) => {
  return {
    userInfo: user.user
  }
}
const mapDispatchToProps = { logOutUser, getUser }
export default connect(mapStateToProps, mapDispatchToProps)(SecondaryNavigation)