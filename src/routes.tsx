import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RenderRoutesProps, Routes } from './common/types/types';
import LoginPage from './pages/loginPage';

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: LoginPage },
  {
    path: '/app',
    key: 'APP',
    component: RenderRoutes, // here's the update
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: '/app/page',
        key: 'APP_PAGE',
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
  { path: '/login', key: 'APP_LOGIN', exact: true, component: LoginPage },
] as Routes[];

export function RenderRoutes(props: RenderRoutesProps) {
  const routes = props.routes as Array<any>;
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

function RouteWithSubRoutes(route: Routes) {
  return <Route path={route.path} exact={route.exact} render={(props) => <route.component {...props} routes={route.routes} />} />;
}

export default ROUTES;
