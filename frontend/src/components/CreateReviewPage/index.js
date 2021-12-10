import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {createReview} from '../../store/review';

function CreateReviewPage() {
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState('');
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            answer,
            rating
        }
        return dispatch(createReview(payload)).then(res=> {history.push('/')}).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    return(
        <div>
            <form
                className="create-review-form"
                onSubmit={handleSubmit}>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Rate A Hero</label>
                <div className="answer-container">
                    <label for="answer">Review</label>
                    <input
                        type="text"
                        placeholder="Your Review"
                        name="answer"
                        value={answer}
                        onChange={(e)=> setAnswer(e.target.value)}
                        />
                </div>
                <div className="rating-container">
                    <label for="rating">Your Rating</label>
                    <input
                        name="description"
                        cols="20" rows="2"
                        // style="margin: 0px; width: 493px; height: 62px;"
                        value={rating}
                        onChange={(e)=> setRating(e.target.value)}
                    />
                </div>
                <div>
                    <button className="create-review-button"type="submit">Create Review</button>
                </div>
            </form>
        </div>
    )
}

export default CreateReviewPage; 
