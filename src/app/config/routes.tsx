import React, { ComponentClass } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '@core/pages/main';
import LoginPage from '@core/pages/login';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage as ComponentClass} />
      <Route path="/login" exact component={LoginPage as ComponentClass} />
      <Route
        path="/externalLogin"
        exact
        component={() => {
          window.location.href = `http://www.last.fm/api/auth/?api_key=${process.env.API_KEY}&cb=${process.env.APP_URL}/login`;
          return null;
        }}
      />
    </Switch>
  </Router>
);
