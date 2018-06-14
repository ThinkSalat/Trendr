import React from 'react';

import FeedPostContainer from '../posts/feed_post_container';

export default class LikesIndex extends React.Component {
  constructor(props) {
    super(props);
    //can check if current path is users/:id or /likes (defaults to current user)

  }

  componentDidMount() {
    this.props.getLikedPosts(this.props.userId);
  }

  render() {
    // if (!this.state.isAvailable) {
    //   return(
    //     <Redirect to="/404" />
    //   );
    // }

    //if no liked posts, return a diff page that says they have no liked posts and a link to the explore page

    const { posts, users } = this.props;
    const postComponents = Object.keys(posts).map(postId => {
      let post = posts[postId];
      let author = users[post.userId];
      debugger
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
      </div>
    );
   }
}