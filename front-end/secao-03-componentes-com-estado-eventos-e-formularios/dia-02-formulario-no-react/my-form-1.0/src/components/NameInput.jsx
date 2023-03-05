import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;
    const LIMIT_CARACTERES = 80;
//     
    return (
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          type="text"
          onChange={ handleChange }
          value={ name }
        />
        { !name ? 'O nome precisa ser preenchido' : ''}
        { name.length > LIMIT_CARACTERES
          ? 'O nome não pode ter mais que 80 caracteres' : ''}
      </label>
    );
  }
}

NameInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

export default NameInput;