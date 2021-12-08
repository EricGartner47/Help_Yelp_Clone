import { csrfFetch } from './csrf';

const LOAD_ALL = 'hero/LOAD_ALL'
const ADD_HERO = 'hero/ADD'

const load_all = list => ({
    type: LOAD_ALL,
    list
})

const addHero = hero => ({
    type: ADD_HERO,
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
                list: sortList(action.list)
            }
        case ADD_HERO:
              return {
                ...state,
                [action.hero.id]: {
                  ...state[action.hero.id],
                  ...action.hero
                }
              };
        default:
            return state;
    }
}

export default heroReducer
