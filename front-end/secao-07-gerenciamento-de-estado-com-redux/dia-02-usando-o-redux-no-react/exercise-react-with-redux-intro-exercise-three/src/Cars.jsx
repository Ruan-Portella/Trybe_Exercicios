import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import {moveCar} from './redux/actions'

function Cars({
  redCar, blueCar, yellowCar, dispatch,
}) {
  return (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => dispatch(moveCar('red', !redCar))}
          type="button"
        >
          move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => dispatch(moveCar('blue', !blueCar))}
          type="button"
        >
          move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => dispatch(moveCar('yellow', !yellowCar))}
          type="button"
        >
          move
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.cars.cars.red,
  blueCar: state.cars.cars.blue,
  yellowCar: state.cars.cars.yellow,
});

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
  moveCar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Cars);
