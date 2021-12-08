import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {createHero} from '../../store/hero';
import "./CreateHeroPage.css"

function CreateHeroPage() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [powers, setPowers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            title,
            description,
            city,
            powers
        }
        return dispatch(createHero(payload))
      }

    return (
        <div>
            <form
                className="create-hero-form"
                onSubmit={handleSubmit}>
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
                    <label for="description">description</label>
                    <textarea
                        name="description"
                        cols="80" rows="8"
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default CreateHeroPage;
