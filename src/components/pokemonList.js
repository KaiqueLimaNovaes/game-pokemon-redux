import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import addPokemonAction from '../actions/addPokemonAction.js';
import CardPokemon from './cardPokemon.js';

export default function PokemonList() {
    const pokemon = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addPokemon(){
        dispatch(addPokemonAction(document.getElementById("inputPokemon").value))
    }

    return (
        <>
            <ul>
                {pokemon.map(pokemon => <CardPokemon key={pokemon} nome={pokemon} />)}
            </ul>

            <label>Pokemon:</label>
            <input type="text" id="inputPokemon"></input>
            
            <button type="button" onClick={addPokemon}>
                Adicionar pokemon
            </button>
        </>
    )
}