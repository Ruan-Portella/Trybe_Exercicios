import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import '../styles/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon, hideLink } = this.props;
    const { name, type, averageWeight, image, id } = pokemon;

    return (
      <div className="pokemon">
        <div className="pokemon-overview">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          { !hideLink && <Link to={ `/pokemon/${id}` }>Details</Link> }
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
  hideLink: PropTypes.boll,
}.isRequired;

Pokemon.defaultProps = {
  hideLink: false,
};

export default Pokemon;
