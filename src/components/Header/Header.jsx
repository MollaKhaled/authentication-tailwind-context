import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <button className="btn btn-ghost text-xl">Authentication</button>
      <Link className="btn btn-ghost text-xl" to="/">Home</Link>
      <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
      <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
    </div>
  );
};

export default Header;