import React from 'react';

export default class FollowingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: props.currentUser.followedUsers.includes(parseInt(props.userId))
    };
  }

   
  changeFollowStatus() {
    console.log('changing follow status');
    console.log(this.state.following ? 'true' : 'false');
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