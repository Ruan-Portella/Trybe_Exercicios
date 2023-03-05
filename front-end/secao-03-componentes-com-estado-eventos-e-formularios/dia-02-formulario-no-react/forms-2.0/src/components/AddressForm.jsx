// src/components/AddressForm.js
import React from 'react';
import PropTypes from 'prop-types';

// importando arquivo já existente no projeto com os estados brasileiros
import states from './countryStates';

class AddressForm extends React.Component {
  render() {
    const { formState, onChange, onBlur } = this.props;

    const {
      address,
      city,
      countryState,
      addressType,
    } = formState;

    return (
      <fieldset>
        <legend>Dados de Endereço</legend>
        <label htmlFor="address">
          Endereço
          <input
            id="address"
            type="text"
            name="address"
            maxLength="200"
            required
            value={ address }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="city">
        Cidade
        <input
          id="city"
          type="text"
          name="city"
          maxLength="28"
          required
          value={ city }
          onChange={ onChange }
          onBlur={ onBlur }
        />
      </label>
        <label htmlFor="countryState">
          Estado
          <select
            id="countryState"
            name="countryState"
            required
            onChange={ onChange }
            value={ countryState }
          >
            <option value="">Selecione</option>
            {
              states.map((value) => (
                <option key={ value }>{ value }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="house">
          <input
            type="radio"
            id="house"
            name="addressType"
            value="Casa"
            checked={ addressType === 'Casa' }
            onChange={ onChange }
          />
          Casa
        </label>
        <label htmlFor="apart">
          <input
            type="radio"
            id="apart"
            name="addressType"
            value="Apartamento"
            checked={ addressType === 'Apartamento' }
            onChange={ onChange }
          />
          Apartamento
        </label>
      </fieldset>
    );
  }
}

AddressForm.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    countryState: PropTypes.string,
    addressType: PropTypes.string,
  }).isRequired,
};

export default AddressForm;