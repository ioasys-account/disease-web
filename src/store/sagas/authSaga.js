import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/authReducer';
import { history } from '../../utils/routes';
import urls from '../../utils/constants/urls';

function* requestAuth({ payload }) {
  try {
    history.push(urls.ROUTES.HOME);
  } catch (errors) {
    yield put({
      type: Types.AUTH_FAIL,
      errors,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.AUTH_REQUEST, requestAuth);
}
