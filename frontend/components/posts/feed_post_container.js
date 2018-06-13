import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { fetchPost, updatePost, deletPost } from '../../actions/post_actions';

import Post from './post';

const mapStateToProps = ({ entities: { posts, users }, session: { id } }, {post, author}) => {
  const currentUser = users[id] || {};
  author = author || users[post.userId];
  return {
    post,
    author,
    postId: post.id,
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post));