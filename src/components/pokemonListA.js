import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { addPokemonAction } from '../actions';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';

//import addPokemonAction from '../actions/addPokemonAction.js';
import addPokemonOp from '../actions/addPokemonOp.js';
import CardPokemon from './cardPokemon.js';

class PokemonList extends Component {
    state = {
        inputValue: ''
      }
      inputChange = event => {
        this.setState({
          inputValue: event.target.value
        })
      }

    render() {
        const {addPokemonAction, title} = this.props;
        /*
        const pokemon = useSelector(state => state.data);
        const dispatch = useDispatch();
        
        function addPokemon(){
            dispatch(addPokemonAction(document.getElementById("inputPokemon").value));
        }

        function randonOp(){
            let result = Math.floor(Math.random() * 4) + 1;
            dispatch(addPokemonOp(result));
        }
        */
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
                        {title.map(newValue => <CardPokemon key={title} nome={title} />)}
                        <div>VS</div>
                        {title.map(newValue => <CardPokemon key={title} nome={title} />)}
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = store => ({
    title: store.pokemonState.title
  });

export default connect(mapStateToProps)(PokemonList);