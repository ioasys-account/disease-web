import { all } from 'redux-saga/effects';
import * as MapSaga from './mapsSaga';

function* Sagas() {
  yield all([MapSaga.watcherSaga()]);
}

export default Sagas;
