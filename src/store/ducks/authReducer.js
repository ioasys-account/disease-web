import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  authRequest: ['payload'],
  authSuccess: ['data'],
  authFail: ['error'],

  authLogOut: [],
  authLogOutSuccess: ['isLoading'],
  authLogOutFail: ['isLoading', 'error'],
});

const INITIAL_STATE = {
  auth: null,
};

const authRequest = (state) => ({ ...state, isLoading: true });
const authSuccess = (state) => ({
  ...state,
  isLoading: false,
});
const authFail = (state, error) => ({
  ...state,
  isLoading: false,
  error,
});
const authLogOut = (state) => ({ ...state });
const authLogOutSuccess = (state) => ({ ...state });
const authLogOutFail = (state, error) => ({ ...state, error });

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAIL]: authFail,
  [Types.AUTH_LOG_OUT]: authLogOut,
  [Types.AUTH_LOG_OUT_SUCCESS]: authLogOutSuccess,
  [Types.AUTH_LOG_OUT_FAIL]: authLogOutFail,
});
