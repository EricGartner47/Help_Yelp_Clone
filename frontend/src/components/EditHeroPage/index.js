import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateHero} from '../../store/hero';
import "./EditHeroPage.css"

function EditHeroPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const hero = useSelector(state => state.hero[id])
    const [title, setTitle] = useState(hero.title);
    const [description, setDescription] = useState(hero.description);
    const [city, setCity] = useState(hero.city);
    const [powers, setPowers] = useState(hero.powers);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const updateTitle = (e) => setTitle(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updatePowers = (e) => setPowers(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            hero,
            title,
            description,
            city,
            powers
        }
        history.push('/')
        return dispatch(updateHero(payload)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    return (
        <>
            <form
                className="edit-hero-form"
                onSubmit={handleSubmit}>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Update Your Hero</label>
                <div className="title-container">
                    <label for="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={updateTitle}
                        />
                </div>
                <div className="description-container">
                    <label for="description">Your Motto</label>
                    <textarea
                        name="description"
                        cols="20" rows="2"
                        value={description}
                        onChange={updateDescription}
                    />
                </div>
                <div className="city-container">
                    <label for="city">City</label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={updateCity}
                    />
                </div>
                <div className="powers-container">
                    <label for="powers">Powers</label>
                    <input
                        type="text"
                        name="powers"
                        value={powers}
                        onChange={updatePowers}
                        />
                </div>
                <div>
                    <button className="update-hero-button"type="submit">Update Hero</button>
                </div>
            </form>
        </>
    )
}

export default EditHeroPage;
