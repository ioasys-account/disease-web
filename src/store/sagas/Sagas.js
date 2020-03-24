import { all } from 'redux-saga/effects';
import * as AuthSaga from './authSaga';
function* Sagas() {
  yield all([AuthSaga.watcherSaga()]);
}

export default Sagas;
