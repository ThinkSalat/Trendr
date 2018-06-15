import React from 'react';

import FeedPostContainer from '../posts/feed_post_container';
import SideBarContainer from '../feed/side_bar_container';

export default class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getRandomPosts(5);
  }

  
  render() {

    const { posts, users } = this.props;
    const postComponents = Object.keys(posts).map(postId => {
      let post = posts[postId];
      let author = users[post.userId];
      return (
        <li key={post.id}>
          <FeedPostContainer post={post} author={author}/>
        </li>
      );
    });
    return(
      <div className='main-feed-container'>
        <div className='main-content'>
            <ul className='feed-posts'>
              {postComponents}
            </ul>
        </div>
        <div className='main-content-sidebar col-2'>
          <SideBarContainer />
        </div>
      </div>
    );
   }
}