import React from 'react';

export default class Post extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.postId !== this.props.postId) {
      this.props.fetchPost(newProps.postId);
    }
  }

  render() {

    // if (!post) return <div>not working</div>;

    const post = this.props.post;
    console.log(post.title);
    return(
      // <div>hi</div>
      <div>{post.title}</div>
    );
   }
}