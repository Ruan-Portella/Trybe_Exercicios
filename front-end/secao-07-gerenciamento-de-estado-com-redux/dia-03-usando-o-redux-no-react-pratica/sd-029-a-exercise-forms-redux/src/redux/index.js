import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import globalState from './reducers';

const store = createStore(globalState, composeWithDevTools());

export default store;
