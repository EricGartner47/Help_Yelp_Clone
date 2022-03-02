import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateReview} from '../../store/review';
import './EditReviewPage.css'

function EditReviewPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const review = useSelector(state => state.review[id])
    const [answer, setAnswer] = useState(review.answer);
    const [rating, setRating] = useState(review.rating);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const updateAnswer = (e) => setAnswer(e.target.value)
    const updateRating = (e) => setRating(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            review,
            answer,
            rating
        }
        return dispatch(updateReview(payload)).then(res=> {history.push(`/`)}).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          })
    }

    return (
        <>
            <form
                className="edit-review-form"
                onSubmit={handleSubmit}>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Update Your Review</label>
                <div className="answer-container">
                    <label for="answer">Review</label>
                    <input
                        type="text"
                        name="answer"
                        value={answer}
                        onChange={updateAnswer}
                        />
                </div>
                <div className="rating-container">
                    <label for="rating">Your Rating</label>
                    <input
                        name="rating"
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={updateRating}
                    />
                </div>
                <div>
                    <button className="update-review-button"type="submit">Update Review</button>
                </div>
            </form>
        </>
    )


}

export default EditReviewPage;
