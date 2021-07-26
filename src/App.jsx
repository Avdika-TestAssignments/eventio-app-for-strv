import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTES } from './Config/routes';
import Login from './Components/Login';
import Events from './Components/EventsList';
import LoginManager from './Components/LogginManager';
import { UserProvider } from './Context/userContext';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import GlobalStyles from './Styles/globalStyled';

const App = () => {
  return (
    <UserProvider>
      <GlobalStyles />
      <LoginManager>
        <Switch>
          <PublicRoute path={[ROUTES.HOMEPAGE, ROUTES.LOGIN]}
            component={Login}
            exact
          />
          <PrivateRoute path={ROUTES.EVENTS} component={Events} />
        </Switch>
      </LoginManager>
    </UserProvider>
  );
}

export default App;
