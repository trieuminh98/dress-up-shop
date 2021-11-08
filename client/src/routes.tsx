import HomePage from 'pages/homePage';
import RegisterPage from 'pages/RegisterPage';
import SignInPage from 'pages/SignInPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RenderRoutesProps, Routes } from './common/types/types';

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: HomePage },
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
  { path: '/register', key: 'APP_REGISTER', exact: true, component: RegisterPage },
  { path: '/login', key: 'APP_LOGIN', exact: true, component: SignInPage },
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
