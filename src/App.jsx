import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './Config/routes';
import Login from './Components/Login';
import Events from './Components/EventsList';
import LoginWrapper from './Components/LogginWrapper';
import { UserProvider } from './Context/userContext';

const App = () => {
  return (
    <UserProvider>
      <LoginWrapper>
        <Switch>
          <Route
            path={[ROUTES.HOMEPAGE, ROUTES.LOGIN]}
            component={Login}
            exact
          />
          <Route path={ROUTES.EVENTS} component={Events} />
        </Switch>
      </LoginWrapper>
    </UserProvider>
  );
}

export default App;
