const initialState = {
    data: [
        'Escolha seu pokemon'
    ],
};

export function pokemon(state = initialState, action){
    switch(action.type){
        case 'add_Pokemon':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}