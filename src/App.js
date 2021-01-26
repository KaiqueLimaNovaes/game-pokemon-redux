import React from 'react'
import { Provider } from 'react-redux';

import store from './store';
import PokemonList from './components/pokemonList.js';

function App() {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );
}

export default App;
