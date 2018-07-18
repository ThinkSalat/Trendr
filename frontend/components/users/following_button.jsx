import React from 'react';

export default class FollowingButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { following: this.following() }
  }

  following() {
    return this.props.currentUser.followedUsers.includes(parseInt(this.props.userId));
  }
  
  followInfo() {
    return {follow: {
      follower_id: this.props.currentUser.id,
      followed_id: this.props.userId
    }};
  }

  changeFollowStatus() {
   if (this.state.following) {
     this.setState({following: false})
      this.props.unfollowUser(this.followInfo());
    } else { 
      this.setState({following: true})
       this.props.followUser(this.followInfo());
    }
  }

  followDisplay() {
    // return this.props.currentUser.followedUsers.includes(parseInt(this.props.userId)) ?  'Unfollow' : 'Follow'; 
    return this.state.following ?  'Unfollow' : 'Follow'; 
  }
  render() {
    return(
      <div className='following-switcher' onClick={this.changeFollowStatus.bind(this)}>{this.followDisplay()}</div>
    );
   }
}