import { csrfFetch } from './csrf';

const LOAD = 'review/LOAD'
const ADD_REVIEW =  'review/ADD'

const load = list => ({
    type: LOAD,
    list
})

const addReview = review => ({
    type: ADD_REVIEW,
    review
})

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
            }
        }
        default:
            return state;
    }
}

export default reviewReducer;
