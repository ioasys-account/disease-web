import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
