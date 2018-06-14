import React from 'react';

export default class FollowingButton extends React.Component {

  following() {
    return this.props.currentUser.followedUsers.includes(parseInt(this.props.userId));
  }
  // ..current user not updating
  follow() {
    return {follow: {
      follower_id: this.props.currentUser.id,
      followed_id: this.props.userId
    }};
  }

  changeFollowStatus() {
   if (this.following()) {
     this.props.unfollowUser(this.follow());
    } else { 
      this.props.followUser(this.follow());
    }
  }

  followDisplay() {
    return this.props.currentUser.followedUsers.includes(parseInt(this.props.userId)) ?  'Unfollow' : 'Follow'; 
  }
  render() {
    return(
      <div className='following-switcher' onClick={() => this.changeFollowStatus()}>{this.followDisplay()}</div>
    );
   }
}