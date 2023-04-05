import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDisplay extends Component {
  render() {
    const { name, email, cpf, address, city, uf, resume, role, description } = this.props;
    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          {`Nome: ${name}`}
        </div>
        <div>
          {`Email: ${email}`}
        </div>
        <div>
          {`CPF: ${cpf}`}
        </div>
        <div>
          {`Endereço: ${address}`}
        </div>
        <div>
          {`Cidade: ${city}`}
        </div>
        <div>
          {`Estado: ${uf}`}
        </div>
        <div>
          {`Currículo: ${resume}`}
        </div>
        <div>
          {`Cargo: ${role}`}
        </div>
        <div>
          {`Descrição do Cargo: ${description}`}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.personalData.name,
  email: state.personalData.email,
  cpf: state.personalData.cpf,
  address: state.personalData.address,
  city: state.personalData.city,
  uf: state.personalData.uf,
  resume: state.professionalData.resume,
  role: state.professionalData.role,
  description: state.professionalData.description,
});

FormDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDisplay);
