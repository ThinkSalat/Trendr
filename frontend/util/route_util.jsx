import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }, ...passedProps) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} {...passedProps}/>
    ) : (
      <Redirect to="/dashboard" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact}, ...passedProps) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} {...passedProps}/>
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state, ownProps) => (
  {
    loggedIn: Boolean(state.session.id),
    passedProps: ownProps
  }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
