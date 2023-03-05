import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataDisplay extends Component {
  render() {
    const {
      formState: {
        name, email, cpf, address, city, countryState,
        addressType, resume, role, roleDescription,
      },
    } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div>
          Name:
          {' '}
          <span>
            { name }
          </span>
        </div>
        <div>
          Email:
          { ' ' }
          <span>
            { email }
          </span>
        </div>
        <div>
          CPF:
          { ' ' }
          <span>
            { cpf }
          </span>
        </div>
        <div>
          Endereço:
          { ' ' }
          <span>
            { address }
          </span>
        </div>
        <div>
          Cidade:
          { ' ' }
          <span>
            { city }
          </span>
        </div>
        <div>
          Estado:
          { ' ' }
          <span>
            { countryState }
          </span>
        </div>
        <div>
          Tipo de residência:
          { ' ' }
          <span>
            { addressType }
          </span>
        </div>
        <h3>Profissional</h3>
        <div>
          Currículo:
          { ' ' }
          <span>
            { resume }
          </span>
        </div>
        <div>
          Cargo:
          { ' ' }
          <span>
            { role }
          </span>
        </div>
        <div>
          Descrição do cargo:
          { ' ' }
          <span>
            { roleDescription }
          </span>
        </div>
      </div>
    );
  }
}

DataDisplay.propTypes = {
  formState: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    countryState: PropTypes.string,
    addressType: PropTypes.string,
    resume: PropTypes.string,
    role: PropTypes.string,
    roleDescription: PropTypes.string,
  }).isRequired,
};

export default DataDisplay;