import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({
  // Add your reducers here
  users: users,
});

export default rootReducer;
