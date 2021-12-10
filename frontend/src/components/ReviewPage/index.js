import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink} from 'react-router-dom';
import './ReviewPage.css'


function ReviewPage() {
    const { id } = useParams();
    console.log(id)
    const review = useSelector(state => state.review[id]);
    const dispatch = useDispatch();

    return(
        <div className="review-page">
            <h2>{review.id}</h2>
                <label>Review</label>
                <p>{review.answer}</p>
                <label>Rating: {review.rating}</label>
        </div>
    )
}

export default ReviewPage;
