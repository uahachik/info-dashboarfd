import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
  return (
    <Route
    {...rest}
    render={props => (auth ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.defaultProps = {
  Component: () => {},
  auth: false,
  rest: {},
};

PrivateRoute.propTypes = {
  Component: PropTypes.func,
  auth: PropTypes.bool,
  rest: PropTypes.object,
}

export default PrivateRoute;
