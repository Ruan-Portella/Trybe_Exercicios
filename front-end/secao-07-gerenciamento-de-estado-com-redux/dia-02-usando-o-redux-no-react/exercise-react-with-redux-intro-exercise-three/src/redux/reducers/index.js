import { combineReducers } from 'redux'
import carsReducer from './carsReducer'
import trafficSignalReducer from './trafficSignalReducer';

const rootReducer = combineReducers({
    cars: carsReducer, 
    traffic: trafficSignalReducer,
});

export default rootReducer;