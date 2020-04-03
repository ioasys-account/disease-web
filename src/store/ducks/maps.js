import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getInfo: ['payload'],
  getInfoSuccess: ['data'],
  getInfoFail: ['error'],
});

const INITIAL_STATE = {
  data: null,
};

const getInfo = (state) => ({ ...state, isLoading: true });
const getInfoSuccess = (state, { data }) => ({
  ...state,
  isLoading: false,
  data,
});
const getInfoFail = (state, error) => ({
  ...state,
  isLoading: false,
  error,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_INFO]: getInfo,
  [Types.GET_INFO_SUCCESS]: getInfoSuccess,
  [Types.GET_INFO_FAIL]: getInfoFail,
});
