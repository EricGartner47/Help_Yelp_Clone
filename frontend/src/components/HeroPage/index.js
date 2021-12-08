import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';
import "./HeroPage.css"

function HeroPage() {
    const { id } = useParams()
    const hero = useSelector(state => state.hero[id])
    const history = useHistory()


    return(
        <div className="hero-page">
            <h2>{hero.title}</h2>
                <label>Motto</label>
                <span>{hero.description}</span>
                <label>City</label>
                <p>{hero.city}</p>
                <label>Abilities</label>
                <p>{hero.powers}</p>
                <button>Edit</button>
                <button type="button">Delete</button>
                {/* onClick={()=>  }*/}
        </div>
    )

}

export default HeroPage;
