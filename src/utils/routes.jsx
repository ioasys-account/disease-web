import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import isAuthenticated from './isAuthenticated';
import urls from './constants/urls';
import Auth from '../containers/Auth';
import Home from '../containers/Home';

export const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: urls.ROUTES.LOGIN, state: { from: props.location } }}
      />
    ))}
  />
);

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={urls.ROUTES.APP} component={Auth} />
      <PrivateRoute exact path={urls.ROUTES.HOME} component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
