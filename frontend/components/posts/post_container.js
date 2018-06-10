import { connect } from 'react-redux';

import { fetchPost, updatePost, deletPost } from '../../actions/post_actions';

import Post from './post';

const mapStateToProps = ({ entities: { posts }, session: { currentUser } }, { match: { params: { postId } } }) => {
  return {
    post: posts[postId],
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