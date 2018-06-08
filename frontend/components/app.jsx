import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import MainFeed from './main_feed_container';
import SessionPage from './session/session_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFromContainer from './session/signup_form_container';
// imports folded

export default class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      bg: `bg-${Math.floor(Math.random()*18)}`
    };
  }
  render() {
    return (
      <div className={`full-page ${this.state.bg}`}>  
        <header>
          <HeaderContainer />
        </header>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFromContainer} />
          <AuthRoute exact path="/" component={SessionPage} />
          <ProtectedRoute exact path="/dashboard" component={MainFeed} />
          <ProtectedRoute exact path="/" component={MainFeed} />
        </Switch>
      </div>
    );
  }
}