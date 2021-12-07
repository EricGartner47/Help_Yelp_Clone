import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateHeroPage() {

    const handleSubmit = (e) => {
        e.preventDefault();

      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Become A Hero</label>
                <div className="title-container">
                    <label for="title">Title</label>
                    <input type="text" name="title"/>
                </div>
                <div className="description-container">
                    <label for="description">description</label>
                    <textarea name="description" cols="80" rows="8"/>
                </div>
                <div className="city-container">
                    <label for="city">City</label>
                    <input type="text" name="city"/>
                </div>
                <div className="powers-container">
                    <label for="powers">Powers</label>
                    <input type="text" name="powers"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default CreateHeroPage;
