import React from 'react';
import { log } from 'util';

export default class Post extends React.Component {

  constructor(props) {
    super(props);
    }

  componentDidMount() {
   this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const post = this.props.post;
    console.log(post);
    
    return(
      <div>{post}</div>
    );
   }
}