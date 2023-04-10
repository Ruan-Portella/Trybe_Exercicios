import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './assets/pokemon-logo.png';
import NextPokemon from './assets/next.png';
import { fetchPokemon } from './actions';

class Pokemon extends Component {
  componentDidMount() {
    const { requestPokemon } = this.props;
    requestPokemon();
  }

  render() {
    const { name, src, isFetching, requestPokemon } = this.props;

    return (
      isFetching ? <span className="loading">Loading...</span>
        : (
          <div className="poke-container">
            <img className="logo" src={ Logo } alt="logo" />
            <div className="pokemon">
              <span data-testid="pokemon-name">{ name }</span>
              <img className="img-container" src={ src } alt="pokemon" />
              <button
                onClick={ requestPokemon }
                type="button"
                className="button"
              >
                <img className="next-pokemon" src={ NextPokemon } alt="next-pokemon" />
              </button>
            </div>
          </div>
        )
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.reducer.imagePath,
  name: state.reducer.name,
  isFetching: state.reducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: () => dispatch(fetchPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

Pokemon.propTypes = {
  requestPokemon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
