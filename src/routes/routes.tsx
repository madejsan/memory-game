import Layout from '@components/layout/layout.loadable';
import { routesConfig } from '@constants/routes';
import NotFoundPage from '@routes/notFound/notFound.loadable';
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        {routesConfig.routes.map((route) => (
          <Route component={route.component} exact={route.exact} key={route.key} path={route.path} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default Routes;
