import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';

export default function Auth() {
  return (
    <div className='auth'>
      <Switch>
        <Route path='/' component={Login} exact />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}
