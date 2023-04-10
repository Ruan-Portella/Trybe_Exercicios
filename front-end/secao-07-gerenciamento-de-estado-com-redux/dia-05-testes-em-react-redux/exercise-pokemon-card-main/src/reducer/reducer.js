import { REQUEST_IMAGE, GET_IMAGE, GET_NAME, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  imagePath: '',
  name: '',
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_IMAGE:
    return { ...state, isFetching: true };
  case GET_IMAGE:
    return { ...state, imagePath: action.payload, isFetching: false };
  case GET_NAME:
    return { ...state, name: action.payload, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
}

export default reducer;
