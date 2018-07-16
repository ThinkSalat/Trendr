import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost, updatePost, deletPost } from '../../actions/post_actions';

import Post from './post';

const mapStateToProps = ({ entities: { posts, users, images }, session: { id } }, {post, author}) => {
  images = images;
  const currentUser = users[id];

  return {
    post,
    images,
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