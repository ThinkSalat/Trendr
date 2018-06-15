import React from 'react';
import { Redirect } from 'react-router-dom';


import FeedPostContainer from '../posts/feed_post_container';
import SideBarContainer from '../feed/side_bar_container';


export default class LikesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getLikedPosts(this.props.userId)
      .then( 
        succ => window.scrollTo(0, 0),
        err => this.setState({isAvailable: false})
      );
  }

  componentWillReceiveProps(newProps) {
    if (newProps.userId !== this.props.userId) {
      this.props.getLikedPosts(this.props.userId)
        .then( 
          succ => window.scrollTo(0, 0),
          err => this.setState({isAvailable: false})
        );
    }
  }
  
  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/users/${this.props.match.params.userId}/likes`}/>
      );
    }

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