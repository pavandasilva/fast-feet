import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SigIn from '~/pages/SigIn';
import Orders from '~/pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Orders} />
      <Route path="/orders" component={Orders} />
    </Switch>
  );
}
