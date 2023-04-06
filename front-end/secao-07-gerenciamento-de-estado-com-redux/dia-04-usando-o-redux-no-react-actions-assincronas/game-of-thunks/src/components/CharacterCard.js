// ./src/components/CharacterCard.js
import React from 'react';
import { connect } from 'react-redux';

class CharacterCard extends React.Component {
  render() {
    const { character, loading, error } = this.props;
    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Born: {character.born}</li>
          <li>
            Titles:
            <ol>
              {character.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {character.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol>
          </li>
        </ul>
      );
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <h3>Loading...</h3>; }
    return <div>Type a character name and click to search!</div>;
  }
}

const mapStateToProps = (state) => ({
  character: state.character,
  loading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(CharacterCard);
