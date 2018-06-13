import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import NewPostNavContainer from './new_post_nav_container';
import FormContainer from '../forms/forms_container';
import FeedPostContainer from '../posts/feed_post_container';


export default class MainFeed extends React.Component {

  componentDidMount() {
    // will take in a user id. 
    // eventually will return things in order but for now just randomly
    this.props.fetchPosts();
  }

   render() {
    const { posts } = this.props;
    const postComponents = Object.keys(posts).map(postId => {
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
            <div className='new-post-nav-avatar'> 
              <Link to={`/users/${this.props.currentUser.id}`}><img src={this.props.currentUser.avatar}></img></Link> 
            </div>
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
          <div></div>
        </div>
      </div>
    );
  }
}
