import React, { Fragment } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';

interface PublicRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PublicRoute = ({
  component: Component,
  path,
  ...rest
}: PublicRouteProps) => {
  const render = (props: RouteComponentProps) => {
    return (
      <Fragment>
        <Header />
        <Component {...props} />
      </Fragment>
    );
  };

  return <Route path={path} render={render} {...rest} />;
};

export default PublicRoute;
