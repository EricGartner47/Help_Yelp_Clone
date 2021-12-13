import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="drop-down">
        <NavLink to="/create-hero">Create a Hero Page</NavLink>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div>
        <NavLink to="/login" className="log-in-link">Log In</NavLink>
        <NavLink to="/signup" className="sign-up-link">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <ul className="nav-bar">
      <div className="nav-div">
        <li >
          <NavLink className="home-page-link" exact to="/">Help!</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </div>
    </ul>
  );
}

export default Navigation;
