import { combineReducers } from 'redux';
import signUpUser from './modules/authentication/Signup/reducer';

const rootReducer = combineReducers({ signUpUser });
export default rootReducer;
