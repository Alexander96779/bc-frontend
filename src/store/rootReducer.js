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
import specificIncident from './modules/incident/specific/reducers';
import editIncident from './modules/incident/update/reducers';
import removeIncident from './modules/incident/delete/reducer';
import acceptRejectIncident from './modules/incident/accept and reject/reducer';

const rootReducer = combineReducers({
  signUpUser,
  currentUser,
  logInUser,
  passwordForgot,
  passwordReset,
  getAllUsers,
  userProfile,
  incidentCreate,
  getAll,
  specificIncident,
  editIncident,
  removeIncident,
  acceptRejectIncident
});
export default rootReducer;
