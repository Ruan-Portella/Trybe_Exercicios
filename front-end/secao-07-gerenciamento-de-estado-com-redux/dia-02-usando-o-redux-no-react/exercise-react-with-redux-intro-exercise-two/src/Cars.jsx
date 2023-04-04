import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import blueCarImg from './images/carBlue.jpeg';
import redCarImg from './images/carRed.jpeg';
import yellowCarImg from './images/carYellow.jpeg';
import {moveCarAction} from './redux/actions/index.js'

class Cars extends React.Component {
  render() {
    const { redCar, blueCar, yellowCar, dispatch } = this.props;
    return (
      <main>
        <section>
          <img
            className={ redCar ? 'car-right' : 'car-left' }
            src={ blueCarImg }
            alt="red car"
          />
          <button
            onClick={ () => dispatch(moveCarAction('red', !redCar)) }
            type="button"
          >
            move
          </button>
        </section>
        <section>
          <img
            className={ blueCar ? 'car-right' : 'car-left' }
            src={ redCarImg }
            alt="blue car"
          />
          <button
            onClick={ () => dispatch(moveCarAction('blue', !blueCar)) }
            type="button"
          >
            move
          </button>
        </section>
        <section>
          <img
            className={ yellowCar ? 'car-right' : 'car-left' }
            src={ yellowCarImg }
            alt="yellow car"
          />
          <button
            onClick={ () => dispatch(moveCarAction('yellow', !yellowCar)) }
            type="button"
          >
            move
          </button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow
});

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Cars);
