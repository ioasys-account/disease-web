import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import maps from './maps';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    maps,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
