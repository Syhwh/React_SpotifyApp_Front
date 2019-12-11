import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ApiBacked from './ApiBackend';
import ApiSpotify from './ApiSpotify';
import queryString from 'query-string';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // define state hooks
  const [user, setUser] = useState(false);
  const history = useHistory();

  //hooks first time run
  useEffect(() => {
    ApiBacked.get(`/spotify/${process.env.REACT_APP_SPOTIFY_CLIENT_ID}/${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)
      .then(({ data }) => {
        localStorage.setItem('appTkn', data.body.access_token)
      })
    const userAccessToken = queryString.parse(window.location.search);
    if (userAccessToken) {
      localStorage.setItem('userToken', userAccessToken.access_token);
      
    }

   
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      ApiSpotify.get(`/me`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
        .then(({ data }) => {
        
          setUser(data)
        
          history.push('/profile')
        })
        .catch((error) => console.log(error))
    }
  }, []);


  function authLoginUser(id) {
    setUser(id)
  }
  function authLogOutUser() {
    setUser(null)

  }
  return (
    <AuthContext.Provider value={{
      user,
      authLoginUser,
      authLogOutUser
    }}>
      {children}
    </AuthContext.Provider>
  )

}