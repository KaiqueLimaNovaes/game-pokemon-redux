import { createStore } from 'redux';

const initialState = {
    data: [
        'Bulbassauro',
        'Squirtle',
        'Charmander',
        'Pikachu',
        'Charizard'
    ],
};

function pokemon(state = initialState, action){
    switch(action.type){
        case 'add_Pokemon':
            return { ...state, data: [...state.data, action.title]};
        default:
            return state;
    }
}

const store = createStore(pokemon);

export default store;