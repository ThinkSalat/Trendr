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
import UserProfileContainer from './users/user_profile_container';
import LikesIndexContainer from '../components/likes/likes_index_container';
import fourOhFour from './errors/404';
import PostShowContainer from './posts/post_show_container';
import FollowersContainer from './followings/followers_container';
import FollowedUsersContainer from './followings/followed_users_container';
import ExplorePageContainer from './feed/explore_page_container';



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
          <ProtectedRoute path='/posts/:postId' component={PostShowContainer} />
          <ProtectedRoute exact path='/users/:userId' component={UserProfileContainer} />
          <ProtectedRoute exact path="/dashboard" component={MainFeed} />
          <ProtectedRoute exact path="/likes" component={LikesIndexContainer} />
          <ProtectedRoute exact path="/users/:userId/likes" component={LikesIndexContainer}/>
          <ProtectedRoute exact path="/followers" component={FollowersContainer}/>
          <ProtectedRoute exact path="/followed_users" component={FollowedUsersContainer}/>
          <ProtectedRoute exact path="/users/:userId/followers" component={FollowersContainer}/>
          <ProtectedRoute exact path="/users/:userId/followed_users" component={FollowedUsersContainer}/>
          <ProtectedRoute exact path="/explore" component={ExplorePageContainer}/>
          <ProtectedRoute exact path="/" component={MainFeed} />
          <ProtectedRoute path="/new/" component={MainFeed} />
          <Route path='/' component={fourOhFour} />
        </Switch>
      </div>
    );
  }
}