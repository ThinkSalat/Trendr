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

  componentWillReceiveProps(newProps) {
    if (newProps.userId !== this.props.userId) {
      this.setState({
        following: newProps.currentUser.followedUsers.includes(parseInt(newProps.userId)),
      });
    }
  }
   
  changeFollowStatus() {
    (this.state.following ? this.props.unfollowUser(this.state) : this.props.followUser(this.state)).then(() => {
      console.log('changing follow status');
      this.setState({following: !this.state.following});
    }, err => console.log(err)
  );
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