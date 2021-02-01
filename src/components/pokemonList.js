import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import addPokemonAction from '../actions/addPokemonAction.js';
import addPokemonOp from '../actions/addPokemonOp.js';
import CardPokemon from './cardPokemon.js';
import CardPokemonOp from './cardPokemonOp.js';
import CardBatalha from './cardBatalha.js';

import './pokemonList.css';

import Versus from '../assets/images/versus.png'

export default function PokemonList() {
    const pokemon = useSelector(state => state.pokemon.data);
    const pokemonOp = useSelector(state => state.pokemonOp.data);
    const batalha = useSelector(state => state.batalha.data);

    console.log(batalha);

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
                <label id="t">Escolha seu pokemon:</label>
                <br />
                
                <select id="inputPokemon" name="inputPokemon">
                    <option value="charmander">charmander</option>
                    <option value="bulbasaur">bulbasaur</option>
                    <option value="squirtle">squirtle</option>
                    <option value="pikachu">pikachu</option>
                </select>
                <br />
                <br />
                <button id="botaoA" type="button" onClick={addPokemon}>
                    Adicionar pokemon
                </button>
                <br />
                <br />
                <button id="botaoJ" type="button" onClick={randonOp}>
                    Jogar
                </button>
                <br />
                <br />
                <p id="instrucoes">
                    <b>1</b> - Escolha seu pokemon;
                    <br />
                    <b>2</b> - Clique em adicionar Pokemon;
                    <br />
                    <b>3</b> - Clique em jogar;
                    <br />
                    <b>4</b> - O resultado da batalha aparecerá.
                </p>
            </Col>

            <Col xs="9">
                <Row>
                    {pokemon.map(pokemon => <CardPokemon key={pokemon} nome={pokemon} />)}
                    <img id="imgVersus" src={Versus} alt="" width="264px" height="200px"></img>
                    {pokemonOp.map(pokemon => <CardPokemonOp key={pokemon} nome={pokemonOp} />)}
                </Row>
                <Row>
                    {batalha.map(batalha => <CardBatalha key={batalha} nome={batalha} seu={pokemon} op={pokemonOp} />)}
                </Row>
            </Col>
        </Row>
    )
}