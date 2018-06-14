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
import MainFeed from './feed/main_feed_container';
import SessionPage from './session/session_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostContainer from './posts/post_container';
import UserProfileContainer from './users/user_profile_container';
import LikesIndexContainer from '../components/likes/likes_index_container';
import fourOhFour from './errors/404';

export default class App extends React.Component {
  
  render() {
    return (
      <div className={`full-page`}>  
        <header>
          <HeaderContainer />
        </header>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <AuthRoute exact path="/" component={SessionPage} />
          <Route path='/posts/:postId' component={PostContainer} />
          <Route path='/users/:userId' component={UserProfileContainer} />
          <ProtectedRoute exact path="/dashboard" component={MainFeed} />
          <ProtectedRoute exact path="/likes" component={LikesIndexContainer} />
          <ProtectedRoute exact path="/users/:userId/likes" component={LikesIndexContainer} />
          <ProtectedRoute exact path="/" component={MainFeed} />
          <ProtectedRoute path="/new/" component={MainFeed} />
          <Route path='/' component={fourOhFour} />
        </Switch>
      </div>
    );
  }
}