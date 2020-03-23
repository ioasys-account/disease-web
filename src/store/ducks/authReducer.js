import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  authRequest: ['payload'],
  authSuccess: ['data'],
  authFail: ['error'],
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

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAIL]: authFail,
});
