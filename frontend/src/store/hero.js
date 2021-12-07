

const LOAD = 'hero/LOAD'

const load = list => ({
    type: LOAD,
    list
})

export const getHeros = () => async dispatch => {
    const response = await fetch(`api/hero`);
    if(response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

// const initialState = {
//     list: []
// }



const heroReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD:
            const allHeros = {}
            action.list.forEach(hero => {
                allHeros[hero.id] = hero
            });
            return {
                ...allHeros,
                ...state,
            }
        default:
            return state;
    }
}

export default heroReducer
