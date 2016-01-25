import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import auth from './auth';
import {reducer as form} from 'redux-form';
import raining from './raining';

export default combineReducers({
  router: routerStateReducer,
  raining,
  auth,
  form,
});
