import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Route from './Route';
import Signup from '../pages/Authentication/Signup';

export default function index() {
  return (
        <Switch>
          <Route path="/signup" exact component={Signup} />
        </Switch>
  );
}
