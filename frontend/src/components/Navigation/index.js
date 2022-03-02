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
      <div id="drop-down">
        <NavLink to="/create-hero">Create a Hero Page</NavLink>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div id='sessionLinks'>
        <NavLink to="/login" id="log-in-link">Log In</NavLink>
        <NavLink to="/signup" id="sign-up-link">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div>
      <div id="nav-bar">
        <div id="home-page-link"><NavLink exact to="/">Help!</NavLink></div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
