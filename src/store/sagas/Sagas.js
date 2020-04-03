import { all } from 'redux-saga/effects';
import * as AuthSaga from './authSaga';
import * as ConditionSaga from './conditionsSaga';

function* Sagas() {
  yield all([
    ConditionSaga.watcherSaga(),
    AuthSaga.watcherSaga(),
  ]);
}

export default Sagas;
