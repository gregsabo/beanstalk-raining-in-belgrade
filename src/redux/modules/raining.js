import { isNull } from 'lodash';
import { Map } from 'immutable';
import actionTrio from 'utils/actionTrio';

const LOAD = actionTrio('raining-in-belgrade/raining/LOAD');

const initialState = {
  isRaining: null
};

export default function reducer(stateObj = initialState, action = {}) {
  const state = new Map(stateObj);
  switch (action.type) {
    case LOAD.SUCCESS:
      return state.set('isRaining', action.result.isRaining);
    default:
      return state;
  }
}

export function isLoaded(state) {
  return !isNull(state.raining.get('isRaining'));
}

export function load() {
  return {
    types: LOAD.trio,
    promise: client => client.get('/raining')
  };
}
