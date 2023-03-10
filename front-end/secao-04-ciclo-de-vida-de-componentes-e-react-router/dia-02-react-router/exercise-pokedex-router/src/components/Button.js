import React from 'react';
import PropTypes from 'prop-types';

import '../styles/button.css';

function Button({ className, children, disabled, onClick }) {
  return (
    <button
      onClick={ onClick }
      className={ `button-text ${className}` }
      disabled={ disabled }
      type="button"
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}.isRequired;

// Button.defaultProps = {
//   disabled: false,
// };

export default Button;
