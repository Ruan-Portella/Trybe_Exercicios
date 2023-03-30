import React from 'react';
import PropTypes from 'prop-types';
import '../styles/digimon.css';

function Digimon({ digimon = null, error = null }) {
  if (error) {
    return (<section>{error}</section>);
  }

  return (
    <section>
      <h2 data-testid="digimonName">{digimon.name}</h2>
      <p>{`Level: ${digimon.level}`}</p>
      <img src={ digimon.img } alt={ digimon.name } />
    </section>
  );
}

Digimon.propTypes = {
  digimon: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    img: PropTypes.string,
  }),
  error: PropTypes.string,
};


export default Digimon;
