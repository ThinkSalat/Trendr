import { connect } from 'react-redux';

import { fetchPost, updatePost, deletPost } from '../../actions/post_actions';
import {fetchUser} from '../../actions/session_actions';

import Post from './post';

const mapStateToProps = ({ entities: { posts, users }, session: { currentUser } }, { match: { params: { postId } } }) => {
  const post = posts[postId] || {};
  const author = users[post.userId] || {};
  return {
    post,
    author,
    postId,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    deletPost: postId => dispatch(deletPost(postId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Post);