import { takeLatest, put } from 'redux-saga/effects';
import { Types } from 'store/ducks/maps';

const axios = require('axios');

function* getInfo() {
  try {
    const response = yield axios
      .get(
        'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10'
      )
      .then((resp) => resp)
      .catch((error) => {
        throw error;
      });
    yield put({
      type: Types.GET_INFO_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({ type: Types.GET_INFO_FAIL, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.GET_INFO, getInfo);
}
