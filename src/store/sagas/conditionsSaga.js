/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { Types } from 'store/ducks/conditionsReducer';

const BASE_URL = 'https://besafe-backend.herokuapp.com/';


function* addCondition(action) {
  const newCondition = { name: '', content: action.payload };
  try {
    yield call(axios.post, `${BASE_URL}/posts`, newCondition);
    yield put({ type: 'CONDITION_ADD' });
  } catch (error) {
    console.log('addCondition error:', error.message);
  }
}

function* removeCondition({ id }) {
  try {
    yield call(axios.delete, `${BASE_URL}/posts/${id}`);
    yield put({ type: 'CONDITION_REMOVE' });
  } catch (error) {
    console.log('removeCondition error:', error.message);
  }
}

export function* watcherSaga() {
  yield takeEvery(Types.ASYNC_CONDITION_ADD, addCondition);
  yield takeEvery(Types.ASYNC_CONDITION_REMOVE, removeCondition);
}
