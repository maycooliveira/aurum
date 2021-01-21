import { combineReducers } from 'redux';
import user from './user/reducer';

import lawsuit from './lawsuit/reducer';

export default combineReducers({
  lawsuit,
  user,
});
