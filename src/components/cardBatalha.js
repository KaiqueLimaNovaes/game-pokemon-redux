import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import './cardBatalha.css';

export default function CardBatalha(props){

    let texto = props.nome;
    const pokemonChoice = props.seu;
    const pokemonOp = props.op;

    console.log(pokemonOp)
    
    if (pokemonChoice == 'charmander' && pokemonOp == 1){
        texto = "Empate!"
    }else if (pokemonChoice == 'charmander' && pokemonOp == 2){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'charmander' && pokemonOp == 3){
        texto = "Você perdeu!"
    }else if (pokemonChoice == 'charmander' && pokemonOp == 4){
        texto = "Você perdeu!"
    }else if (pokemonChoice == 'bulbasaur' && pokemonOp == 1){
        texto = "Você perdeu!"
    }else if (pokemonChoice == 'bulbasaur' && pokemonOp == 2){
        texto = "Empate!"
    }else if (pokemonChoice == 'bulbasaur' && pokemonOp == 3){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'bulbasaur' && pokemonOp == 4){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'squirtle' && pokemonOp == 1){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'squirtle' && pokemonOp == 2){
        texto = "Você perdeu!"
    }else if (pokemonChoice == 'squirtle' && pokemonOp == 3){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'squirtle' && pokemonOp == 4){
        texto = "Você perdeu!"
    }else if (pokemonChoice == 'pikachu' && pokemonOp == 1){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'pikachu' && pokemonOp == 2){
        texto = "Você perdeu!"
    }else if (pokemonChoice == 'pikachu' && pokemonOp == 3){
        texto = "Você venceu!"
    }else if (pokemonChoice == 'pikachu' && pokemonOp == 4){
        texto = "Empate!"
    }
    
    return(
        <Container fluid id="cardBatalha">
            <Row id="batalhaR">
                {texto}
            </Row>
        </Container>
    );
}