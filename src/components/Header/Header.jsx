import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut =() =>{
    logOut()
    .then(()=>{

    })
    .catch(error =>{
    console.log(error);
    })
  }
  return (
    <div className="navbar bg-primary text-primary-content">
      <button className="btn btn-ghost text-xl">Authentication</button>
      <Link className="btn btn-ghost text-xl" to="/">Home</Link>
      <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
      <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
    
    {
      user ? 
      <>
      <span>{user.email}</span> 
      <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
      </> : <Link to="/login">Login</Link>
      
    }
    </div>
  );
};

export default Header;