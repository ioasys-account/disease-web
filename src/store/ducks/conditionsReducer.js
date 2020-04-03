/* eslint-disable max-len */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  conditionAdd: ['name', 'payload'],
  conditionRemove: ['id'],
});

const INITIAL_STATE = [];


const conditionAdd = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), name: action.payload.name, complete: false },
];

// eslint-disable-next-line max-len
const conditionRemove = (state = INITIAL_STATE, action) => state.filter((condition) => condition.id !== action.id);

export default createReducer(INITIAL_STATE, {
  [Types.CONDITION_ADD]: conditionAdd,
  [Types.CONDITION_REMOVE]: conditionRemove,
});
