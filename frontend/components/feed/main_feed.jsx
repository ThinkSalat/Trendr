import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import NewPostNavContainer from './new_post_nav_container';
import FormContainer from '../forms/forms_container';
import FeedPostContainer from '../posts/feed_post_container';
import SideBarContainer from '../feed/side_bar_container.js';

export default class MainFeed extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPosts().then(succ => window.scrollTo(0, 0));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchPosts().then(succ => window.scrollTo(0, 0));
    }
  }

   render() {
    const { posts } = this.props;
    const postComponents = Object.keys(posts).sort((a,b) => b-a).map(postId => {
      let post = posts[postId];
      return (
        <li key={post.id}>
          <FeedPostContainer post={post}/>
        </li>
      );
    });
    return (
      <div className='main-feed-container'>
        <div className='main-content'>
          <ol className='main-content-feed col-1'>
            <li className='new-post-nav-avatar'> 
              <Link to={`/users/${this.props.currentUser.id}`}><img src={this.props.currentUser.avatar}></img></Link> 
            </li>
            <li className='post-nav-header-container'>
              <NewPostNavContainer />
              <Switch>
                <ProtectedRoute exact path='/new/text' component={(props) => <FormContainer {...props} postType={'text'} />}  />
                <ProtectedRoute exact path='/new/photo' component={(props) => <FormContainer {...props} postType={'photo'} />}  />
                <ProtectedRoute exact path='/new/quote' component={(props) => <FormContainer {...props} postType={'quote'} />}  />
                <ProtectedRoute exact path='/new/link' component={(props) => <FormContainer {...props} postType={'link'} />}  />
                <ProtectedRoute exact path='/new/chat' component={(props) => <FormContainer {...props} postType={'chat'} />}  />
                <ProtectedRoute exact path='/new/audio' component={(props) => <FormContainer {...props} postType={'audio'} />}  />
                <ProtectedRoute exact path='/new/video' component={(props) => <FormContainer {...props} postType={'video'} />}  />
              </Switch>
            </li>

            <div className='main-feed'>  {/*  <MainFeedContainer /> */}
              <div></div>
              <div></div>
            </div>
            <ul className='feed-posts'>
              {postComponents}
            </ul>
          </ol>
        </div>
        <div className='main-content-sidebar col-2'>
          <SideBarContainer />
        </div>
      </div>
    );
  }
}
