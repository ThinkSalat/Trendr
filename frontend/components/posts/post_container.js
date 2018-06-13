import { connect } from 'react-redux';

import { fetchPost, updatePost, deletPost } from '../../actions/post_actions';

import Post from './post';

const mapStateToProps = ({ entities: { posts, users }, session: { id } }, { match: { params: { postId } } }) => {
  const post = posts[postId] || {};
  const author = users[post.userId] || {};
  const currentUser = users[id] || {};
  // debugger
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