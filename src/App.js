import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { NavigationComponent } from './components/Navigation';
import { AuthProvider } from './utils/AuthContext';
import { LoginComponent } from './components/Login';
import { SignUpComponent } from './components/Signup';
import { Profile } from './components/Profile';
import SearchResults from './components/SearchResults';
import ArtistInfo from './components/Artists/ArtistInfo';
import { PrivateRoute } from './components/Navigation/PrivateRoute';
import UserAlbums from './components/UserMusic/UserAlbums';
import AlbumDetails from './components/AlbumDetails';
import UserPlaylists from './components/Playlist';
import PlayListDetails from './components/PlayListsDetails';
import './assets/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <AuthProvider>
        <NavigationComponent />
        <Switch>
          {/*
          <PrivateRoute exact path='/profile/edit' component={UserProfileEdit} />
         */}
          <PrivateRoute exact path='/playlist' component={PlayListDetails} />
          <PrivateRoute exact path='/playlists' component={UserPlaylists} />
          <PrivateRoute exact path='/albums' component={UserAlbums} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <Route exact path='/album' component={AlbumDetails} />
          <Route exact path='/artist' component={ArtistInfo} />
          <Route exact path='/signup' component={SignUpComponent} />
          <Route exact path='/search' component={SearchResults} />
          <Route exact path='/login' component={LoginComponent} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
