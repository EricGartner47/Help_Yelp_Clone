import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHeros } from '../../store/hero';
import Search from '../SearchBar';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    if(!user){
        <Redirect to='/' />
    }

    useEffect(()=>{
        dispatch(getHeros())
    },[dispatch])

    const heros = useSelector(state => {
        return state.hero.list.map(heroId => state.hero[heroId]);
    });

    const filterHeros = (heros, query) => {
        if (!query) {
            return heros;
        }

        return heros.filter((hero) => {
            const heroName = hero.title.toLowerCase();
            return heroName.includes(query)
        })
    }
    const filteredHeros = filterHeros(heros, searchQuery);

    if(user){
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
                        {filteredHeros? filteredHeros.map(hero => {
                            return (
                                <div id="hero-container">
                                    <NavLink key={hero.id} to={`/hero/${hero.id}`} className="hero-title">{hero.title}</NavLink>
                                    <span className="hero-description">{hero.description}</span>
                                </div>
                            )
                        }) : heros.map(hero => {
                            return (
                                <div id="hero-container">
                                    <NavLink key={hero.id} to={`/hero/${hero.id}`} className="hero-title">{hero.title}</NavLink>
                                    <span className="hero-description">{hero.description}</span>
                                </div>
                                )})}
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
    } else return (
        <Redirect to="/" />
    )
}

export default HomePage;
