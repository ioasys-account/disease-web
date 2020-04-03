import { all } from 'redux-saga/effects';
import * as MapSaga from './mapsSaga';
import * as AuthSaga from './authSaga';
function* Sagas() {
  yield all([
     MapSaga.watcherSaga(),
     AuthSaga.watcherSaga()
  ]);
}

export default Sagas;
