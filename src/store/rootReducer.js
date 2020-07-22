import { combineReducers } from 'redux';
import signUpUser from './modules/authentication/Signup/reducer';
import currentUser from './modules/authentication/Verification/reducer';
import logInUser from './modules/authentication/Login/reducer';
import passwordForgot from './modules/authentication/ForgotPassword/reducer';
import passwordReset from './modules/authentication/ResetPassword/reducer';
import getAllUsers from './modules/authentication/UserRoles/reducer';
import userProfile from './modules/Profile/reducer';
import incidentCreate from './modules/incident/create/reducer';
import getAll from './modules/incident/view/reducers';

const rootReducer = combineReducers({
  signUpUser,
  currentUser,
  logInUser,
  passwordForgot,
  passwordReset,
  getAllUsers,
  userProfile,
  incidentCreate,
  getAll
});
export default rootReducer;
