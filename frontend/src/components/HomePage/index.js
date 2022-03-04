import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHeros } from '../../store/hero';
import Search from '../SearchBar';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch();
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    useEffect(()=>{
        dispatch(getHeros())
    },[dispatch])

    const heros = useSelector(state => {
        return state.hero.list.map(heroId => state.hero[heroId]);
    });

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
                <div>
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
                <div>
                {heros.map(hero => {
                    return (
                        <div id="hero-container">
                            <NavLink key={hero.id} to={`/hero/${hero.id}`} className="hero-title">{hero.title}</NavLink>
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
                <div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
