import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {createHero} from '../../store/hero';
import "./CreateHeroPage.css"

function CreateHeroPage() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [powers, setPowers] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            title,
            description,
            city,
            powers
        }

        return dispatch(createHero(payload)).then(res=> {history.push('/')}).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }

    return (
        <div>
            <form
                className="create-hero-form"
                onSubmit={handleSubmit}>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Become A Hero</label>
                <div className="title-container">
                    <label for="title">Title</label>
                    <input
                        type="text"
                        placeholder="Your Title"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                </div>
                <div className="description-container">
                    <label for="description">Your Motto</label>
                    <textarea
                        name="description"
                        cols="20" rows="2"
                        // style="margin: 0px; width: 493px; height: 62px;"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                </div>
                <div className="city-container">
                    <label for="city">City</label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e)=> setCity(e.target.value)}
                    />
                </div>
                <div className="powers-container">
                    <label for="powers">Powers</label>
                    <input
                        type="text"
                        name="powers"
                        value={powers}
                        onChange={(e)=> setPowers(e.target.value)}
                        />
                </div>
                <div>
                    <button className="create-hero-button"type="submit">Create Hero</button>
                </div>
            </form>
        </div>
    )

}

export default CreateHeroPage;
