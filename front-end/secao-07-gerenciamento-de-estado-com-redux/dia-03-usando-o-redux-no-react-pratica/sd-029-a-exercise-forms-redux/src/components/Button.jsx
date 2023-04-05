import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, type, moreClasses } = this.props;
    return (
      <button
        className={ `button ${moreClasses}` }
        type={ type }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  moreClasses: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  moreClasses: '',
};

export default Button;
