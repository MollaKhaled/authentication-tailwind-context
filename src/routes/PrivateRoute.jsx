import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  if(loading){
    <progress className="progress progress-success w-56" value="70" max="100"></progress>
  }
  if(user){
    return children;
  }
  return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;