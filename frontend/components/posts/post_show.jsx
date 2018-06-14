import React from 'react';
import { Redirect } from 'react-router-dom';

import PostContainer from './post_container';

export default class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvailable: true,
      post: this.props.post
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
      .then( null, err => this.setState({isAvailable: false}));
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.postId !== this.props.match.params.postId) {
      this.props.fetchPost(newProps.match.params.postId)
      .then( null, err => this.setState({isAvailable: false}));
    }
  }

  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/posts/${this.props.postId}`} />
      );
    }

    const postId = this.props.match.params.postId;
    return(
      <PostContainer post={postId}/>
    );
  }
}