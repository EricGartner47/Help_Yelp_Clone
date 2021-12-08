import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';
import { removeHero } from '../../store/hero';
import "./HeroPage.css"

function HeroPage() {
    const { id } = useParams()
    const hero = useSelector(state => state.hero[id])
    const history = useHistory()
    const dispatch = useDispatch()

    const removeHeroButton = () => {
        dispatch(removeHero(hero.id))
        history.push('/')
    }


    return(
        <div className="hero-page">
            <h2>{hero.title}</h2>
                <label>Motto</label>
                <p>{hero.description}</p>
                <label>City</label>
                <p>{hero.city}</p>
                <label>Abilities</label>
                <p>{hero.powers}</p>
                    <button>Edit</button>
                    <button onClick={removeHeroButton}>Delete</button>


        </div>
    )

}

export default HeroPage;
