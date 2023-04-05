import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../redux/reducers';


let importedReducer = reducer;
if(typeof reducer !== 'function') {
  importedReducer = (s = {}, a) => s;
}


const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(importedReducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  store,
  history,
});

export const renderWithRouterAndReduxWithoutInitialState = (
  component,
  {
    store = createStore(importedReducer),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  store,
  history,
});


export default renderWithRouterAndRedux;
