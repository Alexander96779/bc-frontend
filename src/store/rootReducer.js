import { combineReducers } from 'redux';
import signUpUser from './modules/authentication/Signup/reducer';
import currentUser from './modules/authentication/Verification/reducer';

const rootReducer = combineReducers({
  signUpUser,
  currentUser,
});
export default rootReducer;
