import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div onClick={openMenu}>
        <i className="fas fa-mask"></i><i className="fas fa-angle-down"></i>
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <div></div>
            <div>
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          </li>
            <button onClick={logout} className="logout-button">Log Out</button>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
