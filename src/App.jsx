import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './Config/routes';
import Login from './Components/Login';
import Events from './Components/EventsList';

const App = () => {
  return (
    <Switch>
      <Route path={[ROUTES.HOMEPAGE, ROUTES.LOGIN]} component={Login} exact />
      <Route path={ROUTES.EVENTS} component={Events} />
    </Switch>
  );
}

export default App;
