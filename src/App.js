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
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import './assets/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <AuthProvider>
        <NavigationComponent />
        <Switch>
          {/* <PrivateRoute exact path='/property' component={NewProperty} />
          
          <PrivateRoute exact path='/profile/edit' component={UserProfileEdit} />
          <PrivateRoute exact path='/dashboard' component={AgencyDashboard} /> */}
          <Route exact path='/artist' component={ArtistInfo} />
          <Route exact path='/signup' component={SignUpComponent} />
          <Route exact path='/search' component={SearchResults} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <Route exact path='/login' component={LoginComponent} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
