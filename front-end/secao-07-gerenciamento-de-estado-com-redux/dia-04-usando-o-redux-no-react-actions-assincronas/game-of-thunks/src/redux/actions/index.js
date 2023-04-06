// ./src/redux/actions/index.js
export const searchBegin = () => (
    { type: 'SEARCH_BEGIN' }
  );
  
  export const searchSuccess = (character) => (
    { type: 'SEARCH_SUCCESS', character }
  );
  
  export const searchFailure = (error) => (
    { type: 'SEARCH_ERROR', error }
  );
  
  export function thunkCharacter(name) {
    return async (dispatch) => {
      try {
        dispatch(searchBegin());
        const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
        const data = await response.json();
        dispatch(searchSuccess(data))
      } catch (error) {
        dispatch(searchFailure(error))
      }
    };
  };
  