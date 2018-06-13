import React from 'react';
import { Redirect } from 'react-router-dom';

import ProfilePostContainer from '../posts/profile_post_container';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
      .then( null, err => this.setState({isAvailable: false}));
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      debugger
      this.props.fetchUser(newProps.userId)
      .then( null, err => this.setState({isAvailable: false}));
    }
  }

  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to="/404" />
      );
    }

    let { posts, user } = this.props;
    const postComponents = Object.keys(posts).map( id => {
      let post = posts[id];
      if (post.userId !== user.id) return;
      return <li key={post.id}>
        <ProfilePostContainer post={post} author={this.props.user}/>
      </li>;
    });
    return(
      <div className='user-profile-container'>
        <ul>{postComponents}</ul>
      </div>
    );
   }
}