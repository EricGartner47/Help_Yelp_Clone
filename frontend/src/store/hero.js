import { csrfFetch } from './csrf';

const LOAD = 'hero/LOAD'
const ADD_ONE = 'hero/ADD'

const load = list => ({
    type: LOAD,
    list
})

const addHero = hero => ({
    type: ADD_ONE,
    hero
})

export const getHeros = () => async dispatch => {
    const response = await fetch(`api/hero`);
    if(response.ok) {
        const list = await response.json();
        dispatch(load(list))
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
        case LOAD:
            const allHeros = {}
            action.list.forEach(hero => {
                allHeros[hero.id] = hero
            });
            return {
                ...allHeros,
                ...state,
                list: sortList(action.list)
            }
        case ADD_ONE:
            if (!state[action.hero.id]) {
                const newState = {
                  ...state,
                  [action.hero.id]: action.hero
                };
                const heroList = newState.list.map(id => newState[id]);
                heroList.push(action.hero);
                newState.list = sortList(heroList);
                return newState;
              }
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
