import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import urls from 'utils/constants/urls';
import Auth from 'containers/Auth';
import Home from 'containers/Home';
import Profile from 'containers/Profile';
import Doctors from 'containers/Doctors';
import Conditions from 'containers/Conditions';
import Symptoms from 'containers/Symptoms';
import Admins from 'containers/Admins';
import isAuthenticated from './isAuthenticated';

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
      <PrivateRoute exact path={urls.ROUTES.PROFILE} component={Profile} />
      <PrivateRoute exact path={urls.ROUTES.DOCTORS} component={Doctors} />
      <PrivateRoute exact path={urls.ROUTES.CONDITIONS} component={Conditions} />
      <PrivateRoute exact path={urls.ROUTES.SYMPTOMS} component={Symptoms} />
      <PrivateRoute exact path={urls.ROUTES.ADMINS} component={Admins} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
