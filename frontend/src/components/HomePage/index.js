import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getHeros } from '../../store/hero';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch();
    const heros = useSelector(state => state.hero);
    // console.log(heros, 'hello')


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
                <form>
                    <input className="search-bar" placeholder="Here to help"/>
                    <button className="fas fa-mask" type="submit"/>
                </form>
                <div>
                {/* {heros.map(hero => {
                    return (
                        <div>{hero.title}</div>
                    )
                })} */}
                </div>
            </div>
            <div className="footer">
                <ul className="created-by"> Created by Eric Gartner
                    <li>
                        <a href="https://github.com/EricGartner47">Github</a>
                    </li>
                </ul>
                <div>
                    <form onSubmit={handleSubmit}>
                        <button>Demo User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
