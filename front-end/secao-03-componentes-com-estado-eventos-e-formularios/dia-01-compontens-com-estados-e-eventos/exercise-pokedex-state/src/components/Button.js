import { bool, func, node, string } from 'prop-types';
import React from 'react';
import './Button.css';

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
  className: string.isRequired,
  children: node.isRequired,
  disabled: bool,
  onClick: func.isRequired,
};

Button.defaultProps = {
  disabled: false,
}.isRequired;

export default Button;
