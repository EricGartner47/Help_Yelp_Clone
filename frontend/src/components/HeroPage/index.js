import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink} from 'react-router-dom';
import { deleteHero} from '../../store/hero';
import "./HeroPage.css"

function HeroPage() {
    const { id } = useParams()
    const hero = useSelector(state => state.hero[id])
    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state=> state.session.user)

    const removeHeroButton = () => {
        dispatch(deleteHero(hero.id))
        history.push('/')
    }

    // if(sessionUser === null){
    //     history.push('/')
    // }
    // console.log(sessionUser)

    return(
        <div className="hero-page">
            <h2>{hero.title}</h2>
                <label>Motto</label>
                <p>{hero.description}</p>
                <label>City</label>
                <p>{hero.city}</p>
                <label>Abilities</label>
                <p>{hero.powers}</p>
                {sessionUser.id === hero.heroId &&
                    <>
                     <button className="edit-hero-link"><NavLink to={`/hero/edit/${hero.id}`}>Edit</NavLink></button>
                     <button className="delete-hero-button"onClick={removeHeroButton}>Delete</button>
                    </>
                }
        </div>
    )

}

export default HeroPage;
