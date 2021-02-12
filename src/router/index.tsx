import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../dashboard/index';
import Repository from '../repository/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
