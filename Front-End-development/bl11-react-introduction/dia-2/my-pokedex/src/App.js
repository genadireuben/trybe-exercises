import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <main className="main-content">
      <h1>Pokedex</h1>
      <div className="poke-list">
        <Pokedex pokeStatus={pokemons} />
      </div>
    </main>);
}

export default App;

