import { csrfFetch } from './csrf';

const LOAD_ALL = 'hero/LOAD_ALL'
const ADD_HERO = 'hero/ADD'
const REMOVE_HERO = 'hero/REMOVE_HERO'
const UPDATE_HERO = 'hero/UPDATE_HERO'

const load_all = list => ({
    type: LOAD_ALL,
    list
})

const addHero = hero => ({
    type: ADD_HERO,
    hero
})

const removeHero = heroId => ({
    type: REMOVE_HERO,
    heroId
});

const update = hero => ({
    type: UPDATE_HERO,
    hero
})

export const getHeros = () => async dispatch => {
    const response = await fetch(`api/hero`);
    if(response.ok) {
        const list = await response.json();
        dispatch(load_all(list))
    }
}

export const createHero = (newHero) => async dispatch => {
    const response = await csrfFetch(`/api/hero`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newHero)
    });

    const hero = await response.json();
    if(response.ok) {
        dispatch(addHero(hero));
        return hero;
    }
}

export const deleteHero = (id) => async dispatch => {
    const response = await csrfFetch(`/api/hero/${id}`, {
        method: 'DELETE'
    });
    const deletedHero = await response.json();
    if(response.ok) {
        dispatch(removeHero(deletedHero))
        return deletedHero;
    }
}

export const updateHero = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/hero/${payload.hero.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    const upToDateHero = await response.json();
    if(response.ok) {
        dispatch(update(upToDateHero))
        return upToDateHero
    }
}

const initialState = {
    list: []
}

const sortList = (list) => {
    return list.sort((heroA, heroB) => {
      return heroA.number - heroB.number;
    }).map((hero) => hero.id);
};


const heroReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL:
            const allHeros = {}
            action.list.forEach(hero => {
                allHeros[hero.id] = hero
            });
            return {
                ...allHeros,
                ...state,
                list: sortList(action.list)};
        case ADD_HERO:
              return {
                ...state,
                [action.hero.id]: {
                  ...state[action.hero.id],
                  ...action.hero
                }};
        case REMOVE_HERO:
            const newState = {...state};
            delete newState[action.heroId]
            newState.list = state.list.filter(heroId => heroId !== action.heroId)
            return newState
        case UPDATE_HERO:
            return {
                ...state,
                [action.hero.id]: {
                  ...state[action.hero.id],
                  ...action.hero
                }};
        default:
            return state;
    }
}

export default heroReducer
