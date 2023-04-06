// ./src/App.js
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { thunkCharacter } from './redux/actions';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: ''
    }
  }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <input
          type="text"
          onChange={ ({ target }) => this.setState({ character: target.value }) }
          value={ character }
        />
        <button
          type="button"
          onClick={ () => dispatch(thunkCharacter(character)) }
        >
          Search
        </button>
        <CharacterCard />
      </>
    );
  }
}

export default connect()(App);
