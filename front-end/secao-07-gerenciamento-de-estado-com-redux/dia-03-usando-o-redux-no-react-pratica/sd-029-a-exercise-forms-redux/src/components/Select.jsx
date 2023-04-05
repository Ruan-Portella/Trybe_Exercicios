import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      defaultOption,
      options,
    } = this.props;
    return (
      <label htmlFor={ name } className="label">
        { label }
        <div className="select">
          <select
            name={ name }
            id={ name }
            required
            onChange={ onChange }
            value={ value }
          >
            <option>{ defaultOption }</option>
            {
              options.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </div>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default Select;
