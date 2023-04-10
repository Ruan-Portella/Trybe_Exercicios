import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

const getStore = (initialState) => createStore(
  combineReducers({ reducer }),
  initialState,
  applyMiddleware(thunk),
);

const renderWithRedux = (
  component,
  { initialState, store = getStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

export default renderWithRedux;
