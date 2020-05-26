import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Init from './components/Init';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Init} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;