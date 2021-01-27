import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import addPokemonAction from '../actions/addPokemonAction.js';
import addPokemonOp from '../actions/addPokemonOp.js';
import CardPokemon from './cardPokemon.js';
import CardPokemonOp from './cardPokemonOp.js';

export default function PokemonList() {
    const pokemon = useSelector(state => state.pokemon.data);
    const pokemonOp = useSelector(state => state.pokemonOp.data);

    console.log(pokemon);

    const dispatch = useDispatch();
    const dispatchOp = useDispatch();

    function addPokemon(){
        dispatch(addPokemonAction(document.getElementById("inputPokemon").value));
    }

    function randonOp(){
        let result = Math.floor(Math.random() * 4) + 1;
        dispatchOp(addPokemonOp(result));
    }

    return (
        <Row>
            <Col xs="3">
                <label>Pokemon:</label>
                <br />
                <input type="text" id="inputPokemon"></input>
                <br />
                <br />
                <button type="button" onClick={addPokemon}>
                    Adicionar pokemon
                </button>
                <br />
                <br />
                <button type="button" onClick={randonOp}>
                    Jogar
                </button>
            </Col>

            <Col xs="9">
                <Row>
                    {pokemon.map(pokemon => <CardPokemon key={pokemon} nome={pokemon} />)}
                    <div>VS</div>
                    {pokemonOp.map(pokemon => <CardPokemonOp key={pokemon} nome={pokemonOp} />)}
                </Row>
            </Col>
        </Row>
    )
}