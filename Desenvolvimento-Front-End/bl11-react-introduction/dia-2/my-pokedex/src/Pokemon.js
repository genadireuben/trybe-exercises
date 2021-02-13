// Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

import { Component } from 'react';
import AverageWeight from './AverageWeight';

export default class Pokemon extends Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <AverageWeight weight={averageWeight} />
                </div>
                <img src={image} alt="Imagem de Pokemons" />
            </div>
        )
    }
};


