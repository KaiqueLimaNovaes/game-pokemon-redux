const initialState = {
    data: [
        'Seu oponente escolhera um pokemon'
    ],
};

export function pokemonOp(state = initialState, action){
    switch(action.type){
        case 'add_PokemonOp':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}