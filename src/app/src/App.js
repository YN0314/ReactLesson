import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <Switch>
      {
        routes.map((route, index) => (
          <Route
            path = {route.path}
            exact = {route.exact}
            component = {route.component}
            key = {index}
            />
        ))
      }
    </Switch>
  );
}

export default withRouter(App);
