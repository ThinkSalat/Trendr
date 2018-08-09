import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

import PostBottomNavContainer from './post_bottom_nav_container';

export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAvailable: true,
      post: this.props.post
    };
  }

  isAvailable() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/posts/${this.props.postId}`} />
      );
    }
  }

  isMainFeed() {
    if (this.props.location.pathname.slice(0,6) !== '/users') {
      return 'main-feed-margin-left';
    } else {
      return 'user-profile-left';
    }
  }

  postImages() {
    const {post} = this.props;
    if(Object.keys(post).length !== 0 && post.postType !== 'audio') {
      return post.images.map((image,i) => (
      <li key={i} className='photoset-photo'>
        <img src={image.url}/>
      </li>
    ));
    }
  }

  postAudio() {
    const {post} = this.props;
    if(Object.keys(post).length !== 0 && post.postType === 'audio') {
      return post.images.map((audio,i) => (
        <li key={i}><audio controls>
        <source src={audio.url}  />
        Your browser does not support the audio element.
        </audio></li>
      ));
    }
  }
  
  postVideos() {
    const {post} = this.props;
    if(Object.keys(post).length !== 0 && post.postType === 'video') {
      return post.images.map((video,i) => (
        <li key={i}>
          <video width='540' controls>
          <source src={video.url}  />
          Your browser does not support the audio element.
          </video>
        </li>
      ));
    }
  }

  postBody() {
    const {post} = this.props;
    if (['text', 'chat'].includes(post.postType)) {
      return <li className='text-post-body' dangerouslySetInnerHTML={{__html: post.body}}></li>;
    } else {
     return <li className='post-body' dangerouslySetInnerHTML={{__html: post.summary}}></li>;
    }
  }
  
  render() {
    this.isAvailable();
    let { post, author } = this.props;

    return(
      <div className={`post-and-avatar-container ${this.isMainFeed()}`}>
        <div className='post-avatar'>
          <Link to={`/users/${author.id}`}>
            <img src={author.avatar}></img>
          </Link>
        </div>
        <div className={`post-container`}>
          <ul>
            <li className='post-header'>
              <span>
                <Link to={`/users/${author.id}`}>{author.username}</Link>
              </span>
            </li>
            <li>
              <ul className='post-media'>
                {this.postImages()}
              </ul>
              <ul>
                {this.postAudio()}
              </ul>
              <ul>
                {this.postVideos()}
              </ul>
            </li>
            <li className='post-title'>{post.title}</li>
            {this.postBody()}
            <li>
              <PostBottomNavContainer postId={this.props.postId}/>
            </li>
          </ul>
        </div>
      </div>
    );
   }
}

Post.defaultProps = {
  post: {},
  author: {},
  currentUser: {}
}

Post.propTypes = {
  post: PropTypes.object,
  author: PropTypes.object,
  currentUser: PropTypes.object,
  postId: PropTypes.number,
}