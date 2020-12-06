import React, { Fragment } from 'react';
import {
  Route,
  RouteProps,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
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
        <ErrorBoundary fallback={HeaderFallback}>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary fallback={GenericFallback}>
          <Component {...props} />
        </ErrorBoundary>
      </Fragment>
    );
  };

  return <Route path={path} render={render} {...rest} />;
};

export default PublicRoute;

const GenericFallback = () => {
  return <h1>something went wrong</h1>;
};

const HeaderFallback = () => {
  return <Redirect to="/404" />;
};
