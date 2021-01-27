import { combineReducers } from 'redux';

import {pokemon} from "./pokemon";
import {pokemonOp} from "./pokemonOp";
import {batalha} from "./batalha";

export const Reducers = combineReducers({
    pokemon,
    pokemonOp,
    batalha
});