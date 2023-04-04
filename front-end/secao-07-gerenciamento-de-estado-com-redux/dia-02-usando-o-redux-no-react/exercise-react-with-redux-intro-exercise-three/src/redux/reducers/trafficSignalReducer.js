import { CHANGE_SIGNAL } from '../actions';

const INITIAL_STATE = {
  color: 'red',
};

function trafficSignalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state,
      color: action.payload,
    };
  default:
    return state;
  }
}

export default trafficSignalReducer;
