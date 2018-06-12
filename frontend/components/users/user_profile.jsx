import React from 'react';
import ProfilePostContainer from '../posts/profile_post_container';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true,
      posts: this.props.posts,
      user: this.props.user
    }
  }

  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to="/404" />
      );
    }
    const posts = this.props.posts.map( post => {
      return <ProfilePostContainer post={post} author={this.props.user}/>;
    });
    return(
      <div className='user-profile-container'>

      </div>
    );
   }
}