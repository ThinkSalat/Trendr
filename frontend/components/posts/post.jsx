import React from 'react';
import { Redirect, Link } from 'react-router-dom';

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
    if (this.props.post.postType === "audio") {
      return (
        <audio controls>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    }
  }

  postBody() {
    const {post} = this.props;
    if (post.postType === 'text') {
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
              {this.postAudio()}
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