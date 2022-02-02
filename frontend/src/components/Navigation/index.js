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
      <div className='sessionLinks'>
        <NavLink to="/login" className="log-in-link">Log In</NavLink>
        <NavLink to="/signup" className="sign-up-link">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="nav-div-container">
        <ul className="nav-unordered-list">
          <li>
            <div className="home-page-link"><NavLink exact to="/">Help!</NavLink></div>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
