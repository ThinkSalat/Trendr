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

  // ..current user not updating

  componentWillReceiveProps(newProps) {
    if (newProps.userId !== this.props.userId) {
      this.setState({
        following: newProps.currentUser.followedUsers.includes(parseInt(newProps.userId)),
        follow: { 
          followed_id: newProps.userId,
          follower_id: this.props.currentUser.id
        }
      });
    }
  }
   
  changeFollowStatus() {
    (this.props.currentUser.followedUsers.includes(parseInt(this.props.userId)) ? this.props.unfollowUser(this.state) : this.props.followUser(this.state)).then(() => {
      this.setState({following: !this.state.following});
    });
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