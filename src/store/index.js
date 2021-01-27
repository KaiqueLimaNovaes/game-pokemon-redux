import { createStore } from 'redux';
import { Reducers } from '../reducers';
/*
const initialState = {
    data: [
        'Escolha seu pokemon'
    ],
};

function pokemon(state = initialState, action){
    switch(action.type){
        case 'add_Pokemon':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}
*/
const store = createStore(Reducers);

export default store;