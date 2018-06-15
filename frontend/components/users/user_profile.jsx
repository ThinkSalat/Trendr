import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import ProfilePostContainer from '../posts/profile_post_container';
import FollowingButtonContainer from './following_button_container';
import LikesIndexContainer from '../likes/likes_index_container';
import SideBarContainer from '../feed/side_bar_container';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchUser(this.props.userId)
      .then( 
        succ =>   window.scrollTo(0, 0),
        err => this.setState({isAvailable: false})
      );
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      this.props.fetchUser(newProps.userId)
      .then( 
        succ => window.scrollTo(0, 0), 
        err => this.setState({isAvailable: false})
      );
    }
  }

  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/users/${this.props.match.params.userId}`} />
      );
    }
   
    let { posts, user } = this.props;

    if (Object.keys(posts).length === 0) {
      // make main content left: 0px;
    }

    const postComponents = Object.keys(posts).sort((a,b) => b-a).map( id => {
      let post = posts[id];
      return <li key={post.id}>
        <ProfilePostContainer post={post} author={this.props.user}/>
      </li>;
    });
    return(
      <div className='main-feed-container'>
        <div className='user-profile-container'>
      <ul className='user-profile-info-container-container'>
      <li className='user-profile-info-container'>
      <ul className='user-profile-nav'>
        <li><img className='large-avatar' src={this.props.user.avatar} alt={this.props.user.username}/></li>
        <li><FollowingButtonContainer currentUser={this.props.currentUser} userId={this.props.userId}/></li>
        <li> <Link className='likes-link' to={`/users/${this.props.userId}/likes`}>Likes</Link> </li>
        <li> <Link className='followers-link' to={`/users/${this.props.userId}/followers`}>Followers</Link> </li>
        <li> <Link className='followed-users-link' to={`/users/${this.props.userId}/followed_users`}>Followed Users</Link> </li>
      </ul>
      <ul className='user-profile-info'>
      <li>{this.props.user.title}</li>
      <li>{this.props.user.description}</li>
      {/* followers, following, likes etc. num followers could go here */}
      {/* last post created at date */}
      </ul>
      </li>
      {postComponents}
      </ul>
      </div>
      <div className='main-content-sidebar col-2'>
      <SideBarContainer />
      </div>
      </div>
      
    );
   }
}