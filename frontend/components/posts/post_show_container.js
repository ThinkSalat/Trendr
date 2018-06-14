import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './post_show';

import { fetchPost, updatePost, deletPost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    deletPost: postId => dispatch(deletPost(postId))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostShow));