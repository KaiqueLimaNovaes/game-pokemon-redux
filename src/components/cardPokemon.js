import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import './cardPokemon.css';

import img1 from '../assets/images/bulbasaur.png'

export default function CardPokemon(props){

    return(
        <Container fluid id="card">
            <Row>
                <Col xs={3}>
                    <img src={img1} id="img"></img>
                </Col>
                
                <Col xs={6}>
                    {props.nome}
                </Col>
                
                <Col xs={3}></Col>
            </Row>
        </Container>
    );
}