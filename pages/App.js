/* eslint-disable */

import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider as ReactReduxProvier} from 'react-redux';
import thunk from 'redux-thunk';

import Theme from './Theme';
import appReducer from '../store/reducers/app';
import authReducer from '../store/reducers/auth';

export default function App() {
  const rootReducer = combineReducers({
    authReducer: authReducer,
    appReducer: appReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <ReactReduxProvier store={store}>
      <Theme />
    </ReactReduxProvier>
  );
}
