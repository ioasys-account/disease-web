/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { history } from 'utils/routes';
import Reducers from './ducks';
import Sagas from './sagas/Sagas';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
export const store = createStore(
  Reducers(history),
  reduxDevTools
    ? compose(
      applyMiddleware(...middlewares),
      reduxDevTools,
    )
    : compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(Sagas);
