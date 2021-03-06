import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Route from './Route';
import Signup from '../pages/Authentication/Signup';
import VerifyEmail from '../pages/Authentication/Verification';
import Login from '../pages/Authentication/Login';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/Authentication/ForgotPassword';
import ResetPassword from '../pages/Authentication/ResetPassword';
import UserRoles from '../pages/Authentication/UserRoles';
import GetProfile from '../pages/Profile/GetProfile';
import EditProfile from '../pages/Profile/EditProfile';
import CreateIncident from '../pages/incident/create';
import ViewIncidents from '../pages/incident/view';
import ViewSpecific from '../pages/incident/specific';
import Popup from '../components/Popup';

export default function index() {
  return (
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/verifyEmail" exact component={VerifyEmail} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/resetPassword" exact component={ResetPassword} />
          <Route path="/changeRole" exact component={UserRoles} />
          <Route path="/profile" exact component={GetProfile} />
          <Route path="/editProfile" exact component={EditProfile} />
          <Route path="/create" exact component={CreateIncident} />
          <Route path="/incidents" exact component={ViewIncidents} />
          <Route path="/readmore" exact component={ViewSpecific} />
          <Route path="/popup" exact component={Popup} />
        </Switch>
  );
}
