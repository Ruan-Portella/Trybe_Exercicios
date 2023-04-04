import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignalAction } from './redux/actions';

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

class TrafficSignal extends React.Component {
  render() {
    const { signalColor, dispatch } = this.props;
    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={ () => dispatch(changeSignalAction('red')) } >Red</button>
          <button type="button" onClick={ () => dispatch(changeSignalAction('yellow')) }>Yellow</button>
          <button type="button" onClick={ () => dispatch(changeSignalAction('green')) }>Green</button>
        </div>
        <img className="signal" src={ renderSignal(signalColor) } alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.color,
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TrafficSignal);
