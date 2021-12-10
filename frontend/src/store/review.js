import { csrfFetch } from './csrf';

const LOAD = 'review/LOAD'
const ADD_REVIEW =  'review/ADD'
const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
const REMOVE_REVIEW = 'review/REMOVE_REVIEW'

const load = list => ({
    type: LOAD,
    list
})

const addReview = review => ({
    type: ADD_REVIEW,
    review
})

const update = review => ({
    type: UPDATE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReviews = (heroId) =>  async dispatch => {
    const response = await fetch(`/api/hero/${heroId}/reviews`)
    if(response.ok) {
        const list = await response.json();
        dispatch(load(list))
        return list
    }
}

export const createReview = (newReview) => async dispatch => {
    const response = await csrfFetch(`/api/hero/${newReview.hero.id}/create-review`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newReview)
    });
    const review = await response.json();
    if(response.ok) {
        dispatch(addReview(review));
        return review;
    }
}

export const updateReview = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/review/edit/${payload.review.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    const upToDateReview = await response.json();
    if(response.ok) {
        dispatch(update(upToDateReview))
        return upToDateReview
    }
}

export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/review/${id}`, {
        method: 'DELETE'
    });
    const deletedReview = await response.json();
    if(response.ok) {
        dispatch(removeReview(deletedReview))
        return deletedReview;
    }
}

const initialState = {
    list:[]
}

const sortList = (list) => {
    return list.sort((reviewA, reviewB) => {
      return reviewA.number - reviewB.number;
    }).map((review) => review.id);
};

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const allReviews = {}
            action.list.answer.forEach(review => {
                allReviews[review.id] = review
            });
            return {
                ...state,
                ...allReviews,
                list: sortList(action.list.answer)
            }
        case ADD_REVIEW:{
            return{
                ...state,
                [action.review.id]:{
                    ...state[action.review.id],
                    ...action.review
                }
            }}
        case REMOVE_REVIEW:
            const newState = {...state};
            delete newState[action.reviewId.id]
            newState.list = state.list.filter(review => review !== action.reviewId.id)
            return newState
        default:
            return state;
    }
}

export default reviewReducer;
