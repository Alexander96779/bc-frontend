import { combineReducers } from 'redux';
import signUpUser from './modules/authentication/Signup/reducer';
import currentUser from './modules/authentication/Verification/reducer';
import logInUser from './modules/authentication/Login/reducer';

const rootReducer = combineReducers({
  signUpUser,
  currentUser,
  logInUser
});
export default rootReducer;
