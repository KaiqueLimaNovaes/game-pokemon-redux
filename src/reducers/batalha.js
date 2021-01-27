const initialState = {
    data: [
        'A batalha vai começar'
    ],
};

export function batalha(state = initialState, action){
    switch(action.type){
        case 'add_Batalha':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}