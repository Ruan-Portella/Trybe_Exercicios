// src/components/PersonalForm.js
import React from 'react';
import PropTypes from 'prop-types';

class PersonalForm extends React.Component {
  render() {
    const { formState, onChange } = this.props;

    const {
      name,
      email,
      cpf,
      emailError,
    } = formState;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            name="name"
            maxLength="40"
            required
            value={ name }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              maxLength="50"
              required
              value={ email }
              onChange={ onChange }
            />
          </label>
          <span>{emailError}</span>
        <label htmlFor="cpf">
          CPF
          <input
            id="cpf"
            type="text"
            name="cpf"
            maxLength="11"
            required
            value={ cpf }
            onChange={ onChange }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    emailError: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalForm;