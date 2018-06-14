import React from 'react';

export default class FollowingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: props.currentUser.followedUsers.includes(parseInt(props.userId)),
      follow: {
        follower_id: props.currentUser.id,
        followed_id: props.userId
      }
    };
  }

   
  changeFollowStatus() {
    (this.state.following ? this.props.unfollowUser(this.state) : this.props.followUser(this.state)).then(() => {
      this.setState({following: !this.state.following});
    });
  }

  followDisplay() {
    return this.state.following ?  'Unfollow' : 'Follow'; 
  }
  render() {
    return(
      <div className='following-switcher' onClick={() => this.changeFollowStatus()}>{this.followDisplay()}</div>
    );
   }
}