import React from 'react';
import { Redirect } from 'react-router-dom';


import FeedPostContainer from '../posts/feed_post_container';

export default class LikesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true
    };
  }

  componentDidMount() {
    this.props.getLikedPosts(this.props.userId)
      .then( null, err => this.setState({isAvailable: false}));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.userId !== this.props.userId) {
      this.props.getLikedPosts(this.props.userId)
        .then( null, err => this.setState({isAvailable: false}));
    }
  }
  
  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/users/${this.props.match.params.userId}/likes`}/>
      );
    }

    //if no liked posts, return a diff page that says they have no liked posts and a link to the explore page

    const { posts, users } = this.props;
    console.log(posts, 'posts');
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
      </div>
    );
   }
}