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

  isMainFeed() {
    if (this.props.location.pathname.slice(0,6) !== '/users') {
      return 'main-feed-margin-left';
    } else {
      return 'user-profile-left';
    }
  }
  
  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/posts/${this.props.postId}`} />
      );
    }
 
    let { post, author } = this.props;

    let images;
    if(Object.keys(post).length !== 0) {
      images = post.images.map((image,i) => (
      <li key={i} className='photoset-photo'>
        <img src={image.url}/>
      </li>
    ));
    }

    let postBody;
    if (post.postType === 'text') {
      postBody = <li className='text-post-body' dangerouslySetInnerHTML={{__html: post.body}}></li>;
    } else {
     postBody = <li className='post-body' dangerouslySetInnerHTML={{__html: post.summary}}></li>;
    }

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
                {images}
              </ul>
            </li>
            <li className='post-title'>{post.title}</li>
            {postBody}
            <li>
              <PostBottomNavContainer postId={this.props.postId}/>
            </li>
          </ul>
        </div>
      </div>
    );
   }
}