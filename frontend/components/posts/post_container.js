import { connect } from 'react-redux';

import { fetchPost, updatePost, deletPost } from '../../util/post_api_util';

import Post from './post';

const mapStateToProps = ({ entities: { posts } }, { match: { params: { postId } } }) => {
  return {
    post: posts[postId]
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