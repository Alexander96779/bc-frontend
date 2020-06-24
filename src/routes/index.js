import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Route from './Route';
import Signup from '../pages/Authentication/Signup';
import VerifyEmail from '../pages/Authentication/Verification';

export default function index() {
  return (
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/verifyEmail" exact component={VerifyEmail} />
        </Switch>
  );
}
