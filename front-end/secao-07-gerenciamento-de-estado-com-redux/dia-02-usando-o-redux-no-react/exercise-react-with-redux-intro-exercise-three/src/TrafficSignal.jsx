import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  switch (signalColor) {
    case 'red':
      return redSignal;
    case 'green':
      return greenSignal;
    case 'yellow':
      return yellowSignal;
    default:
      return null;
  }
};

function TrafficSignal({ signalColor }) {
  return (
    <div>
      <div className="button-container">
        <button type="button">Red</button>
        <button type="button">Yellow</button>
        <button type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = () => ({
  /* Coloque seu código aqui... */
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  // changeSignal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TrafficSignal);
