import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink} from 'react-router-dom';
import { deleteReview } from '../../store/review';
import './ReviewPage.css'


function ReviewPage() {
    const { id } = useParams();
    const review = useSelector(state => state.review[id]);
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();

    const removeReviewButton = () => {
        dispatch(deleteReview(review.id))
        history.push('/')
    }

    return(
        <div className="review-page">
            <h2>{review.id}</h2>
                <label>Review</label>
                <p>{review.answer}</p>
                <label>Rating: {review.rating}</label>
                {sessionUser ? sessionUser.id === review.userId &&
                    <>
                     <button className="edit-review-link"><NavLink to={`/review/edit/${review.id}`}>Edit</NavLink></button>
                     <button className="delete-review-button"onClick={removeReviewButton}>Delete</button>
                    </> : <> </>
                }
        </div>
    )
}

export default ReviewPage;
