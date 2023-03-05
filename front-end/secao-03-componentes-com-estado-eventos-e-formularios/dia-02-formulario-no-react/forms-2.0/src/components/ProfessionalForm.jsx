import React from 'react';
import PropTypes from 'prop-types';

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertWasDisplayed: false,
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
  }

  onMouseEnterHandler() {
    const { alertWasDisplayed } = this.state;
    if (!alertWasDisplayed) {
      global.alert('Preencha com cuidado esta informação.');
      this.setState({ alertWasDisplayed: true });
    }
  }

  render() {
    const { onChange, formState } = this.props;
    const {
      resume,
      role,
      roleDescription,
    } = formState;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <label htmlFor="resume">
          Resumo do currículo
          <textarea
            name="resume"
            id="resume"
            maxLength="1000"
            required
            value={ resume }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="role">
          Cargo
          <input
            type="text"
            name="role"
            id="role"
            maxLength="40"
            required
            value={ role }
            onChange={ onChange }
            onMouseEnter={ this.onMouseEnterHandler }
          />
        </label>
        <label htmlFor="roleDescription">
          Descrição do cargo
          <textarea
            name="roleDescription"
            id="roleDescription"
            maxLength="500"
            required
            value={ roleDescription }
            onChange={ onChange }
          />
        </label>
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  formState: PropTypes.shape({
    resume: PropTypes.string,
    role: PropTypes.string,
    roleDescription: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProfessionalForm;