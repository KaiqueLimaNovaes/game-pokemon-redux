import React from 'react'
import { Provider } from 'react-redux';

import './app.css'

import store from './store';
import PokemonList from './components/pokemonList.js';

function App() {
  return (
    <Provider store={store} id="principal">
      <PokemonList />
    </Provider>
  );
}

export default App;
