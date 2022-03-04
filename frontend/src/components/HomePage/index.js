import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getHeros } from '../../store/hero';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHeros())
    },[dispatch])

    const heros = useSelector(state => {
        return state.hero.list.map(heroId => state.hero[heroId]);
    });


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
    // }

    const handleSearch = (e) => {
        e.preventDefault();
        return dispatch
    }

    return (
        <div>
            <div id="home-page">
                <div id="home-page-logo">
                    <h1>Help!</h1>
                </div>
                <form id="search-bar" onSubmit={handleSearch}>
                    <input className="search-input" placeholder="Here to help"/>
                    <button className="fas fa-mask" type="submit" id="hero mask"/>
                </form>
                <div>
                {heros.map(hero => {
                    return (
                        <div className="hero-container">
                            <NavLink key={hero.title} to={`/hero/${hero.id}`} className="hero-title">{hero.title}</NavLink>
                            <span className="hero-description">{hero.description}</span>
                        </div>
                        )
                })}
                </div>
            </div>
            <div id="footer">
                <ul className="created-by"> Created by Eric Gartner:
                    <li key="links">
                        <a key="GitHub" className="gitHub-link" href="https://github.com/EricGartner47">Github</a>
                        <a key="Linked In" className="linkedIn-link"href="https://www.linkedin.com/in/eric-gartner-731907a0/">Linked In</a>
                    </li>
                </ul>
                    {/* <form onSubmit={handleSubmit}>
                        <button className="demo-button">Demo User</button>
                    </form> */}
                <div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
