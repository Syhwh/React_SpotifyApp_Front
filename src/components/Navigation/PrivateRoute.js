import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';

export function PrivateRoute({ path, component, exact }) {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('userToken')
  if (!user || !token) return <Redirect to='/login' />
  return (
    <Route exact={exact} path={path} component={component} />
  )
}