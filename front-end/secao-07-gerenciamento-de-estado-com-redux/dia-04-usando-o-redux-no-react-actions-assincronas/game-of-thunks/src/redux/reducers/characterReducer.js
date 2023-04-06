// ./src/redux/reducers/characterReducer.js
const initialState = {
    isLoading: false,
    character: '',
  }
  
  function characterReducer(state = initialState, action) {
    switch (action.type) {
      case 'SEARCH_BEGIN':
        return {
          ...state,
          isLoading: true,
        }
      case 'SEARCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          character: action.character[0],
        }
      case 'SEARCH_ERROR':
        return {
          ...state,
          isLoading: false,
          error: action.error,
        }
      default:
        return state
    }
  }
  
  export default characterReducer;
  