// Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .
import React, { Component } from 'react';
import Pokemon from './Pokemon';


class Pokedex extends Component {
    render() {

        return (this.props.pokeStatus.map(item => <Pokemon pokemon={item} />))
    }
}

export default Pokedex;