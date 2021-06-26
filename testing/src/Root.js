import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

//NOTE: GOOGLE: redux setup
//NOTE: reusable higher order component which has redux setup
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    //NOTE: GOOGLE: apply redux middleware
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};
