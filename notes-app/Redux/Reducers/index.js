import { combineReducers } from 'redux';
import user from './Auth';
const rootReducer = combineReducers({
  user,
});

export default rootReducer;