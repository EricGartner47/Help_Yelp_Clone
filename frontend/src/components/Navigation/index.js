import React from 'react';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
}

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div id="drop-down">
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
        <div id='sessionLinks'>
          <NavLink to="/login" id="log-in-link">Log In</NavLink>
          <NavLink to="/signup" id="sign-up-link">Sign Up</NavLink>
          <div>
            <form onSubmit={handleSubmit}>
              <button id="demo-button">Demo User</button>
            </form>
          </div>
        </div>
    );
  }

  return (
    <div>
      <div id="nav-bar">
        <div id="home-page-link">
          <NavLink exact to="/">Help!</NavLink>
        </div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;

//test
