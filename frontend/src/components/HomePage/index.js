import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getHeros } from '../../store/hero';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch();
    const heros = useSelector(state => {
        return state.hero.list.map(heroId => state.hero[heroId]);
      });
      console.log(heros)


    useEffect(()=>{
        dispatch(getHeros())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
    }

    return (
        <div>
            <div className="home-page">
                <div>
                    <h1 className="home-page-logo">Help!</h1>
                </div>
                <form className="search-bar">
                    <input className="search-input" placeholder="Here to help"/>
                    <button className="fas fa-mask" type="submit" id="hero mask"/>
                </form>
                <div>
                {heros.map(hero => {
                    return (
                        <div className="hero-container">
                            <NavLink to={`/hero/${hero.id}`} className="hero-title">{hero.title}</NavLink>
                            <span className="hero-description">{hero.description}</span>
                        </div>
                        )
                })}
                </div>
            </div>
            <div className="footer">
                <ul className="created-by"> Created by Eric Gartner
                    <li>
                        <a href="https://github.com/EricGartner47">Github</a>
                        <a href="https://www.linkedin.com/in/eric-gartner-731907a0/">Linked In</a>
                    </li>
                </ul>
                    <form onSubmit={handleSubmit}>
                        <button className="demo-button">Demo User</button>
                    </form>
                <div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
