// src/App.js
import React from 'react';
import AddressForm from './components/AddressForm';
import PersonalForm from './components/PersonalForm';
import handleValue from './utils/handleValue';
import ProfessionalForm from './components/ProfessionalForm';
import DataDisplay from './components/DisplayForm';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: 'Acre',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
  emailError: '',
};

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = INITIAL_STATE
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({ displayData: true });
  }

  handleChange({ target }) {
    const { name, value } = target;

    const newValue = handleValue(name, value);

    const errorMsg = this.validateEmail(name, value);

    this.setState((previousState) => ({
      ...previousState,
      [name]: newValue,
      [`${name}Error`]: errorMsg,
    }));
  }

  validateEmail(name, value) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(value) || name !== 'email' ? undefined : 'Email inválido';
  }

  handleClear = () => {
    this.setState(INITIAL_STATE);
  };

  handleBlur({ target }) {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  }

  render() {
    const { displayData } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <PersonalForm onChange={ this.handleChange } formState={ this.state } />
        <AddressForm
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          formState={ this.state }
        />
        <ProfessionalForm onChange={ this.handleChange } formState={ this.state } />
        <button type="submit">Enviar</button>
        <button type="reset" onClick={ this.handleClear }>Limpar</button>
        { displayData && <DataDisplay formState={ this.state } /> }
      </form>
    );
  }
}

export default App;