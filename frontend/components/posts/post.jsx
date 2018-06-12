import React from 'react';
import { Redirect } from 'react-router-dom';

import PostBottomNav from './post_bottom_nav';

export default class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true,
      post: this.props.post
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId)
      .then( null, err => this.setState({isAvailable: false}));
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.postId !== this.props.postId) {
      this.props.fetchPost(newProps.postId)
      .then( null, err => this.setState({isAvailable: false}));
    }
  }
  
  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to="/404" />
      );
    }

    let { post, author } = this.props;

    const images = post.images.map((image,i) => (
      <li key={i} className='photoset-photo'>
        <img src={image.url}/>
      </li>
    ));
    return(
      <div className='post-container'>
        <ul>
          <li className='post-header' >
            <span>{author.username}</span>
          </li>
          <li>
            <ul className='post-media' >
              {images}
            </ul>
          </li>
          <li className='post-title' >{post.title}</li>
          <li className='post-body' dangerouslySetInnerHTML={{__html: (post.body || post.summary)}}></li>
          <li><PostBottomNav post={post}/></li>
        </ul>
      </div>
    );
   }
}