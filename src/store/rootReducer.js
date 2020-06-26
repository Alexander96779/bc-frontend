import { combineReducers } from 'redux';
import signUpUser from './modules/authentication/Signup/reducer';
import currentUser from './modules/authentication/Verification/reducer';
import logInUser from './modules/authentication/Login/reducer';
import passwordForgot from './modules/authentication/ForgotPassword/reducer';
import passwordReset from './modules/authentication/ResetPassword/reducer';

const rootReducer = combineReducers({
  signUpUser,
  currentUser,
  logInUser,
  passwordForgot,
  passwordReset,
});
export default rootReducer;
