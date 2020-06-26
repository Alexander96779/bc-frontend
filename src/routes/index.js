import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Route from './Route';
import Signup from '../pages/Authentication/Signup';
import VerifyEmail from '../pages/Authentication/Verification';
import Login from '../pages/Authentication/Login';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/Authentication/ForgotPassword';

export default function index() {
  return (
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/verifyEmail" exact component={VerifyEmail} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
        </Switch>
  );
}
