import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, label, onChange, value, maxLength } = this.props;
    return (
      <label htmlFor={ name } className="label">
        { label }
        <div className="control">
          <textarea
            className="textarea"
            name={ name }
            value={ value }
            onChange={ onChange }
            maxLength={ maxLength }
            id={ name }
          />
        </div>
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
};

export default TextArea;
