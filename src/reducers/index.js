import { combineReducers } from 'redux';

import {pokemon} from "./pokemon";
import {pokemonOp} from "./pokemonOp";

export const Reducers = combineReducers({
    pokemon,
    pokemonOp
});